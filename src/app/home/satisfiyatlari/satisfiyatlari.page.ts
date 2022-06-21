import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-satisfiyatlari',
  templateUrl: './satisfiyatlari.page.html',
  styleUrls: ['./satisfiyatlari.page.scss'],
})
export class SatisfiyatlariPage implements OnInit {

  constructor() { }
  popoverData=[
    {
      title:"Düzenle",
      icon:"pencil",
    },
    {
      title:"Düzenle",
      icon:"pencil",
    },
    
    {
      title:"Düzenle",
      icon:"pencil",
    },
    
    
    {
      title:"Düzenle",
      icon:"pencil",
    },
  ]
  ngOnInit() {
  }

}
