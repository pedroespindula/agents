#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function parseFrontmatterMd(p) {
  const raw = fs.readFileSync(p, 'utf8');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const fm = {};
  if (match) {
    const lines = match[1].split('\n');
    for (const line of lines) {
      const kv = line.split(':');
      if (kv.length >= 2) fm[kv[0].trim()] = kv.slice(1).join(':').trim();
    }
  }
  return { frontmatter: fm, body: match ? match[2].trim() : raw.trim() };
}

function main() {
  const outDir = path.resolve('.opencode');
  ensureDir(outDir);

  const agentsReg = { agents: [] };
  const skillsReg = { skills: [] };
  const workflowsReg = { workflows: [] };

  const agentDir = path.resolve('agent');
  if (fs.existsSync(agentDir)) {
    const files = fs.readdirSync(agentDir).filter((f) => f.endsWith('.md'));
    for (const f of files) {
      const fp = path.join(agentDir, f);
      const { frontmatter } = parseFrontmatterMd(fp);
      agentsReg.agents.push({ name: frontmatter.name || path.parse(f).name, instructions: fp });
    }
  }

  const skillDir = path.resolve('skill');
  if (fs.existsSync(skillDir)) {
    const files = fs.readdirSync(skillDir).filter((f) => f.endsWith('.json'));
    for (const f of files) {
      const fp = path.join(skillDir, f);
      skillsReg.skills.push({ name: path.parse(f).name, path: fp });
    }
  }

  const workflowDir = path.resolve('workflow');
  if (fs.existsSync(workflowDir)) {
    const files = fs.readdirSync(workflowDir).filter((f) => f.endsWith('.json'));
    for (const f of files) {
      const fp = path.join(workflowDir, f);
      workflowsReg.workflows.push({ name: path.parse(f).name, path: fp });
    }
  }

  fs.writeFileSync(path.join(outDir, 'agents.json'), JSON.stringify(agentsReg, null, 2));
  fs.writeFileSync(path.join(outDir, 'skills.json'), JSON.stringify(skillsReg, null, 2));
  fs.writeFileSync(path.join(outDir, 'workflows.json'), JSON.stringify(workflowsReg, null, 2));
  console.log('Generated .opencode registries');
}

main();
