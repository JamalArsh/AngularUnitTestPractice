import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A30Component } from './a30.component';

describe('A30Component', () => {
  let component: A30Component;
  let fixture: ComponentFixture<A30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(A30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('A30 - test case for num > 25', () => {
    const element1: HTMLDivElement =
      fixture.debugElement.nativeElement.querySelector('#div1');
    const element2: HTMLDivElement =
      fixture.debugElement.nativeElement.querySelector('#div2');

    expect(element1).not.toBeNull();
    expect(element2).toBeNull();
  });

  it('A30 - test case for num > 25 - ngTemplate', () => {
    const element1: HTMLHeadingElement =
      fixture.debugElement.nativeElement.querySelector('#ng1');
    const element2: HTMLHeadingElement =
      fixture.debugElement.nativeElement.querySelector('#ng2');

    expect(element1).not.toBeNull();
    expect(element2).toBeNull();
  });
});
