
const fs = require('fs-extra');
const express = require('express');
const mustache = require('mustache');

const app = express();

function use(view, route) {
    var controller = require('./controllers/' + view);
    app.get(route, function(request, response) {
        fs.readFile('./views/' + view  + '.mu.html', 'utf8')
        .then(function(data) {
            response.send(mustache.render(data, controller(request)));
        })
        .catch(function(err) {
            console.log(err);
            response.send('<h1>500 - Internal Server Error</h1>' + err);
        });
    });
}

use('player', '/player/:id/:game');
use('logout', '/logout');
use('game', '/game/:id');
use('main', '/main');
use('index', '/');
app.use('/s', express.static('static'));
app.listen(8080, () => console.log('Started.'));