import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private screenOrientation:ScreenOrientation, private http:HttpClient ) { }
  logoSrc = "assets/images/hesapcini.png";
  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  ionViewWillEnter(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  register(){
    const model = {
      Mail: 'oztasyasin2558@hotmail.com',
      Password: 'Yasin.oztas40',
      Name: 'yasinoztasss',
      UserName: 'oztasyasinnn'
    }
    const header = {
      'Access-Control-Allow-Origin': 'http://localhost',
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"

    }
    this.http.post("http://192.168.1.132:5000/api/auth/register",model,{headers:header}).subscribe((data:any)=>{
      console.log(data);
      
    });
  }
}
