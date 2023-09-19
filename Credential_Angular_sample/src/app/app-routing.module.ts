import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInputComponent } from './user-input/user-input.component';
import { CallbackComponent } from './callback/callback.component';
import { ProjectFinancialComponent } from './project-financial/project-financial.component';
import { ApiListComponent } from './api-list/api-list.component';
import { EquipmentTimeComponent } from './equipment-time/equipment-time.component';
import { LaborTimeComponent } from './labor-time/labor-time.component';
import { EmployeeMiscExpensesComponent } from './employee-misc-expenses/employee-misc-expenses.component';

const routes: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: 'callback/:code/:state', component: CallbackComponent },
  { path: 'projectfinancial', component: ProjectFinancialComponent },
  { path: 'apilist', component: ApiListComponent },
  { path: 'equipmenttime', component: EquipmentTimeComponent },
  { path: 'labortime', component: LaborTimeComponent },
  { path: 'employeemiscexpenses', component: EmployeeMiscExpensesComponent },
  { path: '', component: UserInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
