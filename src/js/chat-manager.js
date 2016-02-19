var gui = window.require('nw.gui');
var openedChat = {}

function random(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function openNewChat(url) {
    var newChat = gui.Window.open('chat.html', {
        'title': 'Messenger',
        'icon': 'images/icon.png',
        'width': 600,
        'height': 500,
        'frame': false,
        'toolbar': false,
        'transparent': true,
        'focus': true
    });
    newChat.on('loaded', function() {
        if (openedChat[url].loaded)
            return;
        newChat.emit('url', url);
        openedChat[url].loaded = true;
        newChat.moveBy(random(-50, 50), random(-50, 50));
    });
    return {
        win: newChat,
        loaded: false
    }
}

module.exports = {
    openChat: function(url) {
        if (openedChat[url]) {
            openedChat[url].win.show();
            openedChat[url].win.focus();
        } else {
            openedChat[url] = openNewChat(url);
        }
    },
    closeAllChat: function() {
        for (url in openedChat) {
            if (openedChat[url]) {
                openedChat[url].win.close(true);
            }
        }
    }
};

