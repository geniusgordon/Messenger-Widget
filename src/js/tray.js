var gui = window.require('nw.gui');

var tray;
var menu;
var trayMenuItems = {};

module.exports = {
    init: function(win) {
        tray = new gui.Tray({
            title: 'Messenger',
            icon: 'images/icon_tray.png',
        });
        menu = new gui.Menu();
        this.addMenuItem('Quit', function() {
            win.quit();
        });
        tray.on('click', function() {
            win.show();
            win.focus();
        });
    },
    addMenuItem(label, onClick) {
        if (trayMenuItems[label])
            return;
        var item = new gui.MenuItem({
            label: label
        });
        item.on('click', function() {
            tray.menu = menu;
            onClick && onClick();
        }.bind(this));
        menu.insert(item, 0);
        tray.menu = menu;
        trayMenuItems[label] = item;
    }
};

