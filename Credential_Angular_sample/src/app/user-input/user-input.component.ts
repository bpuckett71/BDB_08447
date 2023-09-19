import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuthToken } from '../service/IAuthToken';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment';

const accessToken = 'CRED_TOKEN';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',  
})
export class UserInputComponent {
  dto: any = { userName: "", password: "", clientID: environment.CLIENT_ID, secretCode: environment.SECRET_Key, scopes: "add,read,edit" };
  form1: FormGroup;
  formBuilder: FormBuilder;
  tokenResponse: IAuthToken;
  errorMsg: string;
  constructor(private _router: Router, private _route: ActivatedRoute, private _formBuilder: FormBuilder, private authService: AuthService) {
    this.formBuilder = _formBuilder;
    this.form1 = this.formBuilderMethod(this.formBuilder);
    this.form1.patchValue(this.dto);
    this.form1.markAsPristine();
  }

  onClick(event: any) {
    this.dto = this.form1.getRawValue();
    localStorage.setItem("userDetails", JSON.stringify(this.dto));
    this.authService.getAccessToken(this.dto.userName, this.dto.password, this.dto.clientID, this.dto.secretCode, this.dto.scopes)
      .subscribe((result: any) => {
        if (result != null) {
          this.tokenResponse = result;
          localStorage.setItem(accessToken, JSON.stringify(this.tokenResponse));
          //this._router.navigate(['callback']);
          this._router.navigate(['apilist']);
        }
      }, (err: any) => {
        this.errorMsg = err.error.error.message;
      });

  }

  private formBuilderMethod(_formBuilder: FormBuilder) {
    return _formBuilder.group({
      userName: [this.dto.userName, Validators.compose([Validators.required])],
      password: [this.dto.password, Validators.compose([Validators.required])],
      clientID: [this.dto.clientID, Validators.compose([Validators.required])],
      secretCode: [this.dto.secretCode, Validators.compose([Validators.required])],
      scopes: [this.dto.scopes, Validators.compose([Validators.required])]
    });
  }
}
