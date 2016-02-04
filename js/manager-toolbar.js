var isMinimized = false;
$('.close').click(function() {
    win.close();
});
$('.minimize').click(function() {
    if (isMinimized) {
        win.height = 30;
        win.y = window.screen.height - 30;
    } else {
        win.height = window.screen.height - 100;
        win.y = 100;
    }
    isMinimized = !isMinimized;
});

