import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuthToken } from '../service/IAuthToken';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment'
const accessToken = 'CRED_TOKEN';

@Component({
  selector: 'app-equipment-time',
  templateUrl: './equipment-time.component.html'
})
export class EquipmentTimeComponent {
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
    this.authService.EquipmentTimeImportExcel(this.tokenResponse.access_token, apiUri, this.jsonData)
      .subscribe((result: any) => {
        if (result != null) {
          this.responseResult = JSON.stringify(result);
        }
      }, (err: any) => {
        this.errorMsg = err.statusText;
      });
  }

    EquipmentTimeImportExcel(apiUri: string) {
    this.errorMsg = '';
    this.responseResult = '';
    this.tokenResponse = JSON.parse(localStorage.getItem(accessToken) as string);
      this.authService.EquipmentTimeImportExcel(this.tokenResponse.access_token, apiUri, environment.EquipmentTimeImportExcelData)
      .subscribe((result: any) => {
        if (result != null) {
          this.responseResult = JSON.stringify(result);
        }
      }, (err: any) => {
        this.errorMsg = err.statusText;
      });
  }

  private addControlToForm() {
    this.form.addControl('Date', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('EquipmentCode', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('ProjectNumber', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('PrimeContractNumber', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('ChangeOrderNumber', new FormControl({ value: '', disabled: false }));
    this.form.addControl('CostCode', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('RTHours', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('ITHours', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('DTHours', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.form.addControl('BillableStatus', new FormControl({ value: '', disabled: false }, [Validators.required]));
  }
}
