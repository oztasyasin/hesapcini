import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KullanicilarService {
  kullanicilar = [
    {
      name: "kullanici1",
      firmaAdi: "firma1",
      yetki: "yönetici",
      mail: "kullanici1@outlook.com",
      mailOnay: true,
      telefon: "12234421",
    },
    {
      name: "kullanici2",
      firmaAdi: "firma2",
      yetki: "kullanıcı",
      mail: "kullanici2@outlook.com",
      mailOnay: false,
      telefon: "12234421",
    },
    {
      name: "kullanici3",
      firmaAdi: "firma3",
      yetki: "kullanıcı",
      mail: "kullanici3@outlook.com",
      mailOnay: false,
      telefon: "12234421",
    },
    {
      name: "kullanici4",
      firmaAdi: "firma4",
      yetki: "kullanıcı",
      mail: "kullanici4@outlook.com",
      mailOnay: true,
      telefon: "12234421",
    },
    {
      name: "kullanici5",
      firmaAdi: "firma5",
      yetki: "kullanıcı",
      mail: "kullanici5@outlook.com",
      mailOnay: false,
      telefon: "12234421",
    },
    {
      name: "kullanici6",
      firmaAdi: "firma6",
      yetki: "kullanıcı",
      mail: "kullanici6@outlook.com",
      mailOnay: false,
      telefon: "12234421",
    }
  ]
  constructor() { }
  getUsers(){
    return this.kullanicilar;
  }
}
