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

    constructor(private data: DataService) {
        this.todos = data.getTodoList();
    }
    
}