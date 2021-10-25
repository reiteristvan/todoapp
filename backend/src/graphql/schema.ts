import { gql } from 'apollo-server-express'

export const typeDefinitions = gql`
    type Collection {
        id: String!
        userId: String!
        title: String!
        tasks: [Task]
    }

    type Task {
        id: String!
        title: String!
        isCompleted: Boolean!
    }

    type Query {
        collections: [Collection]!
        collection(id:ID!): Collection
        tasks(collectionId:ID!): [Task]!
    }

    type Mutation {
        createCollection(title:String, userId:String): Collection
        deleteCollection(id:String): ID
        createTask(title:String, collectionId:String): ID
        setTaskStatus(taskId:String, isCompleted:Boolean): ID
    }
`;