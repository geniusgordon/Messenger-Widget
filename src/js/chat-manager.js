var gui = window.require('nw.gui');
var openedChat = {}

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

