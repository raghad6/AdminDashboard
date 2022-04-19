import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { AppliedFormsComponent } from './pages/applied-forms/applied-forms.component';
import { TraineeListComponent } from './pages/trainee-list/trainee-list.component';
import { TrainersListComponent } from './pages/trainers-list/trainers-list.component';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppliedFormsComponent,
    TraineeListComponent,
    TrainersListComponent,
    EmployeesListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatExpansionModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
