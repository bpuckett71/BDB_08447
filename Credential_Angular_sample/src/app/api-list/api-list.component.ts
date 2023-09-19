import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
const accessToken = 'CRED_TOKEN';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html'
})
export class ApiListComponent {  
  constructor(private _router: Router, private route: ActivatedRoute) {
  }

  goToHome() {
    localStorage.removeItem(accessToken);
    this._router.navigate(['']);

  }

  ProjectFinancialsClick() {
    this._router.navigate(['projectfinancial']);
  }
  EquipmentTimeClick() {
    this._router.navigate(['equipmenttime']);
  }
  LaborTimeClick() {
    this._router.navigate(['labortime']);
  }
  EmployeeMiscExpensesClick() {
    this._router.navigate(['employeemiscexpenses']);
  }

}
