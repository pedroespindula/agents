#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function assertExists(p) {
  if (!fs.existsSync(p)) fail(`Missing required file: ${p}`);
}

function main() {
  // Validate instruction files now under instructions/
  assertExists(path.resolve('instructions/AGENTS.md'));
  assertExists(path.resolve('instructions/CLAUDE.md'));
  assertExists(path.resolve('instructions/GEMINI.md'));

  // Profiles directory is optional in current layout
  const profilesDir = path.resolve('agents/profiles');
  if (fs.existsSync(profilesDir)) {
    const schema = readJSON(path.resolve('schemas/agent.profile.schema.json'));
    const files = fs.readdirSync(profilesDir).filter((f) => f.endsWith('.json'));
    for (const f of files) {
      const profile = readJSON(path.join(profilesDir, f));
      for (const key of schema.required) {
        if (!(key in profile)) fail(`Profile ${f} missing key: ${key}`);
      }
      const instrPath = path.resolve(profile.instructions);
      if (!fs.existsSync(instrPath)) fail(`Profile ${f} instructions not found: ${instrPath}`);
    }
  }
  console.log('Lint OK');
}

main();
