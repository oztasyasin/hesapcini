import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BildirimlerPage } from './bildirimler.page';

const routes: Routes = [
  {
    path: '',
    component: BildirimlerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BildirimlerPageRoutingModule {}
