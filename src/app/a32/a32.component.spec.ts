import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { A32Component } from './a32.component';

describe('A32Component', () => {
  let component: A32Component;
  let fixture: ComponentFixture<A32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(A32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('A32 ngFor1 simple arry unit test 1', () => {
    const element: DebugElement[] = fixture.debugElement.queryAll(
      By.css('.ngFor1')
    );
    expect(element.length).toEqual(4);

    element.forEach((obj: DebugElement, index: number) => {
      expect(obj.children[0].nativeElement.innerHTML.trim()).toEqual(
        component.ColorNames[index]
      );
    });
  });

  it('A32 ngFor2 simple arry unit test 2', () => {
    const element: DebugElement[] = fixture.debugElement.queryAll(
      By.css('.ngFor2')
    );
    expect(element.length).toEqual(4);

    element.forEach((obj: DebugElement, index: number) => {
      expect(obj.children[0].nativeElement.innerHTML.trim()).toEqual(
        component.ColorList[index].name + ' - ' + component.ColorList[index].id
      );
    });
  });

  it('A32 ngFor3 simple arry unit test 3', () => {
    const element: DebugElement[] = fixture.debugElement.queryAll(
      By.css('.ngFor3')
    );
    expect(element.length).toEqual(4);

    element.forEach((obj: DebugElement, index: number) => {
      const output = `${index} - ${index === 0 ? true : false} - ${
        element.length - 1 === index ? true : false
      } - ${index % 2 === 0} - ${index % 2 !== 0}`;
      expect(obj.children[0].nativeElement.innerHTML.trim()).toEqual(output);
    });
  });
});
