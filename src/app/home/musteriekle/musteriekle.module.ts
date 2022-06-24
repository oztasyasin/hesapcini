import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusterieklePageRoutingModule } from './musteriekle-routing.module';

import { MusterieklePage } from './musteriekle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusterieklePageRoutingModule
  ],
  declarations: [MusterieklePage]
})
export class MusterieklePageModule {}
