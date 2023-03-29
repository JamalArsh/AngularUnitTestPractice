import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A26Component } from './a26.component';

describe('A26Component', () => {
  let component: A26Component;
  let fixture: ComponentFixture<A26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(A26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('A26 - checking colspan attribute', () => {
    const element: HTMLTableElement =
      fixture.debugElement.nativeElement.querySelector('#colId');
    expect(element.getAttribute('colspan')).toEqual(
      component.columnSpan.toString()
    );
  });
});
