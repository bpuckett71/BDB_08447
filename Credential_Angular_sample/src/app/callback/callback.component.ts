import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuthToken } from '../service/IAuthToken';
import { AuthService } from '../service/auth.service';

const accessToken = 'CRED_TOKEN';
@Component({
  selector: 'callback-div',
  templateUrl: './callback.component.html',
})
export class CallbackComponent implements OnInit {
  dto: any;
  tokenResponse: IAuthToken;
  errorMsg: string;  
  costResult: any;
  responseResult: string;
  constructor(private _router: Router, private route: ActivatedRoute, private authService: AuthService) {
  }
  ngOnInit() {
    this.dto = JSON.parse(localStorage.getItem("userDetails") as string);
    this.tokenResponse = JSON.parse(localStorage.getItem(accessToken) as string);
  }

  getAPICallwithAccessToken() {
    this.errorMsg = '';
    this.responseResult = '';
    this.tokenResponse = JSON.parse(localStorage.getItem(accessToken) as string);
    if (this.tokenResponse) {
      this.authService.getAPICallwithAuthToken(this.tokenResponse.access_token)
        .subscribe((result: any) => {
          if (result != null) {            
            this.responseResult = result;
          }
        }, (err: any) => {
          this.errorMsg = err.statusText;
        });
    }
  }

  getAPICallwithRefreshToken() {
    this.errorMsg = '';
    this.responseResult = '';
    this.tokenResponse = JSON.parse(localStorage.getItem(accessToken) as string);
    if (this.tokenResponse) {
      this.authService.getAPICallwithAuthToken(this.tokenResponse.refresh_token)
        .subscribe((result: any) => {
          if (result != null) {
            this.responseResult = result;
          }
        }, (err: any) => {
          this.errorMsg = err.statusText;
        });
    }
  }

  getAPICallwithoutToken() {
    this.errorMsg = '';
    this.responseResult = '';
    this.authService.getAPICallwithoutAuthToken()
      .subscribe((result: any) => {
        if (result != null) {
          this.responseResult = result;
        }
      }, (err: any) => {
        this.errorMsg = err.statusText;
      });
  }

  getTokenFromRefresh() {
    this.errorMsg = '';
    this.responseResult = '';
    this.tokenResponse = JSON.parse(localStorage.getItem(accessToken) as string);
    this.authService.getRefereshToken(this.dto.clientID, this.dto.secretCode, this.tokenResponse.refresh_token)
      .subscribe((data: any) => {
        this.tokenResponse = data;
        localStorage.setItem(accessToken, JSON.stringify(this.tokenResponse));
        this.responseResult = 'Token refreshed successfully.';
      }, (err: any) => {
        this.errorMsg = err.statusText;
      });
  }

  goToHome() {
    localStorage.removeItem(accessToken);
    this._router.navigate(['']);

  }
  
}
