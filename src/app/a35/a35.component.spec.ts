import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';

import { A35Component } from './a35.component';

describe('A35Component', () => {
  let component: A35Component;
  let fixture: ComponentFixture<A35Component>;

  let appComponent: AppComponent;
  let appFixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A35Component, AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(A35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('unit test case for input directive', async () => {
    appComponent.myInputMessage = 'input directive';
    appFixture.detectChanges();
    fixture.whenStable().then(() => {
      let element =
        appFixture.debugElement.nativeElement.querySelector('h3').innerText;
      expect(element).toEqual('child component - input directive');
    });
  });

  it('unit test case for output directive', async () => {
    component.sendValues();
    fixture.detectChanges();

    appFixture.whenStable().then(() => {
      component.myOutput.subscribe((g) => {
        expect(g).toEqual('I am output directive');
      });
    });
    component.sendValues();
  });
});
