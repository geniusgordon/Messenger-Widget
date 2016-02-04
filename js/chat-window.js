var gui = require('nw.gui');
var win = gui.Window.get();
var windowBehaviour = require('./js/window-behaviour');

windowBehaviour.setNewWinPolicy(win);

win.on('url', function(url) {
    $('iframe').attr('src', url);
});

