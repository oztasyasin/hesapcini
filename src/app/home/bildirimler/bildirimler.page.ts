import { Component, HostListener, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BildirimlerService } from 'src/app/services/bildirimler.service';
type CurrentPlatform = 'browser' | 'native';
@Component({
  selector: 'app-bildirimler',
  templateUrl: './bildirimler.page.html',
  styleUrls: ['./bildirimler.page.scss'],
})
export class BildirimlerPage implements OnInit {

  constructor(private bildirimService:BildirimlerService,private platform:Platform) { }
  bildirimler = [];
  width = window.innerWidth;
  panelWidthStr = "";
  bottomBarHeight = "";
  img = "assets/images/icon-malzeme.svg"
  favoriler = [];
  currentPlatform:CurrentPlatform;
  ngOnInit() {
    this.bildirimler = this.bildirimService.getBildirimler();
    this.setCurrentPlatform();
    this.getSizes();
  }
  bildirimClick(i){
    this.bildirimService.remove(i);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth;
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
    if(this.width>=600){
      width = width-120;
    }
    if(this.width%120==0){
      width = this.width-120;
    }
    this.panelWidthStr = width + "px";
    
  }
}
