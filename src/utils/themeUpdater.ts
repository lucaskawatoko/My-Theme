import * as vscode from 'vscode';

export function updateTheme(customThemeConfig: vscode.WorkspaceConfiguration) {
    const workbenchConfiguration = vscode.workspace.getConfiguration('workbench');
    const currentColorCustomizations: { [key: string]: string } = workbenchConfiguration.get('colorCustomizations') || {};
    const colorCustomizations = { ...currentColorCustomizations };

    colorCustomizations['editor.background'] = customThemeConfig.get('editor.background', '#000000');
    // Adicione todas as outras customizações de cor aqui

    workbenchConfiguration.update('colorCustomizations', colorCustomizations, vscode.ConfigurationTarget.Global);
}
