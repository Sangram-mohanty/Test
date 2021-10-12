import { Component, OnInit, Output } from '@angular/core';

import { dbComponent } from '../db.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
 
  
  gallery1 = [
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/ifco.jpg", desc:"Some description "},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/ipl1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/ipl2.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/ifco.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"},
     
  ]
  gallery = [
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/ifco.jpg", desc:"Some description "},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/ipl1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/ipl2.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/patha.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"}
  ];
  @Output() usersDB = new dbComponent();
  userList:any;
  showuserlist: boolean = false;
  commentVal: string = "";
  
  constructor( private appService: AppService) { }
 

  ngOnInit(): void {
    // const loggedIn = this.appService.loginUser(this.loginForm.value)
    console.log(this.usersDB)
  }

  checkUser(event:any){
    let v = event.target.value;
    let ustr: string;
    let ulen: number;
    if(v.slice(-1) == '@'){
      this.showuserlist = true;
      this.userList = this.usersDB.usersDB;
      console.log(this.userList);
    }else if(this.showuserlist == true){
      let n = v.split('@').length;
      ustr = v.split('@')[n-1];
      ulen = ustr.length;
      this.userList = [];
      for(let i=0;i<this.usersDB.usersDB.length;i++){
        let un = this.usersDB.usersDB[i].username;
        let sbun = un.substr(0,ulen);
        if(ustr == sbun){
          this.userList.push({username:un});
        }
      }
      console.log(ustr);
      
    }
  }
  pickUser(commentStr:string, u:string){
    let n = commentStr.split('@').length;
    let ustr = commentStr.split('@')[n-1];

    var pos = commentStr.lastIndexOf(ustr);
    this.commentVal = commentStr.substring(0,pos) + u + commentStr.substring(pos+1); 
    this.showuserlist=false;
  }

}
