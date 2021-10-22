
database = db.getSiblingDB('todoapp');

database.createCollection('taskCollections');
database.createCollection('tasks')