#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function fail(msg) { console.error(msg); process.exit(1); }

function assertSymlink(p) {
  try {
    const stat = fs.lstatSync(p);
    if (!stat.isSymbolicLink()) fail(`${p} is not a symlink`);
  } catch (e) { fail(`Cannot stat ${p}: ${e.message}`); }
}

assertSymlink(path.resolve('agents/instructions/CLAUDE.md'));
assertSymlink(path.resolve('agents/instructions/GEMINI.md'));
console.log('OK: symlinks verified');
