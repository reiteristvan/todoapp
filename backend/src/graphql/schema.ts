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
        getCollections(userId:ID): [Collection]!
        getCollection(collectionId:ID!): Collection
        getTasksOfCollection(collectionId:ID!): [Task]!
    }

    type Mutation {
        createCollection(title:String, userId:String): Collection
        deleteCollection(id:String): ID
        createTask(title:String, collectionId:String): ID
        setTaskStatus(taskId:String, isCompleted:Boolean): ID
    }
`;