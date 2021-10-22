import { model, connect, connection } from 'mongoose';
import { databaseConnectionString } from '../configuration'
import { User, Collection, Task } from './domainModel';
import {userSchema, collectionSchema, taskSchema  } from './schemas';

connect(databaseConnectionString, {
    dbName: 'todoapp'
});

connection.on('error', () => {
    console.error('Database connection error');
});

connection.once('open', () => {
    console.log('Connection established to database');
});

export const UserModel = model<User>('User', userSchema);
export const CollectionModel = model<Collection>('Collection', collectionSchema);
export const TaskModel = model<Task>('Task', taskSchema);