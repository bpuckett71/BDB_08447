import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthToken } from './IAuthToken';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  getAccessToken(userName: string, password: string, clientId: string, clientSecret: string, scopes: string): Observable<IAuthToken> {
    let endpoint = environment.TOKEN_END_POINT;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      })
    };    
    const body = 'username={0}&password={1}&scope={2}&grant_type=password'      
      .replace('{0}', userName)
      .replace('{1}', password)
      .replace('{2}', scopes);
    return this.http.post<IAuthToken>(endpoint, body, httpOptions);
  }

  getRefereshToken(clientId: string, clientSecret: string, refreshToken: string): Observable<IAuthToken> {
    let endpoint = environment.TOKEN_END_POINT;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      })
    };
    const body = 'refresh_token={0}&grant_type=refresh_token'
      .replace('{0}', refreshToken);
    return this.http.post<IAuthToken>(endpoint, body, httpOptions);
  }

  getAPICallwithAuthToken(token: string): Observable<string> {
    let endpoint = environment.API_URI + "test/resource1";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<string>(endpoint, httpOptions);
  }

  getAPICallwithoutAuthToken(): Observable<string> {
    let endpoint = environment.API_URI + "test/resource1";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
        //, 'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<string>(endpoint, httpOptions);
  }

  GetProjectFinancials(accesstoken: string, apiUri: string): Observable<any> {
    let url = environment.API_URI + "ProjectFinancial/" + apiUri + "?accountId=" + environment.ACCOUNT_ID + "&integrationKey=" + environment.CLIENT_ID + "&page=1&itemPerPage=1";
    let token = 'Bearer ' + accesstoken;
    const headers = { 'Authorization': token };
    const body = JSON.parse(environment.DATA);
    return this.http.post<any>(url, body, { headers });
  }

  LaborTimeImportExcel(accesstoken: string, apiUri: string, jsonData: string): Observable<any> {
    let url = environment.API_URI + "LaborTime/" + apiUri + "?accountId=" + environment.ACCOUNT_ID + "&integrationKey=" + environment.CLIENT_ID + "&userTimeZone=India Standard Time";
    let token = 'Bearer ' + accesstoken;
    const headers = { 'Authorization': token };
    const body = JSON.parse(jsonData);
    return this.http.post<any>(url, body, { headers });
  }

  EquipmentTimeImportExcel(accesstoken: string, apiUri: string, jsonData: string): Observable<any> {
    let url = environment.API_URI + "EquipmentTime/" + apiUri + "?accountId=" + environment.ACCOUNT_ID + "&integrationKey=" + environment.CLIENT_ID + "&userTimeZone=India Standard Time";
    let token = 'Bearer ' + accesstoken;
    const headers = { 'Authorization': token };
    const body = JSON.parse(jsonData);
    return this.http.post<any>(url, body, { headers });
  }

  EmployeeMiscExpensesImportExcel(accesstoken: string, apiUri: string, jsonData: string): Observable<any> {
    let url = environment.API_URI + "EmployeeMiscExpenses/" + apiUri + "?accountId=" + environment.ACCOUNT_ID + "&integrationKey=" + environment.CLIENT_ID + "&userTimeZone=India Standard Time";
    let token = 'Bearer ' + accesstoken;
    const headers = { 'Authorization': token };
    const body = JSON.parse(jsonData);
    return this.http.post<any>(url, body, { headers });
  }
}
