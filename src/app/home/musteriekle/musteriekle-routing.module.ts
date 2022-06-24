import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusterieklePage } from './musteriekle.page';

const routes: Routes = [
  {
    path: '',
    component: MusterieklePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusterieklePageRoutingModule {}
