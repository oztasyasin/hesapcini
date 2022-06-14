import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(private router:Router,private screenOrientation:ScreenOrientation) { }
  logoSrc = "assets/images/logo.svg";
  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    // setTimeout(() => {
    //   this.router.navigateByUrl('/login');
    // }, 3000);
  }
  ionViewWillEnter(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 3000);
  }

}
