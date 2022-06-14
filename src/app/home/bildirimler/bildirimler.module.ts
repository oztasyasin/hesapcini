import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BildirimlerPageRoutingModule } from './bildirimler-routing.module';

import { BildirimlerPage } from './bildirimler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BildirimlerPageRoutingModule
  ],
  declarations: [BildirimlerPage]
})
export class BildirimlerPageModule {}
