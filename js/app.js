var gui = require('nw.gui');
var win = gui.Window.get();
var windowBehaviour = require('./js/window-behaviour');

windowBehaviour.setNewWinPolicy(win);

function moveWinToBottomRight() {
    var w = window.screen.width;
    var h = window.screen.height;
    win.moveTo(w-320, 100);
    win.resizeTo(320, h-100);
}

function checkLogin() {
    var url = $('iframe').get(0).contentWindow.location.href;
    if (url.indexOf('/login') == -1) {
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

