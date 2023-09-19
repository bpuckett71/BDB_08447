import { Component, OnInit } from '@angular/core';
import { CoreconService } from './corecon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private coreconService: CoreconService) {}

  ngOnInit(): void {
    this.coreconService.getAccessToken('sampleUser', 'samplePass', 'clientId', 'clientSecret', 'scopes')
      .subscribe(response => {
        console.log('Access Token Response:', response);
        const accessToken = response.access_token;

        // Now use the access token to make the authorized API call
        this.coreconService.getAPICallWithAuthToken(accessToken)
          .subscribe(apiResponse => {
           console.log('API Response:', apiResponse);
         });
      });
  }
}
