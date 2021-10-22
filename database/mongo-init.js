
db = db.getSiblingDB('admin');
db.auth('root', '12Budapest99');

database = db.getSiblingDB('todoapp');

db.createUser({
    'user': "todoappuser",
    'pwd': "12Budapest99",
    'roles': [{
        'role': 'readWrite',
        'db': 'todoapp'
    }]    
});

database.createCollection('users');
database.createCollection('taskCollections');
database.createCollection('tasks');