var gui = window.require('nw.gui');
var utils = require('./utils');

module.exports = {
    setNewWinPolicy: function(win) {
        win.removeAllListeners('new-win-policy');
        win.on('new-win-policy', function(frame, url, policy) {
            if (url == 'about:blank') {
                return policy.ignore(); // Ignore about:blank URLs
            }

            if (url.indexOf('/videocall') != -1) {
                policy.setNewWindowManifest({
                    width: 800,
                    height: 600
                });
                return;
            }

            url = utils.skipFacebookRedirect(url);
            gui.Shell.openExternal(url);
            policy.ignore();
        });
    },
    setupDevTools: function(targetWindow, win) {
        targetWindow.addEventListener('keyup', function(e) {
            if (e.keyCode == 123)
                win.showDevTools();
        });
    },
    closeOnEsc: function(targetWindow, win) {
        targetWindow.addEventListener('keyup', function(e) {
            if (e.which == 27)
                win.close();
        });
    }
};

