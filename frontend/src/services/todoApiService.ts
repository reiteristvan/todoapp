import { TodoCollection } from "../models/models"

const fetchCollections = async () : Promise<TodoCollection[]> => {
    let userId = 1;
    let query = `query Query($userId: ID) {
                    getCollections(userId: $userId) {
                        id
                        title
                    }
                }`;

    let response = await fetch('http://localhost:8080/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query,
            variables: { userId }
        })
    });

    let data = await response.json();

    console.log(data.data.getCollections);

    return response.json();
}

export const TodoService = {
    fetchCollections
};