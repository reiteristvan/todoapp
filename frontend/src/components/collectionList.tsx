import { TodoCollection } from "../models/models";
import { Collection } from "./collection";

export interface CollectionListProps {
    collections: TodoCollection[];
}

export const CollectionList = ({ collections }:CollectionListProps) =>
    <div>
        {collections.map(c => <Collection id={c.id} title={c.title} tasks={c.tasks} />)}
    </div>