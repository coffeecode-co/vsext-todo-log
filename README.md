# todo-log

Log variables and expressions instantly with a single shortcut. It inserts a debug marker and a `console.log` on the next line, preserving indentation.

## Features
- Inserts, directly below the current line:
  - a spacing line for clarity,
  - `// TODO: ⚠️ DEBUG LOG, DELETE AFTER DEBUGGING`,
  - `console.log('👷 - <label>:', <expression>)`.
- Works with the word under the cursor or selected text.
- Preserves the current line's indentation for both lines.
- Shortcut: `ctrl+alt+l` (macOS, Windows, and Linux).

## Usage
- Place the cursor over a variable or select an expression.
- Run `Log Variable Under Cursor` or press `ctrl+alt+l`.
- The extension will add a spacing line, a TODO comment, and a console.log in the next line.

Command Palette: `Log Variable Under Cursor` (`todo-log.logVariable`).

## Behavior Details
- Label formatting: the log label is prefixed with `👷 - ` for visibility, followed by the detected variable/expression and a colon.
- Example:
  ```ts
  // before
  value

  // after
  
  // TODO: ⚠️ DEBUG LOG, DELETE AFTER DEBUGGING
  console.log('👷 - value:', value);
  ```

## Compatibility
- `engines.vscode`: `^1.104.0`. Tested in Trae 1.104.x.


## Settings
- No user settings at the moment. Future settings may allow toggling the TODO marker or label prefix.

## Development
- Scripts: `pnpm run compile`, `pnpm run test`, `pnpm run format`.
- Command: `todo-log.logVariable`.

## Release Notes
- 1.0.1: initial release.
