import * as vscode from 'vscode';
import { updateTheme } from './utils/themeUpdater';
import { updateStatusBar } from './utils/statusBarUpdater';
import { registerReloadWindowCommand } from './commands/reloadWindow';

let customThemeConfig: vscode.WorkspaceConfiguration;
let myStatusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
    customThemeConfig = vscode.workspace.getConfiguration('customTheme');

    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration(() => {
            customThemeConfig = vscode.workspace.getConfiguration('customTheme');
            updateTheme(customThemeConfig);
        })
    );

    registerReloadWindowCommand(context);

    myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 10000);
    context.subscriptions.push(myStatusBarItem);

    updateStatusBar(context, myStatusBarItem);

    updateTheme(customThemeConfig);
}
