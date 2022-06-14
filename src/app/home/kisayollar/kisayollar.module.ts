import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KisayollarPageRoutingModule } from './kisayollar-routing.module';

import { KisayollarPage } from './kisayollar.page';
import { TextfilterPipe } from 'src/app/textfilter.pipe';
import { FilterPipe } from './filter.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KisayollarPageRoutingModule
  ],
  declarations: [KisayollarPage,TextfilterPipe, FilterPipe]
})
export class KisayollarPageModule {}
