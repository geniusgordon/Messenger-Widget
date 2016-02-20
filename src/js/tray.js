var gui = window.require('nw.gui');

module.exports = {
    init: function(win) {
        this.tray = new gui.Tray({
            title: 'Messenger',
            icon: 'images/icon_tray.png',
        });
        this.menu = new gui.Menu();
        this.addMenuItem('Quit', function() {
            win.quit();
        });
        this.tray.on('click', function() {
            win.show();
            win.focus();
        });
    },
    addMenuItem(label, onClick) {
        var item = new gui.MenuItem({
            label: label
        });
        item.on('click', function() {
            this.menu.remove(item);
            this.tray.menu = this.menu;
            onClick && onClick();
        }.bind(this));
        this.menu.insert(item, 0);
        this.tray.menu = this.menu;
    }
};

