var gui = require('nw.gui');
var win = gui.Window.get();
var chatManager = require('./js/chat-manager');
var notification = require('./js/notification');
var windowBehaviour = require('./js/window-behaviour');

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

win.on('close', function() {
    win.hide();
});

moveWinToBottomRight();
$('iframe').load(function() {
    checkLogin();
    fixStyles(document.styleSheets[1]);
    notification.inject($('iframe')[0].contentWindow, win);
    $('iframe').contents().on('click', 'a._1ht5._5l-3', function() {
        var url = $(this).attr('href');
        chatManager.openChat(url);
    });
});

