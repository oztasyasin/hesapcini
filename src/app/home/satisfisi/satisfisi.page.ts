import { Component, OnInit } from '@angular/core';
import { EklenmisurunlerService } from 'src/app/services/eklenmisurunler.service';

@Component({
  selector: 'app-satisfisi',
  templateUrl: './satisfisi.page.html',
  styleUrls: ['./satisfisi.page.scss'],
})
export class SatisfisiPage implements OnInit {

  constructor(private urunlerService:EklenmisurunlerService) { }
  img = "assets/images/icon-malzeme.svg"
  urunler = [];
  total =0;
  taksitler=[];
  taksitState = false;
  outFrames=[];
  selectedState = false;
  urunState = false;
  ngOnInit() {
    this.urunler = this.urunlerService.getUrunler();
    console.log(this.total);
    this.urunlerService.getTotal();
  }
  setAllDefault(){
    for(let i=0; i<this.taksitler.length; i++){
      this.outFrames[i]="-100%";
    }
  }
  optionsMenuClick(i){
    if(this.outFrames[i]== "10%"){
      this.outFrames[i]="-100%";

    }
    else{
      this.setAllDefault();
      this.outFrames[i]="10%";
    }
  }
  tahsilEt(taksit){
    this.outFrames[this.taksitler.indexOf(taksit)] = "-399px";
    taksit.state = true;
  }
  removeIndirim(urun:any,indirim:any){
    this.urunlerService.removeIndirim(urun,indirim);
    
  }
  removePromosyon(urun:any,promosyon:any){
    this.urunlerService.removePromosyon(urun,promosyon);
  }
  removeUrun(urun:any){
    this.urunlerService.removeUrun(urun);
    // this.urunler.splice(this.urunler.indexOf(urun),1);
  }
  getTaksitler(){
    console.log(this.urunler);
    
    this.taksitler = this.urunlerService.getTaksitler(5);
    for(let i=0; i<this.taksitler.length; i++){
      this.outFrames.push("-100%")
    }
    this.taksitState = !this.taksitState;
  }
}
