import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A31Component } from './a31.component';

describe('A31Component', () => {
  let component: A31Component;
  let fixture: ComponentFixture<A31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(A31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('A30 - testing for ngSwitch', () => {
    const element: HTMLDivElement =
      fixture.debugElement.nativeElement.querySelector('#div1');
    expect(element.childElementCount).toEqual(1);
    expect(element.children.length).toEqual(1);
    expect(element.children[0].innerHTML).toEqual('One is selected');
  });
});
