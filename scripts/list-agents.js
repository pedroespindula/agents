#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

const registryPath = path.resolve('.opencode/agents.json');
if (!fs.existsSync(registryPath)) {
  console.error('agents registry not found:', registryPath);
  process.exit(1);
}
const registry = readJSON(registryPath);
if (!Array.isArray(registry.agents)) {
  console.error('agents.json must contain an array under "agents"');
  process.exit(1);
}

for (const a of registry.agents) {
  const caps = Array.isArray(a.capabilities) ? a.capabilities.join(', ') : '';
  console.log(`- ${a.name}: ${caps}`);
}
