import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SehirlerPageRoutingModule } from './sehirler-routing.module';

import { SehirlerPage } from './sehirler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SehirlerPageRoutingModule
  ],
  declarations: [SehirlerPage]
})
export class SehirlerPageModule {}
