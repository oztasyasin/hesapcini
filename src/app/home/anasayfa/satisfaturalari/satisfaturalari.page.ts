import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverCComponent } from 'src/app/popover-c/popover-c.component';
import { PopoverPage } from 'src/app/popover/popover.page';
import { FisService } from 'src/app/services/fis.service';

@Component({
  selector: 'app-satisfaturalari',
  templateUrl: './satisfaturalari.page.html',
  styleUrls: ['./satisfaturalari.page.scss'],
})
export class SatisfaturalariPage implements OnInit {

  constructor(private fisService:FisService,public popoverController: PopoverController,private router:Router) { }
  fisler = [];
  popOverState = false;
  selectedFis:any;
  searchInput = "";
  selectionStates = [];
  widths=[];
  opacities = [];
  placeHolderIndex = 0;
  outFrames=[];
  width = "0%";
  placeHolders=["Fiş No","Müşteri Adı","Tutar","Tarih","Ambar","Fatura Tipi"]
  gonderState = false;
  popoverData=[
    {
      title:"Düzenle",
      icon:"pencil",
    },
    {
      title:"Sil",
      icon:"trash",
    },
    {
      title: "İptal Et",
      icon: "close",
    },
    {
      title: "Pdf Yazdır",
      icon: "document-text",
    },
    {
      title: "Pdf Gönder",
      icon: "send",
    },
    {
      title: "Mail Gönder",
      icon: "mail"
    },
    {
      title: "Mail Gönder",
      icon: "mail"
    },
    {
      title:"Sil",
      icon:"trash",
    },
    {
      title: "İptal Et",
      icon: "close",
    },
    {
      title: "Pdf Yazdır",
      icon: "document-text",
    },
    {
      title: "Pdf Gönder",
      icon: "send",
    },
    {
      title: "Mail Gönder",
      icon: "mail"
    },
    {
      title: "Mail Gönder",
      icon: "mail"
    },
    {
      title:"Sil",
      icon:"trash",
    },
    {
      title: "İptal Et",
      icon: "close",
    },
    {
      title: "Pdf Yazdır",
      icon: "document-text",
    },
    {
      title: "Pdf Gönder",
      icon: "send",
    },
    {
      title: "Mail Gönder",
      icon: "mail"
    },
    {
      title: "Mail Gönder",
      icon: "mail"
    },
    {
      title:"Sil",
      icon:"trash",
    },
    {
      title: "İptal Et",
      icon: "close",
    },
    {
      title: "Pdf Yazdır",
      icon: "document-text",
    },
    {
      title: "Pdf Gönder",
      icon: "send",
    },
    {
      title: "Mail Gönder",
      icon: "mail"
    },
    {
      title: "Mail Gönder",
      icon: "mail"
    },
    {
      title:"Sil",
      icon:"trash",
    },
    {
      title: "İptal Et",
      icon: "close",
    },
    {
      title: "Pdf Yazdır",
      icon: "document-text",
    },
    {
      title: "Pdf Gönder",
      icon: "send",
    },
    {
      title: "Mail Gönder",
      icon: "mail"
    },
    {
      title: "Mail Gönder",
      icon: "mail"
    },
    {
      title:"Sil",
      icon:"trash",
    },
    {
      title: "İptal Et",
      icon: "close",
    },

  ]
  ngOnInit() {
    this.fisler = this.fisService.getFisler();
    for(let i =0; i<this.fisler.length; i++ ){
      this.selectionStates.push(false);
      this.widths.push("95%");
      this.opacities.push("1");
      this.outFrames.push("-100%");
    }
    console.log(this.selectionStates);
    
  }
  textChange(text:any){
    this.searchInput = text;
  }
  setAllDefault(){
    for(let i=0; i<this.selectionStates.length; i++){
      // this.widths[i] = "0%";
      // this.opacities[i] = "0";
      this.outFrames[i]="-100%";
    }
  }
  async settingsClick(event:any,i){
  // // settingsClick(i){
    if(this.outFrames[i]== "5%"){
      this.outFrames[i]="-100%";
      // this.widths[i] = "0%";
      // this.opacities[i] = "0";
      // 
    }
    else{
      this.setAllDefault();
      this.outFrames[i]="5%";
      // this.widths[i] = "95%";
      // this.opacities[i] = "1";
    }
    console.log(this.widths[i]);
    
    

  }
  async openSettingsMenu(event,fis){
    const popover = await this.popoverController.create({
      component: PopoverPage,
      cssClass: 'hc-popover',
      componentProps: {data: this.popoverData},
      event: event,
      translucent: true
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  back(){
    if(this.placeHolderIndex!=0){
      this.placeHolderIndex--;
    }
    else{
      this.placeHolderIndex = this.placeHolders.length-1;
    }
  }
  forward(){
    if(this.placeHolderIndex!=this.placeHolders.length-1){
      this.placeHolderIndex++;
    }
    else{
      this.placeHolderIndex = 0;
    }
  }
  bottomButtonClick(){
    this.router.navigateByUrl('/home/tabs/satisfisi');
  }
  settingsClcik(){
    console.log("settings");
    
  }
  middleClick(){
    console.log("middle");
    
  }
}
