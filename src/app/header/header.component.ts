import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../app.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLoggedIn: boolean = false;
  myPath:any
  isuserlogedin:any;
  constructor(private router: Router,
    private appService: AppService
    ) { }

  ngOnInit(): void {
    //this.appService.chekuserlogin();
// this.isuserlogedin=sessionStorage.getItem('isLoggedIn')
// this.userLoggedIn=this.isuserlogedin

console.log(this.userLoggedIn)

    this.appService.userLoggedIn.subscribe(loggedIn => this.userLoggedIn = loggedIn)
    this.myPath = (window.location.pathname).split('/')[1];
  }
  logout() {
    this.appService.logOutUser();
  }
  login(){
    this.router.navigate(['/login']);
    this.myPath='gallary'
  }
  gallary(){
    this.router.navigate(['/gallary']);
   
  }
  about(){
    this.router.navigate(['/about']);
  }

}
