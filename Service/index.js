import express from 'express';
import jayson from 'jayson';

const app = express();
const port = 3001;

app.use(express.json());

const methods = {
    async query(args, callback) {
        callback(null, 'query res works okay))');
    },

    async update(args, callback) {
        callback(null, 'update res works okay)) AHHHHHHHHHHHHHHHH');
    }
}

app.post('/', new jayson.Server(methods).middleware()); 

app.listen(port, () => console.log(`Running on port ${port}`));