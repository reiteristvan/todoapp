
import express, { Request, Response } from 'express'
import { ApolloServer } from 'apollo-server-express'

import { UserModel, CollectionModel, TaskModel } from './data/database'
import { typeDefinitions } from './graphql/schema';
import { resolvers } from './graphql/resolvers';

const app = express();
const port = 8888;

app.use(express.json());

async function startApolloServer(){
    const apolloServer = new ApolloServer({
        typeDefs: typeDefinitions,
        resolvers: resolvers
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

startApolloServer();

app.listen(port, () => {
    console.log('Server started');
});

app.get('/', (request:Request, response:Response) => {
    const result = {
        title: 'todo'
    };
    
    response.status(200).json(result)
});

app.post('/collection', (request:Request, response:Response) => {
    let newCollection = new CollectionModel(request.body);
    newCollection.save((error, document) => {
        if(error) { return console.error(error); }
        console.log('document insterted', document.title);
    });

    response.status(200).json("");
});

app.get('/ping', (request:Request, response:Response) => {
    const result = {
        status: 'OK'
    };
    response.status(200).json(result)
});