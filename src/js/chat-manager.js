var gui = window.require('nw.gui');
var openedChat = {}

function random(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function openNewChat(name, url, onClose) {
    var newChat = gui.Window.open('chat.html', {
        'title': 'Messenger',
        'icon': 'images/icon.png',
        'width': 600,
        'height': 500,
        'frame': false,
        'toolbar': false,
        'transparent': true,
        'focus': true,
        "visible-on-all-workspaces": true
    });
    newChat.on('loaded', function() {
        if (openedChat[name].loaded)
            return;
        newChat.emit('url', url);
        openedChat[name].loaded = true;
        newChat.moveBy(random(-50, 50), random(-50, 50));
    });
    newChat.on('close', function(name, url) {
        onClose && onClose(name, url);
    });
    return {
        name: name,
        win: newChat,
        loaded: false
    }
}

module.exports = {
    openChat: function(name, url, onClose) {
        if (!url) return;
        if (url.trim() == '') return;
        if (openedChat[name]) {
            openedChat[name].win.show();
            openedChat[name].win.focus();
        } else {
            openedChat[name] = openNewChat(name, url, onClose);
        }
    },
    closeAllChat: function() {
        for (name in openedChat) {
            if (openedChat[name]) {
                openedChat[name].win.close(true);
            }
        }
    }
};

