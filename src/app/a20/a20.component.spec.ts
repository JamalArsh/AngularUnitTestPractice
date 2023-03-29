import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { A20Component } from './a20.component';

describe('A20Component', () => {
  let component: A20Component;
  let fixture: ComponentFixture<A20Component>;

  // create debug element
  let deb: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(A20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('A20 -  Increase count click', () => {
    const h1 = deb.query(By.css('h1'));
    const btn = deb.query(By.css('#inc-btn'));

    btn.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(component.count).toEqual(parseInt(h1.nativeElement.innerText));
  });
});
