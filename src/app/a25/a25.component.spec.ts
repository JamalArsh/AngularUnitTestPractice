import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A25Component } from './a25.component';

describe('A25Component', () => {
  let component: A25Component;
  let fixture: ComponentFixture<A25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(A25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('A25 - ngClass testing for paragraph', () => {
    const element = fixture.debugElement.nativeElement.querySelector('#header');
    expect(element.getAttribute('class')).toContain('font-red');
  });

  it('A25 - ngClass testing for header1', () => {
    const element =
      fixture.debugElement.nativeElement.querySelector('#header1');
    expect(element.getAttribute('class')).toContain('font-blue');
  });
});
