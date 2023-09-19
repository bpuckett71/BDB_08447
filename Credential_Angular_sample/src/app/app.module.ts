import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { CallbackComponent } from './callback/callback.component';
import { ProjectFinancialComponent } from './project-financial/project-financial.component';
import { EquipmentTimeComponent } from './equipment-time/equipment-time.component';
import { LaborTimeComponent } from './labor-time/labor-time.component';
import { EmployeeMiscExpensesComponent } from './employee-misc-expenses/employee-misc-expenses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent, UserInputComponent, CallbackComponent, ProjectFinancialComponent, EquipmentTimeComponent, LaborTimeComponent
    , EmployeeMiscExpensesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
