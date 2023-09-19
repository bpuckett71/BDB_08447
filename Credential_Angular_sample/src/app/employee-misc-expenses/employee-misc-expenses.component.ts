import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuthToken } from '../service/IAuthToken';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment'
const accessToken = 'CRED_TOKEN';

@Component({
  selector: 'app-lemployee-misc-expenses',
  templateUrl: './employee-misc-expenses.component.html'
})
export class EmployeeMiscExpensesComponent {
  tokenResponse: IAuthToken;
  errorMsg: string;
  responseResult: string;
  jsonData: string;

  form: FormGroup;
  formBuilder: FormBuilder;

  constructor(private _router: Router, private route: ActivatedRoute, private authService: AuthService, private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({});
    this.addControlToForm();
  }

  goToHome() {
    localStorage.removeItem(accessToken);
    this._router.navigate(['']);

  }

  JsonTimeData(event: any) {
    let tempDto: any = {};
    tempDto = this.form.value;
    var discobj = { Collection: tempDto, UserCompanyName: 'Company name-Test', UserName: 'Amit Sharma' };
    var list: any = [];
    list.push(discobj);
    this.jsonData = JSON.stringify(list);
    localStorage.setItem('JSON_DATA', this.jsonData);
  }

  PostTimeData(apiUri: string) {
    this.errorMsg = '';
    this.responseResult = '';
    this.jsonData = localStorage.getItem('JSON_DATA') as string;
    this.tokenResponse = JSON.parse(localStorage.getItem(accessToken) as string);
    this.authService.EmployeeMiscExpensesImportExcel(this.tokenResponse.access_token, apiUri, this.jsonData)
      .subscribe((result: any) => {
        if (result != null) {
          this.responseResult = JSON.stringify(result);
        }
      }, (err: any) => {
        this.errorMsg = err.statusText;
      });
  }

  EmployeeMiscExpensesImportExcel(apiUri: string) {
    this.errorMsg = '';
    this.responseResult = '';
    this.tokenResponse = JSON.parse(localStorage.getItem(accessToken) as string);
    this.authService.EmployeeMiscExpensesImportExcel(this.tokenResponse.access_token, apiUri, environment.EmployeeMiscImportExcelData)
      .subscribe((result: any) => {
        if (result != null) {
          this.responseResult = JSON.stringify(result);
        }
      }, (err: any) => {
        this.errorMsg = err.statusText;
      });
  }

  private addControlToForm() {
    this.form.addControl('ProjectNumber', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('PrimeContractNumber', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('ChangeOrderNumber', new FormControl({ value: '', disabled: false }));
    this.form.addControl('ExpenseDate', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('ExpenseType', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('PaymentType', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('EmployeeName', new FormControl({ value: '', disabled: false }, [Validators.required]));        
    this.form.addControl('PayeeType', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('PayeeCompany', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('ItemDescription', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('ItemUnit', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('ItemQuantity', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('ItemUnitPrice', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('ItemResource', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('ItemCostCode', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('ItemTaxCode', new FormControl({ value: '', disabled: false }));
    this.form.addControl('BillableStatus', new FormControl({ value: '', disabled: false }, [Validators.required]));
  }
}
