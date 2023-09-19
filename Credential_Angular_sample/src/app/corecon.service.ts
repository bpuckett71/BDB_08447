import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreconService {

  constructor(private http: HttpClient) { }

  getAccessToken(userName: string, password: string, clientId: string, clientSecret: string, scopes: string): Observable<any> 
  {
    let endpoint = `${environment.corecon.API_URL}/token`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      })
    };
    const body = `username=${userName}&password=${password}&scope=${scopes}&grant_type=password`;
    return this.http.post(endpoint, body, httpOptions);
  }


getRefreshToken(clientId: string, clientSecret: string, refreshToken: string): Observable<any> {
  let endpoint = `${environment.corecon.API_URL}/token`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    })
  };
  const body = `refresh_token=${refreshToken}&grant_type=refresh_token`;
  return this.http.post(endpoint, body, httpOptions);
}

getAPICallWithAuthToken(token: string): Observable<any> {
  let endpoint = `${environment.corecon.API_URL}/test/resource1`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`
    })
  };
  return this.http.get(endpoint, httpOptions);
  } 
}