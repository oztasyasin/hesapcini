import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjePage } from './proje.page';

const routes: Routes = [
  {
    path: '',
    component: ProjePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjePageRoutingModule {}
