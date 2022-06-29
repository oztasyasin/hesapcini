import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyboardDetectionService {
  keyboardStatus: Subject<boolean> = new Subject<boolean>();

  constructor(private platform: Platform) {
    window.addEventListener('keyboardDidShow', event => {
      this.keyboardStatus.next(true);
    });
    window.addEventListener('keyboardDidHide', event => {
      this.keyboardStatus.next(false);
    });
  }
}
