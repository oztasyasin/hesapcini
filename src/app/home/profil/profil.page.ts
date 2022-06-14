import { Component, OnInit } from '@angular/core';
import { AbonelikService } from 'src/app/services/abonelik.service';
import { KullanicilarService } from 'src/app/services/kullanicilar.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(private abonelikService:AbonelikService, private kullanicilarService:KullanicilarService) { }
  abonelikler = [];
  kullanicilar = [];
  modalState = false;
  selectedUser: any;
  uyeSayisi = 0;
  selectedIndex = 0;
  frames=["Abonelik","Firma","Mail Servis Ayarları","Kullanıcılar ve Yetkileri"];
  selectedFrame = "Abonelik";
  ngOnInit() {
    this.abonelikler = this.abonelikService.getAbonelikler();
    this.kullanicilar = this.kullanicilarService.getUsers();
    this.uyeSayisi = this.kullanicilar.length;
  }
  userSelected(user){
    this.selectedUser = user;
    this.modalState = true;
    console.log(user);
    
  }
  removeUser(i){
    this.kullanicilar.splice(i,1);
    this.uyeSayisi = this.kullanicilar.length;
  }
  removeSelectedUser(user:any){
    this.kullanicilar.splice(this.kullanicilar.indexOf(user),1);
    this.uyeSayisi = this.kullanicilar.length;
    this.modalState = false;
  }
  back(){
    if(this.selectedIndex==0){
      this.selectedIndex = this.frames.length-1;
    }
    else{
      this.selectedIndex = this.selectedIndex-1;
    }
    this.selectedFrame = this.frames[this.selectedIndex];
  }
  forward(){
    if(this.selectedIndex==this.frames.length-1){
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex = this.selectedIndex + 1;
    }
    this.selectedFrame = this.frames[this.selectedIndex];
  }
}
