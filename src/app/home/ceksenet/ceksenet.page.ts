import { Component, OnInit } from '@angular/core';
import { CeksenetService } from 'src/app/services/ceksenet.service';

@Component({
  selector: 'app-ceksenet',
  templateUrl: './ceksenet.page.html',
  styleUrls: ['./ceksenet.page.scss'],
})
export class CeksenetPage implements OnInit {
  cekSenetTransList = [];
  constructor(private service:CeksenetService) { }
  
  ngOnInit() {
    this.cekSenetTransList = this.service.getcekSenetTransList();
  }

}
