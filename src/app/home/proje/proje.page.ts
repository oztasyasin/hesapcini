import { Component, OnInit } from '@angular/core';
import { FisService } from 'src/app/services/fis.service';

@Component({
  selector: 'app-proje',
  templateUrl: './proje.page.html',
  styleUrls: ['./proje.page.scss'],
})
export class ProjePage implements OnInit {

  constructor(private fisService:FisService) { }
  states = [false,false,false,false];
  fisler = [];
  ngOnInit() {
    this.fisler = this.fisService.tarihleriKısalt();
  }
  satislarClick(){
    this.states[0] = !this.states[0];
  }
  alislarClick(){
    this.states[1] = !this.states[1];
  }
  tahsilatlarClick(){
    this.states[2] = !this.states[2];
  }
  odemelerClick(){
    this.states[3] = !this.states[3];
  }
}
