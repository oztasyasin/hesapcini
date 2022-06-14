import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SatisfaturalariPage } from './satisfaturalari.page';

const routes: Routes = [
  {
    path: '',
    component: SatisfaturalariPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SatisfaturalariPageRoutingModule {}
