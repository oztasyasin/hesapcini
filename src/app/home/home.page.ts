import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BildirimlerService } from '../services/bildirimler.service';
import { MenuicerikService } from '../services/menuicerik.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  states = [true,false,false,false];
  infoState = false;
  constructor(private router:Router,private service:MenuicerikService,private bildirimService:BildirimlerService) {}
  headerName = "Anasayfa";
  notificationState = true;
  bildirimler:any;
  bildirimSayisi = 0;
  ngOnInit(): void {
    this.bildirimler = this.bildirimService.getBildirimler();
    this.bildirimSayisi = this.bildirimler.length;
  }
  tabClick(i){
    for(let i=0;i<this.states.length; i++){
      this.states[i] = false;
    }
    this.states[i]=true;
    switch(i){
      case 0 : 
        this.router.navigateByUrl('/home/tabs/anasayfa');
        this.headerName ="Anasayfa";
        this.infoState = false;
        break;
      case 1 : 
        this.router.navigateByUrl('/home/tabs/bildirimler');
        this.headerName ="Bildirimler";
        this.notificationState=false;
        this.infoState = false;
        break;
      case 2 : 
        this.router.navigateByUrl('/home/tabs/kisayollar');
        this.headerName ="Kısa Yolları Düzenle";
        this.infoState = false;
        break;
      case 3 : 
        this.router.navigateByUrl('/home/tabs/profil');
        this.headerName ="Profil";
        this.infoState = false;
        break;
    }
  }
  menuButtonClick(){
    console.log("saldjkfh");
  }
  infoClick(){
    this.states = [false,false,false,false];
    this.infoState = true;
    this.headerName = "Kart Açıklamaları";
    this.router.navigateByUrl('/home/tabs/info');
  }
}
