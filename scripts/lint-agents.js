#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function fail(msg) { console.error(msg); process.exit(1); }

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function assertSymlink(p) {
  try {
    const stat = fs.lstatSync(p);
    if (!stat.isSymbolicLink()) fail(`${p} is not a symlink`);
  } catch (e) { fail(`Cannot stat ${p}: ${e.message}`); }
}

function assertExists(p) {
  if (!fs.existsSync(p)) fail(`Missing required file: ${p}`);
}

function main() {
  // Validate symlinks
  assertSymlink(path.resolve('agents/instructions/CLAUDE.md'));
  assertSymlink(path.resolve('agents/instructions/GEMINI.md'));

  // Profiles directory exists
  const profilesDir = path.resolve('agents/profiles');
  assertExists(profilesDir);

  // Validate all profiles against schema (minimal)
  const schema = readJSON(path.resolve('schemas/agent.profile.schema.json'));
  const files = fs.readdirSync(profilesDir).filter(f => f.endsWith('.json'));
  for (const f of files) {
    const profile = readJSON(path.join(profilesDir, f));
    for (const key of schema.required) {
      if (!(key in profile)) fail(`Profile ${f} missing key: ${key}`);
    }
    // instructions path must exist
    const instrPath = path.resolve(profile.instructions);
    if (!fs.existsSync(instrPath)) fail(`Profile ${f} instructions not found: ${instrPath}`);
  }
  console.log('Lint OK');
}

main();
