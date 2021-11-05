import { TodoTask } from "../models/models";
import { Task } from "./task";

export interface TaskListProps {
    tasks: TodoTask[];
}

export const TaskList = ({ tasks }:TaskListProps) =>
    <div> 
        {tasks.map(t => <Task id={t.id} title={t.title} isCompleted={t.isCompleted} />)}
    </div>