import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileSizePipe } from '../file-size.pipe';

import { A34Component } from './a34.component';

describe('A34Component', () => {
  let component: A34Component;
  let fixture: ComponentFixture<A34Component>;
  let upperPipe: UpperCasePipe;
  let lowerPipe: LowerCasePipe;
  let pipe: FileSizePipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(A34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();

    upperPipe = new UpperCasePipe();
    lowerPipe = new LowerCasePipe();
    pipe = new FileSizePipe();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Unit test case for upper pipe', () => {
    expect(upperPipe.transform(component.title)).toEqual('TITLE');
  });

  it('Unit test case for lower pipe', () => {
    expect(lowerPipe.transform(component.title)).toEqual('title');
  });

  it('Unit test case File Size pipe', () => {
    expect(pipe.transform(component.size)).toEqual('File size is - 2.10MB');
  });

  it('Unit test case File Size pipe with argument', () => {
    expect(pipe.transform(component.size, 'GB')).toEqual(
      'File size is - 2.10GB'
    );
  });
});
