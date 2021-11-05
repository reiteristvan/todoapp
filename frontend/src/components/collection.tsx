import { TodoTask } from "../models/models";
import { TaskList } from "./taskList";

export interface CollectionProps {
    id: string;
    title: string;
    tasks: TodoTask[];
}

export const Collection = ({ id, title, tasks }:CollectionProps) =>
    <div key={id}>
        {title}
        <TaskList tasks={tasks} />
    </div>