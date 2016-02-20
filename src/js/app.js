var gui = require('nw.gui');
var win = gui.Window.get();
var tray = require('./js/tray');
var toolbar = require('./js/toolbar');
var chatManager = require('./js/chat-manager');
var notification = require('./js/notification');
var windowBehaviour = require('./js/window-behaviour');

windowBehaviour.setNewWinPolicy(win);
tray.init(win);
toolbar.init($, win);

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

win.on('close', function() {
    win.hide();
});

win.quit = function() {
    chatManager.closeAllChat();
    win.close(true);
}

moveWinToBottomRight();
$('iframe').load(function() {
    checkLogin();
    fixStyles(document.styleSheets[1]);
    notification.inject($('iframe')[0].contentWindow, win);
    $('iframe').contents().on('click', 'a._1ht5._5l-3', function() {
        var name = $(this).find('._1ht6').text();
        var url = $(this).attr('href');
        chatManager.openChat(name, url);
    });
    $('iframe').contents().on('click', '#js_6 a._5f0v', function() {
        var name = $(this).find('._364g').text();
        var url = $('iframe')[0].contentWindow.location.href;
        chatManager.openChat(name, url);
    });
});

