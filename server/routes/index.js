'use strict';

const
    path = require('path'),
    passport = require('../../config/passport'),
    loginRoute = require('./login');

function init(server) {

    // main route - serves app
    server.get('/', function (req, res) { 
        res.sendFile(path.join(__dirname,'../../build/index.html'));
    });

    // REGISTER ROUTES - include all server routes below
    server.use('/login', loginRoute);
}

module.exports = {
    init: init
};