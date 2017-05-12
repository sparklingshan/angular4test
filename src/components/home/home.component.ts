import { Component } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    title = 'home page';
    todos = [];
    todoSearchName = '';
    constructor(private data: DataService) {
        this.todos = data.getTodoList();
    };
    todoSearch() {
        if (this.todoSearchName.length === 0) {
            this.todos = this.data.getTodoList();
            return;
        }
        this.todos = [];
        this.todos = this.data.getTodosByName(this.todoSearchName);
    };
}