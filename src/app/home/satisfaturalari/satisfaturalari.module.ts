import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SatisfaturalariPageRoutingModule } from './satisfaturalari-routing.module';

import { SatisfaturalariPage } from './satisfaturalari.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SatisfaturalariPageRoutingModule
  ],
  declarations: [SatisfaturalariPage]
})
export class SatisfaturalariPageModule {}
