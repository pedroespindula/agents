#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

function requireJson(p) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    fail(`Failed to read ${p}: ${e.message}`);
  }
}

function compileValidator(schema) {
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);
  return validate;
}

const agentDir = path.resolve('agent');
const commandDir = path.resolve('command');
const workflowDir = path.resolve('workflow');
const skillDir = path.resolve('skill');
const opencodeConfigPath = path.resolve('opencode.jsonc');

const skillSchemaPath = path.resolve('schemas/skill.schema.json');
const workflowSchemaPath = path.resolve('schemas/workflow.schema.json');

const skillSchema = requireJson(skillSchemaPath);
const workflowSchema = requireJson(workflowSchemaPath);

const validateSkill = compileValidator(skillSchema);
const validateWorkflow = compileValidator(workflowSchema);

if (!fs.existsSync(opencodeConfigPath)) fail('Missing opencode.jsonc at repository root');

function parseFrontmatterMd(p) {
  const raw = fs.readFileSync(p, 'utf8');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) fail(`Missing frontmatter in ${p}`);
  const fm = match[1];
  const body = match[2].trim();
  const obj = {};
  const lines = fm.split('\n');
  let currentKey = null;
  for (const line of lines) {
    if (/^\s{2,}/.test(line) && currentKey) {
      // nested key-value like tools:\n  write: true
      const kv = line.trim().split(':');
      const k = kv[0].trim();
      let v = kv.slice(1).join(':').trim();
      if (v === 'true') v = true;
      else if (v === 'false') v = false;
      else if (v === '') v = '';
      obj[currentKey] = obj[currentKey] || {};
      obj[currentKey][k] = v;
    } else {
      const kv = line.split(':');
      if (kv.length >= 2) {
        const key = kv[0].trim();
        let value = kv.slice(1).join(':').trim();
        if (value === 'true') value = true;
        else if (value === 'false') value = false;
        obj[key] = value;
        currentKey = key;
      }
    }
  }
  return { frontmatter: obj, body };
}

// Validate agents
if (!fs.existsSync(agentDir)) fail('Missing agent/ directory at root');
const agentFiles = fs.readdirSync(agentDir).filter(f => f.endsWith('.md'));
if (agentFiles.length === 0) fail('No agent/*.md files found');
for (const f of agentFiles) {
  const { frontmatter } = parseFrontmatterMd(path.join(agentDir, f));
  if (!frontmatter.name) fail(`Agent ${f} missing name`);
  if (!frontmatter.description) fail(`Agent ${f} missing description`);
  if (!frontmatter.tools || typeof frontmatter.tools !== 'object') fail(`Agent ${f} missing tools block`);
}

// Validate commands
if (!fs.existsSync(commandDir)) fail('Missing command/ directory at root');
const commandFiles = fs.readdirSync(commandDir).filter(f => f.endsWith('.md'));
if (commandFiles.length === 0) fail('No command/*.md files found');
for (const f of commandFiles) {
  const { frontmatter, body } = parseFrontmatterMd(path.join(commandDir, f));
  if (!frontmatter.name) fail(`Command ${f} missing name`);
  if (!frontmatter.description) fail(`Command ${f} missing description`);
  if (!body || body.length === 0) fail(`Command ${f} missing template body`);
}

// Validate workflows
if (!fs.existsSync(workflowDir)) fail('Missing workflow/ directory at root');
const workflowFiles = fs.readdirSync(workflowDir).filter(f => f.endsWith('.json'));
if (workflowFiles.length === 0) fail('No workflow/*.json files found');
for (const f of workflowFiles) {
  const wf = requireJson(path.join(workflowDir, f));
  if (!validateWorkflow(wf)) fail(`Workflow invalid (${f}): ${JSON.stringify(validateWorkflow.errors)}`);
  if (wf.path && !fs.existsSync(path.resolve(wf.path))) fail(`Workflow path not found (${wf.path})`);
}

// Validate skills
if (!fs.existsSync(skillDir)) fail('Missing skill/ directory at root');
const skillFiles = fs.readdirSync(skillDir).filter(f => f.endsWith('.json'));
if (skillFiles.length === 0) fail('No skill/*.json files found');
for (const f of skillFiles) {
  const skill = requireJson(path.join(skillDir, f));
  if (!validateSkill(skill)) fail(`Skill invalid (${f}): ${JSON.stringify(validateSkill.errors)}`);
}

console.log('Validation OK');
