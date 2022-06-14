import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BildirimlerService {
  bildirimler=[
    {
      tip: false,
      price: 200,
      days: 2,
      description: "Personel ödemesi"
    },
    {
      tip: true,
      price: 1000,
      days: 3,
      description: "Müşteri tahsilat"
    },
    {
      tip: true,
      price: 800,
      days: 2,
      description: "Müşteri tahsilat"
    },
    {
      tip: false,
      price: 300,
      days: 1,
      description: "Fatura giderleri"
    }
  ]
  constructor() { }
  getBildirimler(){
    return this.bildirimler;
  }
  remove(i){
    this.bildirimler.splice(i,1);
  }
}
