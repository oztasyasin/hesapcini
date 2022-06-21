import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carilistesi',
  templateUrl: './carilistesi.page.html',
  styleUrls: ['./carilistesi.page.scss'],
})
export class CarilistesiPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  cariClick(){
    this.router.navigateByUrl('/home/tabs/caribilgileri')
  }
}
