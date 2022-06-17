import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarilistesiPage } from './carilistesi.page';

const routes: Routes = [
  {
    path: '',
    component: CarilistesiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarilistesiPageRoutingModule {}
