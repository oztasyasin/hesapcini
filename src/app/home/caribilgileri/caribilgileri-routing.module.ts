import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaribilgileriPage } from './caribilgileri.page';

const routes: Routes = [
  {
    path: '',
    component: CaribilgileriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaribilgileriPageRoutingModule {}
