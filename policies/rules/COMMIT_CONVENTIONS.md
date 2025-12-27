# Commit Policy

The agents should follow conventional commits when commiting.

## Format

`<type>(optional scope): <subject>`

- types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
- scope: optional, short identifier of affected area
- subject: concise, imperative description

## Examples

- feat(agents): add reviewer profile validation
- fix(ci): ensure deterministic installs with npm ci
- docs(readme): add Windows symlink notes
- chore: initial commit

## Bodies and footers

- Body: add context and rationale when helpful
- Breaking changes: include `BREAKING CHANGE:` in body
- Issue references: use `Closes #123` in footer when applicable

## Requirements

- The very first commit should be titled `initial commit` with type `chore`.
- Keep messages focused on the "why"; the diff shows the "what".
- Avoid committing secrets or environment files.
- Before commiting check if there is a .gitignore file in the repository, if not, create it based on the current repository context before committing;

## References

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
