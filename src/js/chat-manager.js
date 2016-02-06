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
    newChat.on('close', function() {
        newChat.hide();
    });
    return {
        win: newChat,
        loaded: false
    }
}

$('iframe').load(function() {
    $('iframe').contents().on('click', 'a._1ht5._5l-3', function() {
        var url = $(this).attr('href');
        if (openedChat[url]) {
            openedChat[url].win.show();
            openedChat[url].win.focus();
        } else {
            openedChat[url] = openNewChat(url);
        }
    });
});

