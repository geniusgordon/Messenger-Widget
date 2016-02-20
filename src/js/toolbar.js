module.exports = {
    init: function($, win) {
        $('.devtool').click(function() {
            win.showDevTools();
        });
        $('.close').click(function() {
            win.close();
        });
        $('.minimize').click(function() {
            win.minimize();
        });
    }
};

