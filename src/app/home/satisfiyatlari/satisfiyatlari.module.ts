import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SatisfiyatlariPageRoutingModule } from './satisfiyatlari-routing.module';

import { SatisfiyatlariPage } from './satisfiyatlari.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SatisfiyatlariPageRoutingModule
  ],
  declarations: [SatisfiyatlariPage]
})
export class SatisfiyatlariPageModule {}
