import * as vscode from 'vscode';

export function registerReloadWindowCommand(context: vscode.ExtensionContext) {
    const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 0);
    statusBar.text = `Reload`;
    statusBar.command = `extension.reloadWindow`;
    statusBar.tooltip = `Reload window`;
    statusBar.show();

    context.subscriptions.push(
        vscode.commands.registerCommand('extension.reloadWindow', () => {
            vscode.commands.executeCommand('workbench.action.reloadWindow');
        })
    );
}
