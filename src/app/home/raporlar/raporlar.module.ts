import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaporlarPageRoutingModule } from './raporlar-routing.module';

import { RaporlarPage } from './raporlar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaporlarPageRoutingModule
  ],
  declarations: [RaporlarPage]
})
export class RaporlarPageModule {}
