import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AppliedFormsComponent } from './pages/applied-forms/applied-forms.component';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';
import { TraineeListComponent } from './pages/trainee-list/trainee-list.component';
import { TrainersListComponent } from './pages/trainers-list/trainers-list.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'AppliedForms',
    component: AppliedFormsComponent
  }, {
    path: 'Trainees-List',
    component: TraineeListComponent
  }, {
    path: 'Trainers-List',
    component: TrainersListComponent
  }, {
    path: 'Employees-List',
    component: EmployeesListComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
