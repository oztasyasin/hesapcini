import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KisayollarPage } from './kisayollar.page';

const routes: Routes = [
  {
    path: '',
    component: KisayollarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KisayollarPageRoutingModule {}
