import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Province } from '../model/province';
import { Observable } from 'rxjs';
import { callbackify } from 'util';
@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  headerOptions: any = null
  private baseUrl: string = 'http://localhost:8000';
  constructor(private _http: HttpClient) {
  }
  provinces: Province[] = [];
  private log(message: string) {
    console.log('loi province service' + message);
  }
  // loginAuth(userObj: any) {
  //   if (userObj.authcode) {
  //     console.log('Appending headers');
  //     this.headerOptions = new HttpHeaders({
  //       'x-tfa': userObj.authcode
  //     });
  //   }
  //   return this._http.post("http://localhost:8000/login", { user: userObj }, { observe: 'response', headers: this.headerOptions });
  // }

  // setupAuth(email: any) {
  //   return this._http.post("http://localhost:8000/currentAuthen", { email: email }, { observe: 'response' })
  // }

  // registerUser(userObj: any) {
  //   return this._http.post("http://localhost:8000/register", { user: userObj }, { observe: "response" });
  // }

  // updateAuthStatus(value: boolean) {
  //   this._isLoggedIn = value
  //   this.authSub.next(this._isLoggedIn);
  //   localStorage.setItem('isLoggedIn', value ? "true" : "false");
  // }

  // getAuthStatus() {
  //   this._isLoggedIn = localStorage.getItem('isLoggedIn') == "true" ? true : false;
  //   return this._isLoggedIn
  // }

  // logoutUser() {
  //   this._isLoggedIn = false;
  //   this.authSub.next(this._isLoggedIn);
  //   localStorage.setItem('isLoggedIn', "false")
  // }

  getProvinces = (): Observable<Province[]> => {

    return this._http.get<Province[]>(`${this.baseUrl}/provinces`)
      .pipe(
        tap(_ => console.log('load province'))
      );
  }
  getProvinceArray() {
    this.getProvinces().subscribe(provinces => {
      this.provinces = provinces;
      console.log('province' + this.provinces);

    })
  }
  //   return this._http.get(`${this.baseUrl}/provinces`, { observe: 'response' });
  // }

  // deleteAuth() {
  //   return this._http.delete("http://localhost:3000/tfa/setup", { observe: 'response' });
  // }

  // verifyAuth(email: any) {
  //   return this._http.post("http://localhost:8000/currentAuthen", { email: email }, { observe: 'response' })
  // }


  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}

