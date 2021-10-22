
database = db.getSiblingDB('todoapp');

database.createCollection('users');
database.createCollection('taskCollections');
database.createCollection('tasks');