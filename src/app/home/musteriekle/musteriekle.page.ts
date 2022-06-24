import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musteriekle',
  templateUrl: './musteriekle.page.html',
  styleUrls: ['./musteriekle.page.scss'],
})
export class MusterieklePage implements OnInit {

  constructor() { }
  toggleState = true;
  stateText = "Aktif";
  segment = "musteri"
  radioValue = "kurumsal"
  sorumlular = [
    {
      name:""
    }
  ];
  ngOnInit() {
  }
  toggleChange(){
    this.toggleState = !this.toggleState;
    if(this.toggleState){
      this.stateText = "Aktif";
    }
    else{
      this.stateText = "Pasif";
    }
  }
  sorumluEkle(){
    const newSorumlu = {
      name: "",
    }
    this.sorumlular.push(newSorumlu)
  }
}
