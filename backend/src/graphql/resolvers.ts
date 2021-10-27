import mongoose from "mongoose";
import { CollectionModel, TaskModel } from "../data/database";
import { Collection, Task } from "../data/domainModel";

type GetCollectionsArgs = {
    userId: string;
}

type GetCollectionArgs = {
    collectionId: string;
}

type GetTaskArgs = {
    collectionId: string;
}

type NewCollectionArgs = {
    title: string;
}

type DeleteCollectionArgs = {
    collectionId: string;
}

type CreateTaskArgs = {
    title: string;
    collectionId: string;
}

type SetTaskStatusArgs = {
    taskId: string;
    isCompleted: boolean;
}

interface ApplicationContext {
    currentUserId: Number;
}

export const resolvers = {
    Query: {
        getCollections: async (root:undefined, args:GetCollectionsArgs, context:ApplicationContext): Promise<Array<Collection>> => {
            return await CollectionModel.find({userId: args.userId});
        },
        getCollection: async (root: undefined, args:GetCollectionArgs, context: ApplicationContext): Promise<Collection> => {
            let mongoId = new mongoose.Types.ObjectId(args.collectionId);
            return await CollectionModel.findById(mongoId);
        },
        getTasksOfCollection: async (root: undefined, args:GetTaskArgs, context:ApplicationContext): Promise<Array<Task>> => {
            return await TaskModel.find({ collectionId: args.collectionId});
        }
    },
    Mutation: {
        createCollection: async (root: undefined, args:NewCollectionArgs, context:ApplicationContext): Promise<Collection> => {
            return await CollectionModel.create({
                title: args.title,
                userId: '1'
            });
        },
        deleteCollection: async (root: undefined, args:DeleteCollectionArgs, context:ApplicationContext): Promise<void> => {
            let mongoId = new mongoose.Types.ObjectId(args.collectionId);
            await CollectionModel.remove({ _id: mongoId });
        },
        createTask: async (root: undefined, args:CreateTaskArgs, context: ApplicationContext): Promise<Task> => {
            return await TaskModel.create({
                title: args.title,
                collectionId: args.collectionId
            });
        },
        setTaskStatus: async(root:undefined, args:SetTaskStatusArgs, context: ApplicationContext): Promise<void> => {
            let mongoId = new mongoose.Types.ObjectId(args.taskId);
            await TaskModel.findOneAndUpdate({ _id: mongoId }, { isCompleted: args.isCompleted });
        }
    }
};