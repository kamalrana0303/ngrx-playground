import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityServiceService {
  private authorizeEndpoint="/oauth2/authorization/github"
  private tokenEndpoint="/login/oauth2/code/github"

  constructor(private http:HttpClient) { }
  login(){
    window.open("http://localhost:8080"+this.authorizeEndpoint,"_self");
  }
  updateToken(token:any){
    localStorage.setItem("token", token);
  }
  fetchToken(){
    
  }

}
