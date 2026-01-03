---
name: dockerize
description: Generate Docker and docker-compose files based on project stack
---

Analyze the current project and generate production-ready Docker configuration files (Dockerfile, docker-compose.yml, .dockerignore, etc.) tailored to the detected technology stack.

# Objective

Use the `dockerizer` agent to perform deep analysis of the project structure, detect dependencies and services, and generate optimized Docker configurations with minimal user interaction.

# Process Overview

The dockerization process consists of three phases:

## Phase 1: Deep Analysis

The agent will automatically:

1. **Detect Technology Stack**
   - Analyze configuration files (`package.json`, `requirements.txt`, `go.mod`, `Cargo.toml`, `pom.xml`, etc.)
   - Identify primary language, framework, and versions
   - Detect build tools and package managers

2. **Scan Codebase for Dependencies**
   - Search entire codebase for database connections (PostgreSQL, MySQL, MongoDB, SQLite)
   - Identify caching systems (Redis, Memcached)
   - Detect message queues (RabbitMQ, Kafka, Bull)
   - Find search engines (Elasticsearch, OpenSearch)
   - Discover cloud services (AWS, S3, etc.)

3. **Analyze Project Structure**
   - Determine if project is single-app or monorepo
   - Identify subprojects in monorepos (`apps/`, `packages/`, `services/`)
   - Map dependencies for each subproject
   - Detect workspace configurations

4. **Extract Configuration Details**
   - Parse `.env`, `.env.example` files
   - Identify environment variables used in code
   - Detect ports and connection strings
   - Analyze build scripts

5. **Check Existing Docker Files**
   - Verify if Dockerfile, docker-compose.yml already exist
   - Determine backup/update strategy needed

## Phase 2: User Confirmation

The agent will present a clear summary and request minimal confirmation:

### Summary Display

```
📦 Project Analysis Complete

Technology Stack:
  - Primary: Node.js v18.x
  - Framework: Express + TypeScript
  - Build: TypeScript compiler + npm

Structure:
  - Type: Monorepo (detected 2 projects)
  - Projects:
    • frontend/ - React 18 + Vite
    • backend/ - Express + TypeScript

🔌 Services Detected:
  ✓ PostgreSQL (found in backend/src/db/connection.ts)
  ✓ Redis (found in backend/src/cache/client.ts)

📁 Files to Create:
  ✓ frontend/Dockerfile
  ✓ frontend/docker-compose.yml
  ✓ backend/Dockerfile
  ✓ backend/docker-compose.yml
  ✓ docker-compose.yml (root orchestrator)
  ✓ .dockerignore (root)
  ✓ .env.example
  ✓ .env (copied from .env.example if not exists)
  ✓ README.docker.md

⚠️  Existing Files:
  - backend/Dockerfile (found)

Environment Variables:
  PORT, DATABASE_URL, REDIS_URL, JWT_SECRET
```

### Required Confirmations

Ask user for:

1. **Action for existing Docker files** (if any exist):
   - `create` - Skip existing files, only create new ones
   - `update` - Update existing files in place
   - `backup-and-replace` - Backup existing files (.bak) and create new
   - `cancel` - Abort the operation

2. **Service inclusion confirmation**:
   - "Include detected services (PostgreSQL, Redis) in docker-compose? (yes/no)"
   - If user wants granular control, allow individual service selection

3. **Final confirmation**:
   - "Proceed with Docker configuration generation? (yes/no)"

## Phase 3: File Generation

Once confirmed, the agent will generate:

### For Single Projects

Create in project root:

- `Dockerfile` - Multi-stage optimized build
- `docker-compose.yml` - Application + detected services (without version attribute)
- `.dockerignore` - Exclude unnecessary files
- `.env.example` - Template for environment variables
- `.env` - Automatically created from .env.example (if not exists)
- `README.docker.md` - Usage instructions

### For Monorepos

Create structure:

```
root/
├── frontend/
│   ├── Dockerfile
│   └── docker-compose.yml
├── backend/
│   ├── Dockerfile
│   └── docker-compose.yml
├── docker-compose.yml (orchestrator)
├── .dockerignore
├── .env.example
├── .env (auto-created)
└── README.docker.md
```

The root `docker-compose.yml` will:

- Import/reference services from subproject compose files
- Orchestrate dependencies between services
- Include shared services (databases, caches)
- Optionally include nginx as reverse proxy

# Generated File Specifications

## Dockerfile

Generate optimized Dockerfiles with:

- **Multi-stage builds** (builder + runtime)
- **Minimal base images** (alpine, slim variants)
- **Layer caching optimization** (dependencies before source)
- **Non-root user** for security
- **Health checks** for container orchestration
- **Proper working directory** and permissions
- **Build arguments** for flexibility

Stack-specific optimizations:

- **Node.js**: Use `npm ci` for all deps in build stage, then `npm ci --only=production` after build for production deps only. This ensures devDependencies are available for compilation while keeping the final image minimal.
- **Python**: Virtual environment, pip cache optimization
- **Go**: Static binary compilation with CGO_ENABLED=0
- **Rust**: Cargo dependency caching
- **Java**: JDK for build, JRE for runtime

## docker-compose.yml

Generate comprehensive compose files with:

**Important**: Do NOT include the `version` attribute in docker-compose.yml files. This attribute is obsolete in Docker Compose v2+ and causes warnings.

### Port Assignment Strategy

**Default Ports:**

- **Backend services**: Start at 9000, increment by 1 for each additional backend service (9000, 9001, 9002, ...)
- **Frontend services**: Start at 8000, increment by 1 for each additional frontend service (8000, 8001, 8002, ...)

This convention:

- Avoids conflicts with common development ports (3000, 5000, 8080)
- Provides clear separation between frontend and backend
- Allows easy scaling with multiple services
- Makes service identification intuitive

**Example for monorepo with 3 backends and 2 frontends:**

- backend-api → 9000
- backend-worker → 9001
- backend-admin → 9002
- frontend-web → 8000
- frontend-mobile → 8001

### Application Services

- Container naming with project prefix
- Port mappings from environment variables
- Environment variable configuration
- Health checks with proper intervals
- Restart policies (`unless-stopped`)
- Network configuration
- Dependency orchestration with `depends_on` + health conditions
- Optional resource limits (commented)

### Infrastructure Services

Include detected services with:

**PostgreSQL:**

- Latest stable alpine image
- Volume for data persistence
- Health check with pg_isready
- Environment variables for credentials
- Optional init scripts volume

**MySQL:**

- Latest stable image
- Volume for data persistence
- Health check with mysqladmin
- Environment variables for credentials

**MongoDB:**

- Latest stable image
- Volume for data persistence
- Health check with mongosh
- Authentication configuration

**Redis:**

- Alpine image
- AOF persistence enabled
- Volume for data
- Health check with redis-cli ping
- Optional password protection

**RabbitMQ:**

- Management plugin enabled
- Volume for data persistence
- Health check with diagnostics
- Management UI port exposed

**Elasticsearch:**

- Single-node development setup
- Volume for data persistence
- Health check with cluster health API
- JVM memory configuration

### Networks and Volumes

- Bridge network for service communication
- Named volumes for data persistence
- Proper volume drivers

## .dockerignore

Comprehensive exclusion list:

- Dependencies (node_modules, **pycache**, vendor, etc.)
- Build artifacts (dist, build, target, etc.)
- Development files (.git, .env, .vscode, .idea)
- Logs and temporary files
- Testing artifacts (coverage, .pytest_cache)
- Documentation (except README.docker.md)
- CI/CD configuration files
- Existing Docker files

## .env.example

Generate template based on:

- Detected environment variables in code
- Service connection strings
- Common configuration (PORT, NODE_ENV, etc.)
- Security variables (secrets, API keys)
- Service credentials with sensible defaults

**Port Configuration:**

- Default backend PORT=9000
- For monorepos, add BACKEND\_\*\_PORT variables starting at 9000, 9001, 9002...
- For monorepos, add FRONTEND\_\*\_PORT variables starting at 8000, 8001, 8002...

**Example .env.example for monorepo:**

```
PORT=9000
BACKEND_API_PORT=9000
BACKEND_WORKER_PORT=9001
BACKEND_ADMIN_PORT=9002
FRONTEND_WEB_PORT=8000
FRONTEND_MOBILE_PORT=8001
```

## .env File

**CRITICAL**: Automatically create a `.env` file by copying from `.env.example`:

- Check if `.env` already exists
- If NOT exists: Create it by copying `.env.example`
- If exists: Do NOT overwrite (preserve user's configuration)
- Inform user which action was taken

This ensures docker-compose can start immediately without manual file creation, fixing the common error "env file not found".

## README.docker.md

Comprehensive documentation including:

### Quick Start Guide

- Prerequisites (Docker version requirements)
- Environment setup instructions
- Start/stop commands
- Service verification

### Service Information

- Port mappings for each service
- Health check endpoints
- Access credentials

### Common Commands

- Build images: `docker-compose build`
- Start services: `docker-compose up -d`
- View logs: `docker-compose logs -f`
- Execute commands: `docker-compose exec`
- Database operations
- Cleanup commands

### Development Workflow

- Live reload setup
- Debugging configuration
- Volume mounting for development

### Production Deployment

- Security checklist
- Resource limits configuration
- Secrets management
- HTTPS setup
- Health monitoring

### Troubleshooting

- Port conflicts
- Permission issues
- Build cache problems
- Network issues
- Resource usage monitoring

### Advanced Topics

- Multi-stage build explanation
- Layer caching optimization
- Security best practices
- CI/CD integration examples

# Service Detection Rules

Include service in docker-compose.yml if found:

**PostgreSQL:**

- Imports: `pg`, `postgres`, `psycopg2`, `pg-promise`, `node-postgres`
- ORMs: `sequelize`, `typeorm`, `prisma`, `knex` with postgres
- Connection strings: `postgresql://`, `postgres://`

**MySQL:**

- Imports: `mysql`, `mysql2`, `pymysql`, `mysqlclient`
- ORMs: `sequelize`, `typeorm`, `prisma` with mysql
- Connection strings: `mysql://`

**MongoDB:**

- Imports: `mongoose`, `mongodb`, `pymongo`, `monk`
- Connection strings: `mongodb://`, `mongodb+srv://`

**Redis:**

- Imports: `redis`, `ioredis`, `redis-py`, `node-redis`
- Connection strings: `redis://`

**RabbitMQ:**

- Imports: `amqplib`, `amqp`, `pika`, `bunny`
- Connection strings: `amqp://`

**Elasticsearch:**

- Imports: `@elastic/elasticsearch`, `elasticsearch`, `elasticsearch-py`
- Connection strings containing `elasticsearch`

**Memcached:**

- Imports: `memcached`, `pymemcache`, `memcache`

**Kafka:**

- Imports: `kafkajs`, `kafka-python`, `confluent-kafka`

# Monorepo Handling

For detected monorepos:

1. **Identify all subprojects**
   - Search for multiple `package.json`, `go.mod`, etc.
   - Detect workspace configurations (npm/yarn/pnpm workspaces, lerna, nx)
   - Categorize by type (frontend, backend, service, library)

2. **Generate per-subproject files**
   - Each subproject gets its own `Dockerfile`
   - Each subproject gets its own `docker-compose.yml` (if it's a service)
   - Libraries may not need separate compose files

3. **Create root orchestrator**
   - `docker-compose.yml` in root directory
   - Imports/references subproject services
   - Defines service dependencies and startup order
   - Includes shared infrastructure (databases, caches)
   - Optionally includes reverse proxy (nginx)

4. **Network configuration**
   - Single shared network for all services
   - Proper service discovery via container names
   - Internal communication without exposing ports

# Error Handling

Handle gracefully:

- **No recognizable stack detected**
  - Inform user, ask for manual stack specification
  - Offer generic Dockerfile template

- **Missing required files**
  - Warn user about missing configuration
  - Suggest creating necessary files first

- **Conflicting configurations**
  - Detect conflicts (e.g., multiple databases)
  - Ask user to clarify which to use

- **Permission errors**
  - Provide clear error messages
  - Suggest solutions (chmod, user permissions)

# Output Format

After successful generation, display:

```
✅ Docker Configuration Generated Successfully!

📦 Files Created:
  ✓ Dockerfile
  ✓ docker-compose.yml
  ✓ .dockerignore
  ✓ .env.example
  ✓ .env (created from .env.example)
  ✓ README.docker.md

📋 Next Steps:
  1. Review and customize .env if needed
  2. Build Docker images: docker-compose build
  3. Start services: docker-compose up -d
  4. Verify health: docker-compose ps
  5. View logs: docker-compose logs -f

📖 For detailed instructions, see README.docker.md

🚀 Quick start: docker-compose up -d
```

For monorepos, show files per subproject:

```
✅ Docker Configuration Generated Successfully!

📦 Files Created:

Frontend (./frontend/):
  ✓ Dockerfile
  ✓ docker-compose.yml

Backend (./backend/):
  ✓ Dockerfile
  ✓ docker-compose.yml

Root (./):
  ✓ docker-compose.yml (orchestrator)
  ✓ .dockerignore
  ✓ .env.example
  ✓ .env (created from .env.example)
  ✓ README.docker.md

📋 Next Steps:
  1. Review .env and customize if needed
  2. Build all: docker-compose build
  3. Start all: docker-compose up -d
  4. Check status: docker-compose ps

📖 Read README.docker.md for details
```

# Best Practices

The agent should ensure:

1. **Security**
   - Non-root users in containers
   - No secrets in images or version control
   - Secure default configurations
   - Regular security updates in base images

2. **Performance**
   - Multi-stage builds to minimize image size
   - Proper layer caching
   - Minimal base images
   - Optimized build contexts

3. **Maintainability**
   - Clear, well-commented configurations
   - Consistent naming conventions
   - Comprehensive documentation
   - Easy local development setup

4. **Production-Ready**
   - Health checks for all services
   - Restart policies
   - Resource limits (as comments)
   - Logging configuration
   - Graceful shutdown handling

5. **Developer Experience**
   - Quick start commands
   - Helpful error messages
   - Development mode support
   - Clear documentation

# Usage Examples

## Simple Node.js Project

```bash
/dockerize
```

Agent will:

- Detect Node.js + Express
- Find PostgreSQL dependency
- Create optimized Node Dockerfile with multi-stage build
- Generate docker-compose.yml with app + PostgreSQL
- Create comprehensive documentation

## Python FastAPI Project

```bash
/dockerize
```

Agent will:

- Detect Python + FastAPI
- Find Redis and PostgreSQL
- Create Python Dockerfile with virtual environment
- Generate docker-compose with app + PostgreSQL + Redis
- Include uvicorn configuration

## Monorepo (Frontend + Backend)

```bash
/dockerize
```

Agent will:

- Detect monorepo structure
- Identify React frontend + Node.js backend
- Find PostgreSQL, Redis in backend
- Create Dockerfiles for both frontend and backend
- Create individual docker-compose files
- Create root orchestrator compose file
- Setup nginx reverse proxy (optional)
- Generate comprehensive documentation

# Notes

- Agent should be thorough but efficient in analysis
- User interaction should be minimal but sufficient
- Generated files should work out of the box with minimal modification
- Documentation should be comprehensive yet concise
- Always prioritize security and production-readiness
- Handle edge cases gracefully with clear error messages
- Provide rollback instructions if needed
- Support for adding more services later
