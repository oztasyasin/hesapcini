import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SatisfiyatlariPage } from './satisfiyatlari.page';

const routes: Routes = [
  {
    path: '',
    component: SatisfiyatlariPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SatisfiyatlariPageRoutingModule {}
