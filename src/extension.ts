// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "todo-console" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand('todo-console.helloWorld', () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.showInformationMessage('Hello World from todo-console!');
  });

  context.subscriptions.push(disposable);

  // Register command to log variable/expression under cursor
  const logVariableDisposable = vscode.commands.registerCommand(
    'todo-console.logVariable',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage('No active editor. Open a file to use Log Variable.');
        return;
      }

      const document = editor.document;
      const selection = editor.selection;
      let expression = '';
      let label = '';

      if (!selection.isEmpty) {
        // Use selected text as expression
        expression = document.getText(selection).trim();
        label = expression;
      } else {
        // Derive expression from cursor position (expand to dotted chains)
        const position = selection.active;
        const lineText = document.lineAt(position.line).text;
        const index = position.character;

        const isAllowed = (ch: string): boolean => /[A-Za-z0-9_$.]/.test(ch);

        let start = index;
        let end = index;

        // Move left
        while (start > 0 && isAllowed(lineText[start - 1])) {
          start--;
        }
        // Move right
        while (end < lineText.length && isAllowed(lineText[end])) {
          end++;
        }

        expression = lineText.substring(start, end).trim();
        label = expression;
      }

      // Validate expression
      if (!expression) {
        vscode.window.showInformationMessage('No variable or expression detected at cursor.');
        return;
      }

      // Prepare insertion below current line, preserving indentation
      const currentLine = editor.selection.active.line;
      const indentSize = document.lineAt(currentLine).firstNonWhitespaceCharacterIndex;
      const indent = document.lineAt(currentLine).text.slice(0, indentSize);
      const logText = `console.log('👷 ${label}: 👷', ${expression});`;

      await editor.edit((editBuilder) => {
        const insertPos = new vscode.Position(currentLine + 1, 0);
        const textToInsert = `\n\n// TODO: DEBUG LOG, DELETE AFTER DEBUGGING\n${indent}${logText}\n\n`;
        editBuilder.insert(insertPos, textToInsert);
      });

      vscode.window.setStatusBarMessage('Inserted console.log for variable/expression.', 2000);
    }
  );

  context.subscriptions.push(logVariableDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
