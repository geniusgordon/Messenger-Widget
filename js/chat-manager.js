var openedChat = {}

function openNewChat(url) {
    var newChat = gui.Window.open('chat.html', {
        'width': 600,
        'height': 500,
        'toolbar': true,
        'resizable': false,
        'focus': true,
        'position': 'mouse'
    });
    newChat.on('loaded', function() {
        if (openedChat[url].loaded)
            return;
        newChat.emit('url', url);
        openedChat[url].loaded = true;
    });
    newChat.on('close', function() {
        openedChat[url] = null;
        newChat.close(true);
    });
    return {
        win: newChat,
        loaded: false
    }
}

$('iframe').load(function() {
    $('iframe').contents().find('a._1ht5._5l-3').click(function() {
        var url = $(this).attr('href');
        if (openedChat[url]) {
            openedChat[url].win.focus();
        } else {
            openedChat[url] = openNewChat(url);
        }
    });
});

