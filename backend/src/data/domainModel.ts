export interface User {
    username: string;
    hash: string;
    salt: string;
}

export interface Collection {
    title: string;
    userId: string;
}

export interface Task {
    title: string;
    isCompleted: boolean;
    collectionId: string;
}