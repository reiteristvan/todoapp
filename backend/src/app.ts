import { rejects } from 'assert';
import express, { Request, Response } from 'express'
import { resolve } from 'path/posix';
import { UserModel, CollectionModel, TaskModel } from './data/database'

const app = express();
const port = 8888;

app.use(express.json());

app.listen(port, () => {
    console.log('Server started');
});

// List all collection in database
app.get('/', (request:Request, response:Response) => {
    const result = {
        title: 'todo'
    };
    
    response.status(200).json(result)
});

app.post('/collection', (request:Request, response:Response) => {
    let newUser = new UserModel(request.body);
    newUser.save((error, document) => {
        if(error) { return console.error(error); }
        console.log('document insterted')
    });

    response.status(200).json("");
});

app.get('/ping', (request:Request, response:Response) => {
    const result = {
        status: 'OK'
    };
    response.status(200).json(result)
});