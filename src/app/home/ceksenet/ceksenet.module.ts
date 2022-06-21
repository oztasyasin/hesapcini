import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeksenetPageRoutingModule } from './ceksenet-routing.module';

import { CeksenetPage } from './ceksenet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CeksenetPageRoutingModule
  ],
  declarations: [CeksenetPage]
})
export class CeksenetPageModule {}
