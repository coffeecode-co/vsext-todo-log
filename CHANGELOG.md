# Changelog

All notable changes to "todo-log" are documented in this file. This project follows Keep a Changelog and Semantic Versioning.


## [1.0.1] - 2025-10-19
- Added `todo-log.logVariable` command to insert, below the current line:
  - a spacing line,
  - `// TODO: ⚠️ DEBUG LOG, DELETE AFTER DEBUGGING`,
  - `console.log('👷 - <label>:', <expression>)` preserving indentation.
- Shortcut `ctrl+alt+l` when the editor has focus.
- Compatibility with VS Code `^1.104.0` (Trae 1.104.x).
- Renamed the extension from `todo-console` to `todo-log`.
