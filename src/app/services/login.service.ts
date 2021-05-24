import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError,Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url = 'https://medicalapim.azure-api.net/login';
  
  _url2 = 'https://medicalapim.azure-api.net/clinics'; 
  

  constructor(private _http: HttpClient) { }

  // LoginService
  loginService(form: Login): Observable<any> {
    let httpHeaders = new HttpHeaders()
     .append('Ocp-Apim-Subscription-Key', '242ae98ddfd749fcbf808cbf41e20d92');
    
    return this._http.post(this._url, form, {
      headers: httpHeaders
    })
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }

  // LoginService
  getClinc(): Observable<any> {
    let httpHeaders = new HttpHeaders()
     .append('Ocp-Apim-Subscription-Key', '242ae98ddfd749fcbf808cbf41e20d92');
  
    return this._http.get(this._url2, {
      headers: httpHeaders
    })
      .pipe(catchError(this.errorHandler))
  }
}
