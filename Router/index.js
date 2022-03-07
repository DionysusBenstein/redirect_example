import jayson from 'jayson';

const port = 3000;
const matchengineHost = 'http://localhost:3001/'

const server = new jayson.Server({
    query: jayson.Client.http(matchengineHost),
    update: jayson.Client.http({
        port: 3001
    }),
    put_limit: jayson.Client.http({
        port: 3002
    }),
});


server.http().listen(port);