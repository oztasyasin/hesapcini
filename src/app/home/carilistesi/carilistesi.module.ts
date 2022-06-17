import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarilistesiPageRoutingModule } from './carilistesi-routing.module';

import { CarilistesiPage } from './carilistesi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarilistesiPageRoutingModule
  ],
  declarations: [CarilistesiPage]
})
export class CarilistesiPageModule {}
