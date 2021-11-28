import { Component, OnInit } from '@angular/core';
import { SecurityServiceService } from 'src/app/zservice/security-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private http:SecurityServiceService) { }

  ngOnInit() {
  }
  login(){
    this.http.login();

  }

}
