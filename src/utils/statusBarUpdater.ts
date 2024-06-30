import * as vscode from 'vscode';

export function updateStatusBar(context: vscode.ExtensionContext, myStatusBarItem: vscode.StatusBarItem): void {
    const itemSettings = vscode.workspace.getConfiguration('statusBarCustomItem');
    let name = itemSettings.get("text") as string;
    let icon = itemSettings.get("icon") as string;
    let tooltip = itemSettings.get("tooltip") as string;

    myStatusBarItem.text = `${icon} ${name}`;
    myStatusBarItem.tooltip = tooltip;  
    myStatusBarItem.show();
}
