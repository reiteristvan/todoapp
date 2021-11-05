
export interface TaskProps {
    id: string;
    title: string;
    isCompleted: boolean;
}

export const Task = ({ id, title, isCompleted }:TaskProps) => 
    <div key={id}>
        {title}
    </div>;