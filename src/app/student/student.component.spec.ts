import { inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student.component';
import { StudentService } from '../student.service';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

class MockStudentService extends StudentService {
  public NewSaveMethod() {
    return true;
  }
}

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let h1: HTMLElement;

  let service: StudentService;

  let deb: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers: [StudentService],
      imports: [AppRoutingModule, HttpClientModule],
    }).compileComponents();

    TestBed.overrideComponent(StudentComponent, {
      set: {
        providers: [{ provide: StudentService, useClass: MockStudentService }],
      },
    });

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deb = fixture.debugElement;
    h1 = fixture.nativeElement.querySelector('h1');

    service = TestBed.get(StudentService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('SpyOn() method', () => {
    spyOn(component, 'calculate');
    component.saveData();
    expect(component.calculate).toHaveBeenCalled();
  });

  it('SpyOn() method - 1', () => {
    spyOn(component, 'calculate').and.returnValues(40, 20);
    let result = component.StudentResult();
    expect(result).toEqual('Pass');
  });

  it('SpyOn() method - 2', () => {
    let service = fixture.debugElement.injector.get(StudentService);
    spyOn(service, 'SaveDetails').and.callFake(() => {
      return of({
        result1: 200,
      });
    });
    spyOn(component, 'SaveDataIntoConsole').and.stub();
    component.saveData();
    expect(component.result).toEqual({
      result1: 200,
    });
  });

  xit('Verify the h1 element value', () => {
    component.StudentResult();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.studentResult);
  });

  // it('Increase count click', () => {
  //   const h1 = deb.query(By.css('h1'));
  //   const btn = deb.query(By.css('#btnincreaseNumber'));

  //   btn.triggerEventHandler('click', {});
  //   fixture.detectChanges();
  //   expect(component.CountNumber).toEqual(parseInt(h1.nativeElement.innerText));
  // });

  // Calling private methods
  it('Call private method', () => {
    component['ShowName']();
    expect(component['Name']).toEqual('Dotnet office');
  });

  // spyOn private methods
  it('spyOn private method', () => {
    let spyName = spyOn<any>(component, 'ShowName');

    component['ShowName']();
    expect(spyName).toHaveBeenCalled();
  });

  it('Interpolation test', () => {
    const name: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#name');
    expect(name.innerHTML).toEqual(component.name);

    component.name = 'name-updated';
    fixture.detectChanges();
    expect(name.innerHTML).toEqual(component.name);
  });

  it('DI unit test case using testbed get method', () => {
    expect(service instanceof StudentService).toBeTruthy();
  });

  it('DI unit test case using inject method', inject(
    [StudentService],
    (instanceService: StudentService) => {
      expect(instanceService).toBeTruthy();
    }
  ));

  it('DI unit test case with ovveride', () => {
    let element = fixture.debugElement.injector.get(StudentService);
    expect(element instanceof MockStudentService).toBeTruthy();
  });
});
