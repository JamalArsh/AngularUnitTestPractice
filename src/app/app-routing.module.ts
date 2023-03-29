import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  {
    path: 'a19',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
