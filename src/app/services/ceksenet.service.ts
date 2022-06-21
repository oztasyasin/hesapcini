import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CeksenetService {
  cekSenetTransList=[
    {
      status: 'Kendi Çekimiz',
      dateTime: '22.10.2021',
      trCode: 'Çek Çıkış(Cari Hesaba)',
      clientId: 'Yeni Kayıt Carisi',
      bankAccountId: 'cüneyt bsmv'
    },
    {
      status: 'Tahsil Edildi',
      dateTime: '22.10.2021',
      trCode: 'Çek Ödemesi',
      clientId: 'Yeni Kayıt Carisi',
      bankAccountId: 'cüneyt bsmv' 
    }
  ]
  constructor() { }
  getcekSenetTransList(){
    return this.cekSenetTransList;
  }
  remove(cek){
    this.cekSenetTransList.slice(this.cekSenetTransList.indexOf(cek));
  }
  add(cek){
    this.cekSenetTransList.push(cek);
  }
}
