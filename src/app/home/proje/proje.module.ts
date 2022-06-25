import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjePageRoutingModule } from './proje-routing.module';

import { ProjePage } from './proje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjePageRoutingModule
  ],
  declarations: [ProjePage]
})
export class ProjePageModule {}
