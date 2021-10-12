import { Component, OnInit, Output } from '@angular/core';
import { dbComponent } from '../db.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  @Output() usersDB = new dbComponent();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    console.log(this.usersDB)
  }
  onSubmit(){

    const loggedIn = this.appService.loginUser(this.loginForm.value)
    if (loggedIn) {
      this.router.navigate(['gallary']);
      return;
    }

  }

}
