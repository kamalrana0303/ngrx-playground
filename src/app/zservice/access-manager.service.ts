import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LoginResponse, Token } from 'src/store/reducers/access.reducer';
import * as env from '../../environments/environment';
@Injectable()
export class AccessManagerService {
  
  constructor(private http:HttpClient){ }

  login(credentials:any):Observable<LoginResponse>{
    
    return this.http.post<LoginResponse>(env.environment.BASE_URL+"/user/login",credentials,{observe: "response", responseType:"json"}).pipe(map((response:HttpResponse<any>)=>{
      const token=new Token();
      token.authorization=response.headers.get("Authorization");
      token.userId=response.headers.get("UserId");
      return {headers:token};
    }));
  }
}
