import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaribilgileriPageRoutingModule } from './caribilgileri-routing.module';

import { CaribilgileriPage } from './caribilgileri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaribilgileriPageRoutingModule
  ],
  declarations: [CaribilgileriPage]
})
export class CaribilgileriPageModule {}
