import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A19Component } from './a19.component';

describe('A19Component', () => {
  let component: A19Component;
  let fixture: ComponentFixture<A19Component>;
  let h1: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(A19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();

    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('verify the 19-h1', () => {
    component.myMethod();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.myLabel);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
