
export interface TodoCollection {
    id: string;
    title: string;
    tasks: TodoTask[];
}

export interface TodoTask {
    id: string;
    title: string;
    isCompleted: boolean;
}