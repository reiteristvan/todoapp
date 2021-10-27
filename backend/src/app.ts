
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
    response.status(200).json({ title: "Hello" });
});

app.get('/ping', (request:Request, response:Response) => {
    const result = {
        status: 'OK'
    };
    response.status(200).json(result)
});