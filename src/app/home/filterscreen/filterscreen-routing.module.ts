import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterscreenPage } from './filterscreen.page';

const routes: Routes = [
  {
    path: '',
    component: FilterscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterscreenPageRoutingModule {}
