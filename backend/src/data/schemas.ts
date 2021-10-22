
import { Schema } from 'mongoose'
import { User, Collection, Task } from './domainModel'

export const userSchema = new Schema<User>({
    username: { type: String, required: true },
    hash: { type: String, required: true },
    salt: { type: String, required: true }
});

export const collectionSchema = new Schema<Collection>({
    title: { type: String, required: true },
    userId: { type: String, required: true }
});

export const taskSchema = new Schema<Task>({
    title: { type:String, required: true },
    isCompleted: { type: Boolean, required: true },
    collectionId: { type: String, required: true }
});