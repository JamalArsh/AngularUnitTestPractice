import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { A28Component } from './a28.component';

describe('A28Component', () => {
  let component: A28Component;
  let fixture: ComponentFixture<A28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A28Component],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(A28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('A28 - set student name from component', (done) => {
    component.studentName = 'label';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const element: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#name');
      expect(element.value).toEqual('label');
      done();
    });
  });
  // Removed done and added async
  it('A28 - set student name from component', async(() => {
    component.studentName = 'label';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const element: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#name');
      expect(element.value).toEqual('label');
    });
  }));

  // Removed done and added fakeAsync and tick()
  it('A28 - set student name from component', fakeAsync(() => {
    component.studentName = 'label';
    fixture.detectChanges();
    tick();
    // fixture.whenStable().then(() => {
    const element: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#name');
    expect(element.value).toEqual('label');
    // });
  }));

  it('set textbox value', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element: HTMLInputElement =
        fixture.debugElement.nativeElement.querySelector('#name');
      element.value = 'text box edited';
      element.dispatchEvent(new Event('input'));
      expect(element.value).toEqual(component.studentName);
      done();
    });
  });

  it('button click test case', () => {
    fixture.detectChanges();
    const element: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector('#button1');
    fixture.whenStable().then(() => {
      element.click();
      expect(component.studentName).toEqual('');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const element: HTMLInputElement =
          fixture.debugElement.nativeElement.querySelector('#name');
        expect(element.value).toEqual('');
      });
    });
  });
});
