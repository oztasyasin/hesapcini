import { Component, OnInit } from '@angular/core';
import { BorcService } from 'src/app/services/borc.service';

@Component({
  selector: 'app-raporlar',
  templateUrl: './raporlar.page.html',
  styleUrls: ['./raporlar.page.scss'],
})
export class RaporlarPage implements OnInit {

  constructor(private service:BorcService) { }
  borclar = [];
  rapor = false;
  ngOnInit() {
    this.borclar = this.service.getborclar();
  }

}
