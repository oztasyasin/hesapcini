import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular';
import { MenuicerikService } from './services/menuicerik.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  croppedLogo = 'assets/images/user.png';
  logoR = 'assets/images/logoyazisi.svg';
  logoL = 'assets/images/logoCircle.svg';
  pages = [];
  favoriler = [];
  img = "assets/images/icon-banka.svg"
  searchInput = ""
  constructor(private platform:Platform, private islemService:MenuicerikService) { }
  bottomBarHeight = "";
  submenuState = true;
  ngOnInit(): void {
    this.pages = this.islemService.getPages();
    this.favoriler = this.islemService.getFavoriler();
    if (this.platform.is('ios')){
      this.bottomBarHeight = "51px";
      
    } else {
      this.bottomBarHeight = "57px";
    }
  }
  textChange(text:any){
    this.searchInput = text;
    console.log("ksgdf");
    
  }
  setMenuDefault(){
    for(let i=0; i<this.pages.length; i++){
      this.pages[i].state = false;
    }
  }
  setSubmenuDefault(i){
    for(let j=0; j<this.pages[i].children.length; j++){
      this.pages[i].children[j].state = false;
    }
  }
  menuClick(i){
    if(!this.pages[i].state){
      this.setMenuDefault();
      this.pages[i].state=true;
    }
    else{
      this.pages[i].state=false;
    }
  }
  submenuClick(child,i){
    if(!child.state){
      this.setSubmenuDefault(i);
    }
    child.state = !child.state;
    console.log(child);
  }
  checkboxClick(){
    this.submenuState = !this.submenuState;
    this.islemService.setAllParentsState(this.submenuState);
  }
}
