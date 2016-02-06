var gui = require('nw.gui');
var win = gui.Window.get();
var windowBehaviour = require('./js/window-behaviour');

windowBehaviour.setNewWinPolicy(win);

var tray;

function initTray() {
    var menu = new gui.Menu();
    var quit = new gui.MenuItem({
        label: 'Quit'
    });
    quit.on('click', function() {
        win.close(true);
    });
    menu.append(quit);
    tray = new gui.Tray({
        title: 'Messenger',
        icon: 'images/icon_tray.png',
        menu: menu
    });
    tray.on('click', function() {
        win.show();
        win.focus();
    });
}

function moveWinToBottomRight() {
    var w = window.screen.width;
    var h = window.screen.height;
    win.moveTo(w-320, 0);
    win.resizeTo(320, h);
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

initTray();
win.on('close', function() {
    this.hide();
});

moveWinToBottomRight();
$('iframe').load(function() {
    checkLogin();
    fixStyles(document.styleSheets[1]);
});

