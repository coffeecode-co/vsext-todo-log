import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Sample test', () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });

  test('Inserts console.log below cursor for word under cursor', async () => {
    const doc = await vscode.workspace.openTextDocument({
      language: 'typescript',
      content: 'const value = 42;\nvalue',
    });
    const editor = await vscode.window.showTextDocument(doc);
    // Place cursor on the second line, within the word 'value'
    const pos = new vscode.Position(1, 3);
    editor.selection = new vscode.Selection(pos, pos);

    await vscode.commands.executeCommand('todo-console.logVariable');

    const text = doc.getText();
    assert.ok(
      text.includes("console.log('value:', value);"),
      'Expected console.log for variable to be inserted.'
    );
  });
});
