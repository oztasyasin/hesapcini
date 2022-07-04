import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EklenmisurunlerService {

  eklenmisurunler=[
    {
      title:"Ürün1",
      miktar:2,
      fiyat:200,
      tutar:0,
      indirim:0,
      indirimOrani:0,
      promosyon:[
        {
          title: "urun123",
        }
      ],
      indirimler:[
        {
          miktar: 100,
          oran: 0,
        },
        {
          miktar: 50,
          oran: 0,
        },
      ]
    },
    {
      title:"Ürün2",
      miktar:1,
      fiyat:400,
      tutar:0,
      indirim:10,
      indirimOrani:0,
      promosyon:[
        {
          title: "urun123",
        }
      ],
      indirimler:[
        {
          miktar: 10,
          oran: 0,
        },
        {
          miktar: 10,
          oran: 0,
        },
      ]
    },
    {
      title:"Ürün3",
      miktar:3,
      fiyat:400,
      tutar:0,
      indirim:0,
      indirimOrani:0,
      promosyon:[
        {
          title: "urun123",
        },
        {
          title: "urun123",
        },
      ],
      indirimler:[
        
      ]
    },
    {
      title:"Ürün4",
      miktar:10,
      fiyat:90,
      tutar:0,
      indirim:0,
      indirimOrani:0,
      promosyon:[
        {
          title: "urun123",
        },
        {
          title: "urun123",
        },
        {
          title: "urun123",
        },
        {
          title: "urun123",
        },
        {
          title: "urun123",
        },
      ],
      indirimler:[
        {
          miktar: 10,
          oran: 0,
        },
        {
          miktar: 10,
          oran: 0,
        },
      ]
    },
    {
      title:"Ürün5",
      miktar:100,
      fiyat:40,
      tutar:0,
      indirim:23,
      indirimOrani:0,
      promosyon:[
        {
          title: "urun123",
        },
        {
          title: "urun123",
        },
      ],
      indirimler:[
        {
          miktar: 20,
          oran: 0,
        },
        {
          miktar: 10,
          oran: 0,
        },
      ]
    },
    {
      title:"Ürün6",
      miktar:1,
      fiyat:400,
      tutar:0,
      indirim:0,
      indirimOrani:0,
      promosyon:[
        {
          title: "urun123",
        },
        {
          title: "urun123",
        },
        {
          title: "urun123",
        },
      ],
      indirimler:[

      ]
    },
    {
      title:"Ürün7",
      miktar:1,
      fiyat:500,
      tutar:0,
      indirim:0,
      indirimOrani:0,
      promosyon:[
        {
          title: "urun123",
        },
        {
          title: "urun123",
        },
        {
          title: "urun123",
        },
        {
          title: "urun123",
        },
      ],
      indirimler:[]
    },
    {
      title:"Ürün8",
      miktar:1,
      fiyat:1100,
      tutar:0,
      indirim:0,
      indirimOrani:0,
      promosyon:[
        {
          title: "urun123",
        },
        {
          title: "urun123",
        },
        {
          title: "urun123",
        },
        {
          title: "urun123",
        },
        {
          title: "urun123",
        },
      ],
      indirimler:[
        {
          miktar: 20,
          oran: 0,
        },
        {
          miktar: 10,
          oran: 0,
        },
      ]
      
    },
    {
      title:"Ürün9",
      miktar:70,
      fiyat:40,
      tutar:0,
      indirim:0,
      indirimOrani:0,
      promosyon:[
        {
          title: "urun123",
        }
      ],
      indirimler:[
        {
          miktar: 20,
          oran: 0,
        },
        {
          miktar: 10,
          oran: 0,
        },
      ]
    },
    {
      title:"Ürün10",
      miktar:1,
      fiyat:27000,
      tutar:0,
      indirim:2000,
      indirimOrani:0,
      promosyon:[
        {
          title: "urun123",
        }
      ],
      indirimler:[
        {
          miktar: 1000,
          oran: 0,
        },
        {
          miktar: 400,
          oran: 0,
        },
      ]
    }
  ]
  taksitler=[];
  constructor() { }
  getUrunler(){
    return this.eklenmisurunler;
  }
  removeUrun(urun:any){
    this.eklenmisurunler.splice(this.eklenmisurunler.indexOf(urun),1);
    return this.eklenmisurunler;
  }
  removeIndirim(urun:any,indirim:any){
    urun.indirimler.splice(urun.indirimler.indexOf(indirim),1);
    this.getTotal();
  }
  removePromosyon(urun:any,promosyon:any){
    urun.promosyon.splice(urun.promosyon.indexOf(promosyon),1);
  }
  getTotal(){
    let total =0;
    this.eklenmisurunler.forEach(urun => {
      let maintutar = (urun.miktar*urun.fiyat);
      let toplamIndirim = 0;
      urun.indirimler.forEach(indirim => {
        let miktar = indirim.miktar;
        toplamIndirim += miktar;
        indirim.oran = Number.parseFloat((((indirim.miktar)/maintutar)*100).toPrecision(2));
      });
      urun.indirimOrani = Number.parseFloat((((urun.indirim)/maintutar)*100).toPrecision(2));
      urun.tutar = maintutar-toplamIndirim;
      total+=urun.tutar;
    });
    return total;
  }
  getTaksitler(count){
    let taksitOdemeTutari = this.getTotal()/count;
    for(let i=0; i<count; i++){
      this.taksitler.push(
        {
          taksit: i+1,
          tarih: "10.06.2022",
          hesap: "Merkez Kasa",
          taksitTutari: taksitOdemeTutari,
          tahsilEdilen: 0,
          tahsilatTarihi: "11.07.2022",
          state:false,
        }
      );
    }
    return this.taksitler;
  }
}
