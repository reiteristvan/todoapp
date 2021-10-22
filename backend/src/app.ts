import express, { Request, Response } from 'express'

const app = express();
const port = 8080;

app.listen(port, () => {
    console.log('test');
});

app.get('/', (request:Request, response:Response) => {
    const result = {
        title: 'todo'
    };
    
    response.status(200).json(result)
});

app.get('/health', (request:Request, response:Response) => {
    const result = {
        title: 'OK'
    };
    console.log('healthcheck');
    response.status(200).json(result)
});