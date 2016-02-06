var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
    files: ['./package.json', './*.html', './js/*', './css/*', './images/*'],
    platforms: ['linux64'],
    version: '0.12.3'
});

nw.on('log', console.log);

nw.build().then(function() {
    console.log('all done!');
}).catch(function(error) {
    console.error(error);
});

