import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
  gallery = [
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description "},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/ipl1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/ipl2.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/ipl3.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"},
    {ttl: "Modi with Jhunjhunwalla", img:"assets/images/gallery/modi1.jpg", desc:"Some description"}
  ];
  lgImg:any={};
  largeView: boolean = false;
  myPath:any;
  constructor() { }

  ngOnInit(): void {
    this.lgImg ={ttl:"",desc:"",img:""};
    this.myPath = (window.location.pathname).split('/')[1];
  }
  popimg(gal:any){
      this.largeView=true;
      this.lgImg = gal;
  }
}
