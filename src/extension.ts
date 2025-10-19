import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "todo-log" is now active!');

  const logVariableDisposable = vscode.commands.registerCommand(
    'todo-log.logVariable',
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
        expression = document.getText(selection).trim();
        label = expression;
      } else {
        const position = selection.active;
        const lineText = document.lineAt(position.line).text;
        const index = position.character;

        const isAllowed = (ch: string): boolean => /[A-Za-z0-9_$.]/.test(ch);

        let start = index;
        let end = index;

        while (start > 0 && isAllowed(lineText[start - 1])) {
          start--;
        }
        while (end < lineText.length && isAllowed(lineText[end])) {
          end++;
        }

        expression = lineText.substring(start, end).trim();
        label = expression;
      }

      if (!expression) {
        vscode.window.showInformationMessage('No variable or expression detected at cursor.');
        return;
      }

      const currentLine = editor.selection.active.line;
      const indentSize = document.lineAt(currentLine).firstNonWhitespaceCharacterIndex;
      const indent = document.lineAt(currentLine).text.slice(0, indentSize);
      const logText = `console.log('${label}:', ${expression});`;

      await editor.edit((editBuilder) => {
        const insertPos = new vscode.Position(currentLine + 1, 0);
        const textToInsert = `\n${indent}${logText}`;
        editBuilder.insert(insertPos, textToInsert);
      });

      vscode.window.setStatusBarMessage('Inserted console.log for variable/expression.', 2000);
    }
  );

  context.subscriptions.push(logVariableDisposable);
}

export function deactivate() {}
