var tray;
var menu = new gui.Menu();
var quit = new gui.MenuItem({
    label: 'Quit'
});
quit.on('click', function() {
    chatManager.closeAllChat();
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

