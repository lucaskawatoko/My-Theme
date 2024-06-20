"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = __importStar(require("vscode"));
let customThemeConfig;
let myStatusBarItem;
let itemSettings = vscode.workspace.getConfiguration('statusBarCustomItem');
let colorSettings = vscode.workspace.getConfiguration('statusBarCustomColor');
function activate(context) {
    // Inicializar customThemeConfig corretamente
    customThemeConfig = vscode.workspace.getConfiguration('customTheme');
    // Registrar um observador para mudanças nas configurações do VS Code
    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(() => {
        customThemeConfig = vscode.workspace.getConfiguration('customTheme');
        updateTheme();
    }));
    // Criar uma StatusBar item (original)
    const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 0);
    statusBar.text = `Reload`;
    statusBar.command = `extension.reloadWindow`;
    statusBar.tooltip = `Reload window`;
    statusBar.show();
    // Registrar o comando para recarregar a janela
    context.subscriptions.push(vscode.commands.registerCommand('extension.reloadWindow', () => {
        vscode.commands.executeCommand('workbench.action.reloadWindow');
    }));
    // Criar uma StatusBar item adicional (novo)
    myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 10000);
    context.subscriptions.push(myStatusBarItem);
    // Atualizar a StatusBar customizada
    updateStatusBar(context);
    // Chamar a função de atualização do tema ao ativar a extensão
    updateTheme();
}
exports.activate = activate;
function updateTheme() {
    const workbenchConfiguration = vscode.workspace.getConfiguration('workbench');
    const currentColorCustomizations = workbenchConfiguration.get('colorCustomizations') || {};
    const colorCustomizations = { ...currentColorCustomizations };
    // Definir todas as cores conforme as configurações do usuário (original)
    colorCustomizations['editor.background'] = customThemeConfig.get('editor.background', '#000000');
    colorCustomizations['editor.foreground'] = customThemeConfig.get('editor.foreground', '#FFFFFF');
    colorCustomizations['editor.selectionBackground'] = customThemeConfig.get('editor.selectionBackground', '#272727');
    colorCustomizations['panel.background'] = customThemeConfig.get('panel.background', '#000000');
    colorCustomizations['sideBar.background'] = customThemeConfig.get('sideBar.background', '#000000');
    colorCustomizations['sideBar.foreground'] = customThemeConfig.get('sideBar.foreground', '#FFFFFF');
    colorCustomizations['sideBarTitle.foreground'] = customThemeConfig.get('sideBarTitle.foreground', '#FFFFFF');
    colorCustomizations['titleBar.activeBackground'] = customThemeConfig.get('titleBar.activeBackground', '#000000');
    colorCustomizations['titleBar.activeForeground'] = customThemeConfig.get('titleBar.activeForeground', '#FFFFFF');
    colorCustomizations['titleBar.inactiveBackground'] = customThemeConfig.get('titleBar.inactiveBackground', '#000000');
    colorCustomizations['titleBar.inactiveForeground'] = customThemeConfig.get('titleBar.inactiveForeground', '#FFFFFF');
    colorCustomizations['tab.activeBackground'] = customThemeConfig.get('tab.activeBackground', '#000000');
    colorCustomizations['tab.activeForeground'] = customThemeConfig.get('tab.activeForeground', '#FFFFFF');
    colorCustomizations['tab.inactiveBackground'] = customThemeConfig.get('tab.inactiveBackground', '#000000');
    colorCustomizations['tab.inactiveForeground'] = customThemeConfig.get('tab.inactiveForeground', '#FFFFFF');
    colorCustomizations['tab.border'] = customThemeConfig.get('tab.border', '#FFFFFF');
    colorCustomizations['tab.activeBorderTop'] = customThemeConfig.get('tab.activeBorderTop', '#0015ff');
    colorCustomizations['sideBar.border'] = customThemeConfig.get('sideBar.border', '#ff000000');
    colorCustomizations['activityBar.background'] = customThemeConfig.get('activityBar.background', '#000000');
    colorCustomizations['activityBar.foreground'] = customThemeConfig.get('activityBar.foreground', '#FFFFFF');
    colorCustomizations['activityBar.border'] = customThemeConfig.get('activityBar.border', '#91040400');
    colorCustomizations['titleBar.border'] = customThemeConfig.get('titleBar.border', '#ff000000');
    colorCustomizations['statusBar.background'] = customThemeConfig.get('statusBar.background', '#000000');
    colorCustomizations['statusBar.foreground'] = customThemeConfig.get('statusBar.foreground', '#FFFFFF');
    colorCustomizations['gitDecoration.addedResourceForeground'] = customThemeConfig.get('gitDecoration.addedResourceForeground', '#ff0000');
    colorCustomizations['gitDecoration.modifiedResourceForeground'] = customThemeConfig.get('gitDecoration.modifiedResourceForeground', '#ffee00');
    colorCustomizations['gitDecoration.deletedResourceForeground'] = customThemeConfig.get('gitDecoration.deletedResourceForeground', '#ff0000');
    colorCustomizations['gitDecoration.untrackedResourceForeground'] = customThemeConfig.get('gitDecoration.untrackedResourceForeground', '#00ff44');
    colorCustomizations['gitDecoration.ignoredResourceForeground'] = customThemeConfig.get('gitDecoration.ignoredResourceForeground', '#7a7a7a');
    colorCustomizations['editorIndentGuide.background1'] = customThemeConfig.get('editorIndentGuide.background1', '#FFFF40');
    colorCustomizations['editorIndentGuide.background2'] = customThemeConfig.get('editorIndentGuide.background2', '#7FFF7F');
    colorCustomizations['editorIndentGuide.background3'] = customThemeConfig.get('editorIndentGuide.background3', '#FF7FFF');
    colorCustomizations['editorIndentGuide.background4'] = customThemeConfig.get('editorIndentGuide.background4', '#4FECED');
    colorCustomizations['editorIndentGuide.activeBackground1'] = customThemeConfig.get('editorIndentGuide.activeBackground1', '#FFFF40');
    colorCustomizations['editorIndentGuide.activeBackground2'] = customThemeConfig.get('editorIndentGuide.activeBackground2', '#7FFF7F');
    colorCustomizations['editorIndentGuide.activeBackground3'] = customThemeConfig.get('editorIndentGuide.activeBackground3', '#FF7FFF');
    colorCustomizations['editorIndentGuide.activeBackground4'] = customThemeConfig.get('editorIndentGuide.activeBackground4', '#4FECED');
    colorCustomizations['terminal.background'] = customThemeConfig.get('terminal.background', '#000000');
    colorCustomizations['terminal.foreground'] = customThemeConfig.get('terminal.foreground', '#FFFFFF');
    colorCustomizations['terminalCursor.background'] = customThemeConfig.get('terminalCursor.background', '#FFFFFF');
    colorCustomizations['terminalCursor.foreground'] = customThemeConfig.get('terminalCursor.foreground', '#FFFFFF');
    colorCustomizations['terminal.ansiBlack'] = customThemeConfig.get('terminal.ansiBlack', '#000000');
    colorCustomizations['terminal.ansiRed'] = customThemeConfig.get('terminal.ansiRed', '#FF0000');
    colorCustomizations['terminal.ansiGreen'] = customThemeConfig.get('terminal.ansiGreen', '#00FF00');
    colorCustomizations['terminal.ansiYellow'] = customThemeConfig.get('terminal.ansiYellow', '#FFFF00');
    colorCustomizations['terminal.ansiBlue'] = customThemeConfig.get('terminal.ansiBlue', '#0000FF');
    colorCustomizations['terminal.ansiMagenta'] = customThemeConfig.get('terminal.ansiMagenta', '#FF00FF');
    colorCustomizations['terminal.ansiCyan'] = customThemeConfig.get('terminal.ansiCyan', '#00FFFF');
    colorCustomizations['terminal.ansiWhite'] = customThemeConfig.get('terminal.ansiWhite', '#FFFFFF');
    colorCustomizations['terminal.ansiBrightBlack'] = customThemeConfig.get('terminal.ansiBrightBlack', '#7F7F7F');
    colorCustomizations['terminal.ansiBrightRed'] = customThemeConfig.get('terminal.ansiBrightRed', '#FF7F7F');
    colorCustomizations['terminal.ansiBrightGreen'] = customThemeConfig.get('terminal.ansiBrightGreen', '#7FFF7F');
    colorCustomizations['terminal.ansiBrightYellow'] = customThemeConfig.get('terminal.ansiBrightYellow', '#FFFF7F');
    colorCustomizations['terminal.ansiBrightBlue'] = customThemeConfig.get('terminal.ansiBrightBlue', '#7F7FFF');
    colorCustomizations['terminal.ansiBrightMagenta'] = customThemeConfig.get('terminal.ansiBrightMagenta', '#FF7FFF');
    colorCustomizations['terminal.ansiBrightCyan'] = customThemeConfig.get('terminal.ansiBrightCyan', '#7FFFFF');
    colorCustomizations['terminal.ansiBrightWhite'] = customThemeConfig.get('terminal.ansiBrightWhite', '#FFFFFF');
    colorCustomizations['debugToolBar.background'] = customThemeConfig.get('debugToolBar.background', '#000000');
    colorCustomizations['debugConsole.infoForeground'] = customThemeConfig.get('debugConsole.infoForeground', '#FFFFFF');
    colorCustomizations['debugConsole.warningForeground'] = customThemeConfig.get('debugConsole.warningForeground', '#FFFF00');
    colorCustomizations['debugConsole.errorForeground'] = customThemeConfig.get('debugConsole.errorForeground', '#FF0000');
    colorCustomizations['notification.background'] = customThemeConfig.get('notification.background', '#000000');
    colorCustomizations['notification.foreground'] = customThemeConfig.get('notification.foreground', '#FFFFFF');
    colorCustomizations['notification.buttonBackground'] = customThemeConfig.get('notification.buttonBackground', '#000000');
    colorCustomizations['notification.buttonForeground'] = customThemeConfig.get('notification.buttonForeground', '#FFFFFF');
    colorCustomizations['notification.buttonHoverBackground'] = customThemeConfig.get('notification.buttonHoverBackground', '#272727');
    colorCustomizations['statusBar.noFolderBackground'] = customThemeConfig.get('statusBar.noFolderBackground', '#000000');
    colorCustomizations['statusBar.debuggingBackground'] = customThemeConfig.get('statusBar.debuggingBackground', '#000000');
    colorCustomizations['statusBar.debuggingForeground'] = customThemeConfig.get('statusBar.debuggingForeground', '#FFFFFF');
    colorCustomizations['editorBracketMatch.background'] = customThemeConfig.get('editorBracketMatch.background', '#000000');
    colorCustomizations['editorBracketMatch.border'] = customThemeConfig.get('editorBracketMatch.border', '#FFFFFF');
    colorCustomizations['editorGutter.background'] = customThemeConfig.get('editorGutter.background', '#000000');
    colorCustomizations['editorGutter.modifiedBackground'] = customThemeConfig.get('editorGutter.modifiedBackground', '#ffee00');
    colorCustomizations['editorGutter.addedBackground'] = customThemeConfig.get('editorGutter.addedBackground', '#00ff44');
    colorCustomizations['editorGutter.deletedBackground'] = customThemeConfig.get('editorGutter.deletedBackground', '#ff0000');
    colorCustomizations['scrollbarSlider.background'] = customThemeConfig.get('scrollbarSlider.background', '#272727');
    colorCustomizations['scrollbarSlider.hoverBackground'] = customThemeConfig.get('scrollbarSlider.hoverBackground', '#555555');
    colorCustomizations['scrollbarSlider.activeBackground'] = customThemeConfig.get('scrollbarSlider.activeBackground', '#777777');
    // Atualizar as customizações de cores no VS Code (original)
    workbenchConfiguration.update('colorCustomizations', colorCustomizations, vscode.ConfigurationTarget.Global);
}
function updateStatusBar(context) {
    let name = itemSettings.get("text");
    let icon = itemSettings.get("icon");
    let tooltip = itemSettings.get("tooltip");
    myStatusBarItem.text = `${icon} ${name}`;
    myStatusBarItem.tooltip = tooltip;
    myStatusBarItem.show();
}
//# sourceMappingURL=extension.js.map