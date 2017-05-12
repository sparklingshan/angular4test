import { Injectable } from '@angular/core';

class Todo {
    name: string;
    description: string;
}

const todolist: Todo[] = [
    { name: 'todo1', description: 'todo 1 description' },
    { name: 'todo2', description: 'todo 2 description' },
    { name: 'todo3', description: 'todo 3 description' },
    { name: 'todo4', description: 'todo 4 description' },
    { name: 'todo5', description: 'todo 5 description' },
    { name: 'abctodo6', description: 'todo 6 description' },
    { name: 'toasdsaddo7', description: 'todo 7 description' },
    { name: 'todsado8', description: 'todo 8 description' },
    { name: 'toasddo9', description: 'todo 9 description' },
    { name: 'toddsao10', description: 'todo 10 description' },
    { name: 'toasddo11', description: 'todo 11 description' },
    { name: 'todddsao12', description: 'todo 12 description' }
];

@Injectable()
export class DataService {
    getTodoList() {
        return todolist;
    };
    getTodosByName(name: string) {
        let result: Todo[] = [];
        todolist.forEach(t => {
            if (t.name.indexOf(name) > -1) {
                result.push(t);
            }
        });
        return result;
    };
}
