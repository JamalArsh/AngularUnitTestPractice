import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A23Component } from './a23.component';

describe('A23Component', () => {
  let component: A23Component;
  let fixture: ComponentFixture<A23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(A23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('A23 - interpolation unit test', () => {
    const name: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#name');
    expect(name.innerHTML).toEqual(component.name);
  });

  it('A23 - interpolation unit test for textbox', () => {
    const input: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#usenum');
    expect(input.type).toEqual(component.type);
  });

  it('A23 - interpolation unit test for textbox - readonly', () => {
    const input: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#usenum');
    expect(input.readOnly).toBeFalsy();
  });
});
