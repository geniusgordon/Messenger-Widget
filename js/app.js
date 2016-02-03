var gui = require('nw.gui');
var win = gui.Window.get();

var windowBehaviour = require('./js/window-behaviour');

// Adjust the default behaviour of the main window
windowBehaviour.setNewWinPolicy(win);

