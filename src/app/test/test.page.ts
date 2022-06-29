import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverCComponent } from '../popover-c/popover-c.component';
@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(public popoverController: PopoverController) { }
 
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
    }
  ]
  state = false;
  bottom = 0;
  bottomStr = "0%";
  ngOnInit(): void {
    
  }
  async buttonClick(event:any){
    const popover = await this.popoverController.create({
      component: PopoverCComponent,
      cssClass: 'my-custom-class',
      componentProps: {data: "dsad"},
      event: event,
      translucent: true
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  options(){
    this.state=!this.state;
  }
  mainFrameClick(){
    console.log("main frame");
    
  }
  iconClick(){
    console.log("icon");
  }
  bottomValue(){
    this.bottom = this.bottom + 10
    this.bottomStr = this.bottom + "%";
  }
}
