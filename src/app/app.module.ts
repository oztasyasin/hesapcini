import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TextfilterPipe } from './textfilter.pipe';
// import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { HttpClientModule  } from '@angular/common/http';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
@NgModule({
  declarations: [AppComponent, TextfilterPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ScreenOrientation,HttpClientModule,Keyboard],
  bootstrap: [AppComponent],
})
export class AppModule {}

