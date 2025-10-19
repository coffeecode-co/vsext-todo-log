import * as vscode from 'vscode';
import type { TextEditor } from 'vscode';
import { ERRORS } from '../strings/errors.strings.json';



export const getActiveEditor = (): TextEditor | undefined => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage(ERRORS.NO_ACTIVE_EDITOR);
  }
  return editor;
}