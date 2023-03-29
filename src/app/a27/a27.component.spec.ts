import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A27Component } from './a27.component';

describe('A27Component', () => {
  let component: A27Component;
  let fixture: ComponentFixture<A27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(A27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('A27 - button 1', () => {
    const element: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector('#button1');
    expect(component.label).toEqual('this is a lebel');

    element.click();
    fixture.detectChanges();
    expect(component.label).toEqual('button 1 clicked');
  });

  it('A27 - button 2', () => {
    const element: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector('#button2');
    expect(component.label).toEqual('this is a lebel');

    element.click();
    fixture.detectChanges();
    expect(component.label).toEqual('button 2 clicked');
  });

  it('A27 - text box 1', () => {
    const element: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#textbox1');
    expect(component.label).toEqual('this is a lebel');

    element.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.label).toEqual('label value changed');
  });

  it('A27 - text box 2', () => {
    const element: HTMLInputElement =
      fixture.debugElement.nativeElement.querySelector('#textbox2');

    element.value = 'label value changed';
    element.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.label).toEqual('label value changed');
  });
});
