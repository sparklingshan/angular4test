import { TestBed, async } from '@angular/core/testing';
import { SigninComponent } from './signin.component';

describe('Signincomponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SigninComponent]
        }).compileComponents();
    }));

    it('should create signin component', async(() => {
        const fixture = TestBed.createComponent(SigninComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});