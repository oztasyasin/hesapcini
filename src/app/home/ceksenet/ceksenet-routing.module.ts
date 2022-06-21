import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeksenetPage } from './ceksenet.page';

const routes: Routes = [
  {
    path: '',
    component: CeksenetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeksenetPageRoutingModule {}
