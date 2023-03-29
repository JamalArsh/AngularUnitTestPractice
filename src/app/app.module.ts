import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { A19Component } from './a19/a19.component';
import { A20Component } from './a20/a20.component';
import { A23Component } from './a23/a23.component';
import { A25Component } from './a25/a25.component';
import { A26Component } from './a26/a26.component';
import { A27Component } from './a27/a27.component';
import { A28Component } from './a28/a28.component';
import { FormsModule } from '@angular/forms';
import { A30Component } from './a30/a30.component';
import { A31Component } from './a31/a31.component';
import { A32Component } from './a32/a32.component';
import { A34Component } from './a34/a34.component';
import { FileSizePipe } from './file-size.pipe';
import { A35Component } from './a35/a35.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    A19Component,
    A20Component,
    A23Component,
    A25Component,
    A26Component,
    A27Component,
    A28Component,
    A30Component,
    A31Component,
    A32Component,
    A34Component,
    FileSizePipe,
    A35Component,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
