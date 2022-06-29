import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Platform} from '@ionic/angular';
import { KeyboardDetectionService } from './services/keyboard-detection.service';
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
  logo = 'assets/images/lgoyatayy.svg'
  pages = [];
  favoriler = [];
  img = "assets/images/icon-banka.svg"
  searchInput = ""
  constructor(private platform:Platform, private islemService:MenuicerikService, private router:Router, private keyboardService:KeyboardDetectionService, private cdr:ChangeDetectorRef) { }
  bottomBarHeight = "";
  submenuState = true;
  keyboardVisible = false;
  ngOnInit(): void {
    this.pages = this.islemService.getPages();
    this.favoriler = this.islemService.getFavoriler();
    if (this.platform.is('ios')){
      this.bottomBarHeight = "51px";
      
    } else {
      this.bottomBarHeight = "57px";
    }
    this.keyboardService.keyboardStatus.subscribe(e => {
      this.keyboardVisible = e;
      this.cdr.detectChanges();
    });
  }
  async ionViewDidEnter() {
    this.keyboardService.keyboardStatus.subscribe(e => {
     this.keyboardVisible = e;
     this.cdr.detectChanges();
   });
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
  goPage(item){
    console.log(item);
    
    this.router.navigate['login'];
  }
}
