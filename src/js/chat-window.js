var gui = require('nw.gui');
var win = gui.Window.get();
var windowBehaviour = require('./js/window-behaviour');

windowBehaviour.setNewWinPolicy(win);

win.on('url', function(url) {
    $('iframe').attr('src', url);
});

win.on('close', function() {
    win.hide();
});

$('iframe').load(function() {
    fixStyles(document.styleSheets[1]);
    $('iframe').contents().keyup(function(e) {
        if (e.keyCode == 27)
            win.close();
    });
});

