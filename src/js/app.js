var gui = require('nw.gui');
var win = gui.Window.get();
var tray = require('./js/tray');
var windowBehaviour = require('./js/window-behaviour');

tray.initTray(win);
windowBehaviour.setNewWinPolicy(win);

function moveWinToBottomRight() {
    var w = window.screen.width;
    var h = window.screen.height;
    win.moveTo(w-320, 0);
    win.resizeTo(320, h);
}

function checkLogin() {
    var url = $('iframe').get(0).contentWindow.location.href;
    if (url.indexOf('/login') == -1 && url.indexOf('/checkpoint') == -1) {
        moveWinToBottomRight();
        win.setVisibleOnAllWorkspaces(true);
    } else {
        win.resizeTo(800, 600);
        win.setPosition('center');
    }
}

moveWinToBottomRight();
$('iframe').load(function() {
    checkLogin();
    fixStyles(document.styleSheets[1]);
});

