import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
//import { AboutComponent } from './about/about.component';
import { routes } from './app-routing.module';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('AppRoutingModule', () => {
  let router: Router;
  let objRouter: Router;
  let location: Location;
  let fixture: ComponentFixture<StudentComponent>;
  let component: StudentComponent;

  let appFixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent, StudentComponent],
    });

    objRouter = TestBed.inject(Router);

    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    appFixture = TestBed.createComponent(AppComponent);
    appComponent = appFixture.componentInstance;
    objRouter.initialNavigation;

    router = TestBed.inject(Router);
  });

  //   it('should navigate to home', async () => {
  //     await router.navigate(['/home']);
  //     expect(router.url).toBe('/home');
  //   });

  //   it('should navigate to about', async () => {
  //     await router.navigate(['/about']);
  //     expect(router.url).toBe('/about');
  //   });

  // it('unit test for default route', ()=>{
  //     appFixture.detectChanges();
  //     appFixture.whenStable().then(()=>{
  //         expect(location.path()).toEqual('./studet')
  //     })
  // })

  it('unit test for default route', () => {
    appFixture.detectChanges();
    let link = appFixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );
    link[0].nativeElement.click();
    appFixture.whenStable().then(() => {
      expect(location.path()).toEqual('./studet');
    });
  });
});
