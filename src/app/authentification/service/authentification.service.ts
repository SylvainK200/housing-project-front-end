import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Params} from "@angular/router";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  basic_url = "http://localhost:8080/api/v1/auth/";

  constructor(private http: HttpClient) {
  }

  authenticate(data: any, params: Params): Observable<any>{
    return this.http.post(this.basic_url + 'authenticate', data, {params: params});
  }

  register(data: any, params: Params): Observable<any>{
    return this.http.post(this.basic_url + 'register', data, {params: params});
  }

  activateAccount(params: Params): Observable<any>{
    return this.http.get(this.basic_url + 'activate-account',  {params: params});
  }

}
