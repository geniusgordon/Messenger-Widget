var gui = window.require('nw.gui');

module.exports = {
    initTray: function(win) {
        var tray;

        var menu = new gui.Menu();
        var quit = new gui.MenuItem({
            label: 'Quit'
        });
        quit.on('click', function() {
            win.close();
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
};

