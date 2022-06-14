import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SatisfisiPageRoutingModule } from './satisfisi-routing.module';

import { SatisfisiPage } from './satisfisi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SatisfisiPageRoutingModule
  ],
  declarations: [SatisfisiPage]
})
export class SatisfisiPageModule {}
