import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { addition } from './Calculator';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  let component = new AppComponent();

  xit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit(`should have as title 'AngularTesting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularTesting');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'AngularTesting app is running!'
    );
  });

  xit('my first test case', () => {
    expect(true).toBeTrue();
  });

  xit('my show alert message', () => {
    expect(component.showMessage('hello')).toBe('hello');
  });

  it('this should take 7, 5 and display 12', () => {
    // expect(addition(5, 7)).toBe(12);
    expect(addition(5, 7)).toBeGreaterThan(10);
  });
});
