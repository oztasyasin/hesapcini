import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BorcService {
  borclar = [
    {
      borc: 128736,
      alacak: 123,
      bakiye:0,
    },
    {
      borc: 10000,
      alacak: 2000,
      bakiye:0,
    },
    {
      borc: 1200000,
      alacak: 10200,
      bakiye:0,
    },
    {
      borc: 2000,
      alacak: 100000,
      bakiye:0,
    },
    {
      borc: 12000,
      alacak: 14000,
      bakiye:0,
    },
    {
      borc: 100,
      alacak: 1000,
      bakiye:0,
    },
    {
      borc: 1000,
      alacak: 500,
      bakiye:0,
    },
    {
      borc: 10000,
      alacak: 15000,
      bakiye:0,
    },
    {
      borc: 100,
      alacak: 101,
      bakiye:0,
    },
    {
      borc: 101,
      alacak: 100,
      bakiye:0,
    },
    {
      borc: 128736,
      alacak: 123,
      bakiye:0,
    },
  ]
  cariIslemler=[
    {
      title: 'Cek Girişi',
      fisno: '12B5EC0000000000',
      tarih: '00.00.00',
    }
  ]
  constructor() {
    this.borclar.forEach(borc => {
      borc.bakiye = Math.abs(borc.alacak - borc.borc)
    });
   }
  getborclar(){
    return this.borclar;
  }
}
