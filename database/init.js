
db = db.getSiblingDB('admin');
db.auth('root', '12Budapest99');

database = db.getSiblingDB('todoapp');

db.createUser({
    'user': "root",
    'pwd': "12Budapest99",
    'roles': [{
        'role': 'dbOwner',
        'db': 'todoapp'
    }]    
});

database.createCollection('users');
database.createCollection('taskCollections');
database.createCollection('tasks');