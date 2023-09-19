import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuthToken } from '../service/IAuthToken';
import { AuthService } from '../service/auth.service';
const accessToken = 'CRED_TOKEN';

@Component({
  selector: 'app-project-financial',
  templateUrl: './project-financial.component.html'
})
export class ProjectFinancialComponent {  
  tokenResponse: IAuthToken;
  errorMsg: string;
  responseResult: string;
  constructor(private _router: Router, private route: ActivatedRoute, private authService: AuthService) {
  }
  goToHome() {
    localStorage.removeItem(accessToken);
    this._router.navigate(['']);
  }
  GetProjectFinancials(apiUri: string) {
    this.errorMsg = '';
    this.responseResult = '';
    this.tokenResponse = JSON.parse(localStorage.getItem(accessToken) as string);
    this.authService.GetProjectFinancials(this.tokenResponse.access_token, apiUri)
      .subscribe((result: any) => {
        if (result != null) {
          this.responseResult = JSON.stringify(result, null, 2);
        }
      }, (err: any) => {
        this.errorMsg = err.statusText;
      });
  }
}
