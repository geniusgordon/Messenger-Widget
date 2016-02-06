$('.devtool').click(function() {
    win.showDevTools();
});
$('.close').click(function() {
    win.close();
});
$('.minimize').click(function() {
    if (win.height != 30) {
        win.height = 30;
        win.y = window.screen.height - 30;
    } else {
        win.height = window.screen.height;
        win.y = 0;
    }
});

