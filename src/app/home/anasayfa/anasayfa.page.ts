import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Platform} from '@ionic/angular';
import { MenuicerikService } from 'src/app/services/menuicerik.service';
type CurrentPlatform = 'browser' | 'native';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { getPageResize } from '../globalfonksiyon/global-fonksiyon';
@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.page.html',
  styleUrls: ['./anasayfa.page.scss'],
})
export class AnasayfaPage implements OnInit {
  width = window.innerWidth;
  panelWidthStr = "";
  bottomBarHeight = "";
  img = "assets/images/icon-malzeme.svg"
  favoriler = [];
  screenState = false;
  getWindowStyle = {
    width: "",
  };
  currentPlatform:CurrentPlatform;
  
  constructor(
      private platform:Platform, 
      private service:MenuicerikService, 
      private router:Router,
      private screenOrientation: ScreenOrientation
    ) { 
      this.screenOrientation.onChange().subscribe((e:any)=>{
        this.width = e.currentTarget.innerHeight
        this.getSizes();
      })
    }
  ngOnInit() {
    this.screenOrientation.unlock();
    this.favoriler = this.service.getFavoriler();
    this.setCurrentPlatform();
    this.getSizes();
  }
  
  setCurrentPlatform() {
    if (this.platform.is('ios')){
      this.bottomBarHeight = "51px";
      
    } else {
      this.bottomBarHeight = ""
    }
  }
  getSizes(){
    let width = this.width- (this.width%120);
    let screen = this.width;
    this.getWindowStyle = getPageResize(width,screen);
    document.body.style.setProperty('--my-var', this.getWindowStyle.width);
    
  }
  buttonClick(button:any){
    if(button.title=="Satış Faturaları"){
      this.router.navigateByUrl('/home/tabs/satisfaturalari');
      
    }
  }
  screen(){
   
  }
}
