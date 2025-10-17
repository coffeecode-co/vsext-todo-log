# todo-console

Log variables quickly with a single shortcut. This extension inserts a `console.log` below the current line using the variable or expression under your cursor.

## Features

- Insert `console.log('<label>:', <expression>)` on the next line beneath the cursor ✨
- Works with word under cursor or selected text
- Preserves indentation level of the current line
- Keybinding on macOS: `ctrl+alt+m` (Control + Option + M)

## Usage

1. Place the cursor over a variable or select an expression.
2. Press `ctrl+alt+m` (macOS) while the editor has focus.
3. A `console.log` will be inserted on the next line, preserving indentation.

Command Palette: `Log Variable Under Cursor` (`todo-console.logVariable`)

## Requirements

No special requirements. The extension runs wherever VS Code runs.

## Extension Settings

This extension currently doesn’t add custom settings. If needed in the future, they will be exposed via `contributes.configuration`.

## Known Issues

- Dotted property chains are detected as a single expression only when contiguous (e.g., `obj.prop`). Bracket notation is not yet expanded.

## Development

- Package manager: `pnpm`
- Formatting: `Prettier`

Scripts:

- `pnpm run compile` – Build TypeScript
- `pnpm run watch` – Watch mode
- `pnpm run test` – Run extension tests
- `pnpm run format` – Format codebase with Prettier

## Following VS Code Guidelines

This extension follows Microsoft’s recommendations for authoring VS Code extensions, including manifest contributions, activation events, and testing strategy.

- Reference: Your First Extension | Visual Studio Code Extension API (https://code.visualstudio.com/api/get-started/your-first-extension)
- UX Guidelines: https://code.visualstudio.com/api/ux-guidelines/overview

## Release Notes

### 0.0.1

- Initial release: Insert `console.log` for variable/expression under cursor.

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

- `myExtension.enable`: Enable/disable this extension.
- `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

- [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

- Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
- Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
- Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
