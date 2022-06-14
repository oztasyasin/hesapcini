import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SatisfisiPage } from './satisfisi.page';

const routes: Routes = [
  {
    path: '',
    component: SatisfisiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SatisfisiPageRoutingModule {}
