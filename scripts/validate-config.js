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

const agentsPath = path.resolve('.opencode/agents.json');
const skillsPath = path.resolve('.opencode/skills.json');
const workflowsPath = path.resolve('.opencode/workflows.json');
const agentSchemaPath = path.resolve('schemas/agent.profile.schema.json');
const skillSchemaPath = path.resolve('schemas/skill.schema.json');
const workflowSchemaPath = path.resolve('schemas/workflow.schema.json');

const agents = requireJson(agentsPath);
const skills = requireJson(skillsPath);
const workflows = requireJson(workflowsPath);
const agentSchema = requireJson(agentSchemaPath);
const skillSchema = requireJson(skillSchemaPath);
const workflowSchema = requireJson(workflowSchemaPath);

const validateAgent = compileValidator(agentSchema);
const validateSkill = compileValidator(skillSchema);
const validateWorkflow = compileValidator(workflowSchema);

if (!Array.isArray(agents.agents)) fail('agents.json must contain an array under "agents"');
if (!Array.isArray(skills.skills)) fail('skills.json must contain an array under "skills"');
if (!Array.isArray(workflows.workflows)) fail('workflows.json must contain an array under "workflows"');

for (const a of agents.agents) {
  if (!validateAgent(a)) fail(`Agent invalid: ${JSON.stringify(validateAgent.errors)}`);
  // ensure instructions path exists
  const instrPath = path.resolve(a.instructions);
  if (!fs.existsSync(instrPath)) fail(`Agent instructions path missing: ${instrPath}`);
}

for (const s of skills.skills) {
  const skillFilePath = path.resolve(s.path);
  if (!fs.existsSync(skillFilePath)) fail(`Skill file missing: ${skillFilePath}`);
  const skill = requireJson(skillFilePath);
  if (!validateSkill(skill)) fail(`Skill invalid (${s.name}): ${JSON.stringify(validateSkill.errors)}`);
}

for (const w of workflows.workflows) {
  const wfFilePath = path.resolve(w.path);
  if (!fs.existsSync(wfFilePath)) fail(`Workflow file missing: ${wfFilePath}`);
  const wf = requireJson(wfFilePath);
  if (!validateWorkflow(wf)) fail(`Workflow invalid (${w.name}): ${JSON.stringify(validateWorkflow.errors)}`);
}

console.log('Validation OK');
