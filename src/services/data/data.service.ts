import { Injectable } from '@angular/core';

class todo {
    name: string;
    description: string;
}

var todolist: todo[] = [
    { name: 'todo1', description: 'todo 1 description' },
    { name: 'todo2', description: 'todo 2 description' },
    { name: 'todo3', description: 'todo 3 description' },
    { name: 'todo4', description: 'todo 4 description' },
    { name: 'todo5', description: 'todo 5 description' },
    { name: 'todo6', description: 'todo 6 description' },
    { name: 'todo7', description: 'todo 7 description' },
    { name: 'todo8', description: 'todo 8 description' },
    { name: 'todo9', description: 'todo 9 description' },
    { name: 'todo10', description: 'todo 10 description' },
    { name: 'todo11', description: 'todo 11 description' },
    { name: 'todo12', description: 'todo 12 description' }
]

@Injectable()
export class DataService {
    constructor() { }
    getTodoList() {
        return todolist;
    }
    getTodoByName(name: string){
        
    }
}
