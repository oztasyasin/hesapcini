import { Component, OnInit } from '@angular/core';
import { MenuicerikService } from 'src/app/services/menuicerik.service';

@Component({
  selector: 'app-kisayollar',
  templateUrl: './kisayollar.page.html',
  styleUrls: ['./kisayollar.page.scss'],
})
export class KisayollarPage implements OnInit {

  constructor(private service:MenuicerikService) { }
  pages=[];
  searchInput="";
  img = "assets/images/icon-banka.svg";
  ngOnInit() {
    this.pages = this.service.getPages();
  }
  menuClick(i){
    if(!this.pages[i].state){
      this.setMenuDefault();
      this.setSubmenuDefault(i);
      this.pages[i].state=true;
    }
    else{
      this.pages[i].state=false;
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
  submenuClick(child,i){
    child.isFavourite = !child.isFavourite;
    if(child.isFavourite){
      this.service.addFavori(child);
    }
    else{
      this.service.remove(child);
    }
    
  }
}
