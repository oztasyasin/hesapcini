import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuicerikService {
  pages = [
    {
      title: 'Müşteri ve Tedarikçi',
      state: true,
      children: [
        {
          title: 'Müşteri ve Tedarikçiler',
          state: false,
          isFavourite: true,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Müşteri Tedarikçi Fişleri',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Borç Alacak Durum Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Borçlu Cari Hesaplar Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Alacaklı Cari Hesaplar Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'İşlemler Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Aylık Özet Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        }
      ]
    },
    {
      title: 'Ürün ve Hizmet',
      state: true,
      children: [
        {
          title: 'Ürün Kartları',
          state: false,
          isFavourite: true,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Verilen Hizmet Kartları',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Alınan Hizmet/Masraf Kartları',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Extre Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'İşlemler Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Verilen Hizmet/Masraf Extre Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        }
      ]
    },
    {
      title: 'Satışlar (Gelirler',
      state: true,
      children: [
        {
          title: 'Satış Faturaları',
          state: false,
          isFavourite: true,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Verilen Hizmet Faturaları',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Satış Faturaları Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Ayrıntılı Satış Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Verilen Hizmetler Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        }
      ]
    },
    {
      title: 'Alışlar (Giderler)',
      state: true,
      children: [
        {
          title: 'Alış Faturaları',
          state: false,
          isFavourite: true,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Alınan Hizmet/Masraf Fişleri',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Alış Faturaları Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Alınan Hizmet/Masraf Fişleri',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Alış Faturaları Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Alınan Hizmetler Faturaları',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        }
        ,
        {
          title: 'Ayrıntılı Satın Alma Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        }
      ]
    },
    {
      title: 'E-Faturalar',
      state: true,
      children: [
        {
          title: 'Gelenler',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Gidenler',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        }
      ]
    },
    {
      title: 'Kasa Banka ÇekSeneter',
      state: true,
      children: [
        {
          title: 'Kasa',
          state: false,
          isFavourite: true,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Banka Hesapları',
          state: false,
          isFavourite: true,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Çek ve Senet İşlemleri',
          state: false,
          isFavourite: true,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Kasa Ekstre Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Banka Hesapları Ekstre Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Çek Senet Ekstre Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        }
        ,
        {
          title: 'Ayrıntılı Tahsilat Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        }
        ,
        {
          title: 'Ayrıntılı Ödeme Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        }
      ]
    },
    {
      title: 'Sipariş',
      state: true,
      children: [
        {
          title: 'Satış Siparişleri',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Alış Siparişleri',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Satış Siparişleri Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Alış Siparişleri Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        }
      ]
    },
    {
      title: 'Stok',
      state: true,
      children: [
        {
          title: 'Satış İrsaliyeleri',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Alış İrsaliyeleri',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Ambar Toplamları Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Giriş Çıkış Toplamları Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Malzemeler Değer Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        }
      ]
    },
    {
      title: 'Personel',
      state: true,
      children: [
        {
          title: 'Personeller',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        }
      ]
    },
    {
      title: 'Proje Yönetimi',
      state: true,
      children: [
        {
          title: 'Projeler',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        }
      ]
    },
    {
      title: 'Raporlar',
      state: true,
      children: [
        {
          title: 'KDV Raporu',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        }
      ]
    },
    {
      title: 'Tanımlamalar',
      state: true,
      children: [
        {
          title: 'Satış Fiyatı',
          state: false,
          isFavourite: true,
          description: "Kart Açıklaması",
          activeText: ""
        },
        {
          title: 'Alış Fiyatı',
          state: false,
          isFavourite: false,
          description: "Kart Açıklaması",
          activeText: ""
        },
      ]
    },
  ];
  favoriIslemler=[];
  constructor() {
    for(let i=0; i<this.pages.length; i++){
      for(let j=0; j<this.pages[i].children.length; j++){
        if(this.pages[i].children[j].isFavourite){
          this.addFavori(this.pages[i].children[j]);
        }
        this.pages[i].children[j].activeText = this.pages[i].children[j].title;
      }
    }
  }
  getPages(){
    return this.pages;
  }
  setAllParentsState(state){
    for(let i =0; i<this.pages.length; i++){
      this.pages[i].state = state;
    }
  }
  addFavori(islem:any){
    console.log(islem);
    
    this.favoriIslemler.push(islem);
  }
  getFavoriler(){
    return this.favoriIslemler;
  }
  remove(islem:any){
    let i = this.favoriIslemler.indexOf(islem);
    this.favoriIslemler.splice(i,1);
  }
  setAllChilDefault(){
    for(let i=0; i<this.pages.length; i++){
      for(let j=0; j<this.pages[i].children.length; j++){
        this.pages[i].children[j].state = false;
      }
    }
  }
  setAllcardsTextDefault(){
    for(let i=0; i<this.pages.length; i++){
      for(let j=0; j<this.pages[i].children.length; j++){
        this.pages[i].children[j].activeText = this.pages[i].children[j].title;
      }
    }
  }
}