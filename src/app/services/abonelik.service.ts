import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbonelikService {
  abonelikler=[
    {
      title: "1 Aylık Abonelik",
      icon: "gift",
      baslangicTarihi: "01.01.2020",
      bitisTarihi: "01.01.2022",
      fiyat: 0,
      state: false,
    },
    {
      title: "Hesapcini Ön Muhasebe / 1 Ay",
      icon: "card",
      baslangicTarihi: "01.01.2020",
      bitisTarihi: "01.01.2022",
      fiyat: 55,
      state: false,
    }
    ,
    {
      title: "Hesapcini Ön Muhasebe / 2 Ay",
      icon: "card",
      baslangicTarihi: "01.01.2020",
      bitisTarihi: "01.01.2022",
      fiyat: 100,
      state: true,
    }
    ,
    {
      title: "Hesapcini Ön Muhasebe / 3 Ay",
      icon: "card",
      baslangicTarihi: "01.01.2020",
      bitisTarihi: "01.01.2022",
      fiyat: 150,
      state: false,
    }
    ,
    {
      title: "Hesapcini Ön Muhasebe / 4 Ay",
      icon: "card",
      baslangicTarihi: "01.01.2020",
      bitisTarihi: "01.01.2022",
      fiyat: 200,
      state: false,
    }
  ]
  constructor() { }
  getAbonelikler(){
    return this.abonelikler;
  }
}
