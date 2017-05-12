import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { DataService } from '../../services/data/data.service';


describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        HomeComponent
      ],
      providers: [DataService]
    }).compileComponents();
  }));

  it('should create the home component', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'home page'`, async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('home page');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('home page');
  }));
});
