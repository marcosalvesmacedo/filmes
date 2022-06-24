'use strict';

const Hapi = require('@hapi/hapi');
const routes = require('./index')
const Blipp = require('blipp');

const init = async () => {

    const server = Hapi.server({
        port: 3200,
        host: 'localhost'
    });

    await server.register({ plugin: Blipp, options: { showStart: true } });

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();