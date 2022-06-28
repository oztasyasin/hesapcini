import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FisService {
  fisler=[
    {
      cari: "Furkan Kadıoğlu Uzun Cari İsmi Test İçin",
      fisNo: '12B2131230000000',
      tarih: "20.04.2022",
      tutar: 540,
      faturaTipi: "Toptan Satış",
      ambar: "Merkez",
      searchText: ""
    },
    {
      cari: "Uğur Mert Demir",
      fisNo: '12B2131230000000',
      tarih: "01.03.2022",
      tutar: 784,
      faturaTipi: "Toptan Satış Iade",
      ambar: "Merkez",
      searchText: ""
    },
    {
      cari: "Berkan Şahin",
      fisNo: '12B2131230000000',
      tarih: "28.10.2022",
      tutar: 1846,
      faturaTipi: "Toptan Satış",
      ambar: "Merkez",
      searchText: ""

    },
    {
      cari: "Celalhan Dağlı",
      fisNo: '12B2131230000000',
      tarih: "23.12.2022",
      tutar: 1111,
      faturaTipi: "Toptan Satış",
      ambar: "Merkez",
      searchText: ""
    },
    {
      cari: "Alperen Kılıç",
      fisNo: '12B2131230000000',
      tarih: "03.04.2022",
      tutar: 9999,
      faturaTipi: "Toptan Satış",
      ambar: "Merkez",
      searchText: ""
    },
  ]
  constructor() { 
    for (let i = 0; i < this.fisler.length; i++) {
      var searchText = this.fisler[i].cari + " " +this.fisler[i].fisNo + " " +this.fisler[i].tarih + " " +this.fisler[i].tutar + " " +this.fisler[i].faturaTipi + " " +this.fisler[i].ambar;
      this.fisler[i].searchText = searchText;
    }
    console.log(this.fisler);
    
  }
  getFisler(){
    return this.fisler
  }
  removeFis(fis){
    this.fisler.splice(this.fisler.indexOf(fis),0);
    return this.fisler;
  }
  addNewFis(fis){
    this.fisler.push(fis);
    return this.fisler;
  }
  test(){
  
  }
  tarihleriKısalt(){
    this.fisler.forEach(fis => {
      let tarih = fis.tarih;
      let year = tarih.split('.')[2];
      let str = year.toString().split('')[2]+year.toString().split('')[3];
      fis.tarih = tarih.split('.')[0]+'.'+tarih.split('.')[1]+"."+str;
    });
    return this.fisler;
  }
}
