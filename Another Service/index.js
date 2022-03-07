import express from 'express';
import jayson from 'jayson';

const app = express();
const port = 3002;

app.use(express.json());

const methods = {
    async put_limit(args, callback) {
        callback(null, {
            message: 'this is another service bitch',
            body: args
        });
    }
}

app.post('/', new jayson.Server(methods).middleware()); 

app.listen(port, () => console.log(`Running on port ${port}`));