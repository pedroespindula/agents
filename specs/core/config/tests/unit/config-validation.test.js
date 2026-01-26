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

const agentsReg = path.resolve('.opencode/agents.json');
const skillsReg = path.resolve('.opencode/skills.json');

for (const p of [agentsReg, skillsReg]) {
  if (!fs.existsSync(p)) fail(`Missing registry: ${p}`);
}

const agents = readJSON(agentsReg);
const skills = readJSON(skillsReg);

if (!Array.isArray(agents.agents)) fail('agents registry malformed');
if (!Array.isArray(skills.skills)) fail('skills registry malformed');

for (const a of agents.agents) {
  const instrPath = path.resolve(a.instructions);
  if (!fs.existsSync(instrPath)) fail(`Instructions missing for agent ${a.name}: ${instrPath}`);
}

for (const s of skills.skills) {
  const p = path.resolve(s.path);
  if (!fs.existsSync(p)) fail(`Skill file missing: ${p}`);
}

console.log('OK: config files exist and basic structure valid');
