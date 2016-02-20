var gui = window.require('nw.gui');

module.exports = {
    init: function(win) {
        var tray;
        this.menu = new gui.Menu();
        this.addMenuItem('Quit', function() {
            win.quit();
        });
        tray = new gui.Tray({
            title: 'Messenger',
            icon: 'images/icon_tray.png',
            menu: this.menu
        });
        tray.on('click', function() {
            win.show();
            win.focus();
        });
    },
    addMenuItem(label, onClick) {
        var item = new gui.MenuItem({
            label: label
        });
        item.on('click', onClick);
        this.menu.append(item);
    }
};

