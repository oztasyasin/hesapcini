import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterscreenPageRoutingModule } from './filterscreen-routing.module';

import { FilterscreenPage } from './filterscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterscreenPageRoutingModule
  ],
  declarations: [FilterscreenPage]
})
export class FilterscreenPageModule {}
