import { TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DataService } from './data.service';

describe('DataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            providers: [DataService]
        });
    });

    it('should inject data service', inject([DataService], (service: DataService) => {
        expect(service).toBeTruthy();
    }));

    it('get todo by name todo1', inject([DataService], (service: DataService) => {
        let result = service.getTodosByName('todo1');
        expect(result).toEqual([{ name: 'todo1', description: 'todo 1 description' }]);
    }));
});