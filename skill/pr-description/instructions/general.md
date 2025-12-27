# Creating Effective PR Descriptions

## Workflow

### 1. Analyze Changes

Before writing the description, understand what changed:

```bash
# Compare with base branch
git diff origin/main...HEAD

# Review commit history
git log origin/main..HEAD --oneline

# Check file changes
git diff origin/main...HEAD --stat
```

**What to look for**:

- Which files were modified
- What functionality was added/changed/removed
- Whether tests were added/updated
- Whether documentation was updated
- Database migrations or schema changes
- Configuration changes

### 2. Identify the Core Change

Ask yourself:

- **What is the main problem being solved?**
- **What is the primary feature being added?**
- **What bug is being fixed?**

The answer becomes your "What" section.

### 3. Understand the Motivation

Ask yourself:

- **Why is this change needed?**
- **What problem does it solve?**
- **What is the business/technical value?**

The answer becomes your "Why" section.

### 4. List Key Changes

From the diff analysis, extract:

- Main code changes (high-level, not line-by-line)
- New dependencies added
- Configuration changes
- Database migrations
- API changes
- Test additions

### 5. Identify Risks

Review changes for:

**Breaking Changes**:

- API signature changes
- Removed functionality
- Changed behavior
- Schema changes

**Deployment Risks**:

- Requires specific deploy order
- Needs feature flag
- Should deploy off-hours
- Requires manual steps

**Database Risks**:

- Schema migrations
- Data migrations
- Potential downtime
- Rollback complexity

**Event/Message Risks** (for event-driven systems):

- Event schema changes
- New events/commands
- Consumer compatibility

### 6. Write Testing Instructions

Provide clear steps to validate the changes:

1. **Setup**: What needs to be configured
2. **Steps**: Specific actions to take
3. **Expected**: What should happen
4. **Edge cases**: What else to test

### 7. Choose Template

Select appropriate template:

- **Generic**: `templates/pr-description.md` - For most projects
- **Detailed**: `templates/pr-description-detailed.md` - For production-ready PRs with deployment considerations

### 8. Fill Template

Complete each section:

- **Type of change**: Check appropriate boxes
- **What**: Concise summary of changes
- **Why**: Motivation and problem solved
- **Changes**: Bullet list of key changes
- **How to Test**: Step-by-step instructions
- **Risks**: Check appropriate boxes and add details
- **Related Issues**: Link to issues/tickets

## Tips for Each Section

### Title

- Use imperative mood: "Add feature" not "Added feature"
- Be specific: "Add rate limiting to auth endpoints" not "Update auth"
- Keep under 72 characters if possible

### What Section

- 2-3 sentences maximum
- High-level summary
- Focus on user-facing or system-level changes
- Avoid implementation details

**Good**:

> Add rate limiting to authentication endpoints to prevent brute force attacks.

**Bad**:

> Updated the AuthController class to use the express-rate-limit middleware with a Redis store configured in the config/rate-limit.js file.

### Why Section

- Explain the problem or need
- Provide business/technical context
- Link to related issues or RFCs
- Help reviewers understand importance

**Good**:

> We've observed suspicious login attempt patterns that could indicate brute force attacks. This change protects user accounts by limiting authentication requests.

**Bad**:

> Because we need rate limiting.

### Changes Section

- Bullet list of key changes
- High-level, not line-by-line
- Group related changes
- Mention new dependencies

**Good**:

```markdown
- Added rate limiting middleware using express-rate-limit
- Applied 5 req/min limit to /login and /register endpoints
- Configured Redis store for distributed rate limiting
- Updated error responses to include Retry-After header
- Added integration tests for rate limit scenarios
```

**Bad**:

```markdown
- Changed line 42 in auth.js
- Updated package.json
- Modified some tests
```

### How to Test Section

- Numbered steps
- Specific and actionable
- Include expected results
- Cover happy path and edge cases

**Good**:

```markdown
1. Start the application with Redis running
2. Make 5 login requests to /api/login within 1 minute
3. Verify all 5 requests succeed
4. Make a 6th request within the same minute
5. Verify it returns 429 Too Many Requests with Retry-After header
6. Wait 1 minute and verify requests work again
```

**Bad**:

```markdown
Test the login endpoint.
```

### Risks Section

- Be honest about risks
- Check all applicable boxes
- Add details for checked items
- Suggest mitigation when possible

**Good**:

```markdown
- [x] Database schema changes
  - Added `rate_limit_hits` table for tracking
  - Migration is reversible
  - No data migration needed
- [x] Should deploy outside business hours
  - Initial rate limits may need tuning
  - Monitor error rates closely after deploy
```

**Bad**:

```markdown
- [ ] No risks
```

## Common Scenarios

### Feature Addition

Focus on:

- What capability is being added
- Why it's needed
- How it works (high-level)
- How to use/test it

### Bug Fix

Focus on:

- What was broken
- What caused it
- How it's fixed
- How to verify the fix

### Refactoring

Focus on:

- What code is being improved
- Why the refactor is needed
- What benefits it provides
- Confirmation of no behavior change

### Chore/Maintenance

Focus on:

- What is being updated (deps, config, etc.)
- Why the update is needed
- Any breaking changes
- Any required actions

## Review Checklist

Before submitting, verify:

- [ ] Analyzed full diff and commit history
- [ ] Identified core change and motivation
- [ ] Listed all key changes
- [ ] Provided clear testing instructions
- [ ] Identified all risks and deployment considerations
- [ ] Linked related issues/tickets
- [ ] Used appropriate template
- [ ] Proofread for clarity and completeness

## Output Format

Save the description to `pr-desc.md` in the repository root, or output it for the user to copy.

If the PR already exists, suggest updating the description on GitHub.
