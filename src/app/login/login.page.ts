import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { KeyboardDetectionService } from '../services/keyboard-detection.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  footerVisible = true;
  keyboardVisible = false;
  constructor(private screenOrientation: ScreenOrientation,private keyboard:Keyboard, private keyboardService: KeyboardDetectionService, private cdr:ChangeDetectorRef) {
    keyboard.onKeyboardDidShow().subscribe((data:any)=>{
      this.footerVisible=false
    })
    keyboard.onKeyboardDidHide().subscribe((data:any)=>{
      this.footerVisible=true
    })
   }
  logoSrc = "assets/images/logo.svg";
  async ionViewDidEnter() {
     this.keyboardService.keyboardStatus.subscribe(e => {
      this.keyboardVisible = e;
      this.cdr.detectChanges();
    });
  }
  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  ionViewWillEnter() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
}
