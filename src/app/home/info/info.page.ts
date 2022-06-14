import { Component, HostListener, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { MenuicerikService } from 'src/app/services/menuicerik.service';
type CurrentPlatform = 'browser' | 'native';
@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private pageService:MenuicerikService,private platform:Platform) { }
  width = window.innerWidth;
  panelWidthStr = "";
  bottomBarHeight = "";
  pages = [];
  searchInput = "";
  img = "assets/images/icon-malzeme.svg";
  selectedKartTxt = "";
  ngOnInit() {
    this.pages = this.pageService.getPages();
    this.setCurrentPlatform();
    this.getSizes();
  }
  textChange(text:any){
    this.searchInput = text;
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
  buttonClick(selectedCard){
    setTimeout(() => {
      if(selectedCard.activeText== selectedCard.title){ 
        this.pageService.setAllcardsTextDefault()
        selectedCard.activeText = selectedCard.description;
      }
      else{
        selectedCard.activeText = selectedCard.title;
      }
    }, 280);
  }
  
}
