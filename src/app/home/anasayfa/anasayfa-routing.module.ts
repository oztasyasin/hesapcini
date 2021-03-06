import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnasayfaPage } from './anasayfa.page';

const routes: Routes = [
  {
    path: '',
    component: AnasayfaPage
  },
  {
    path: 'satisfaturalari',
    loadChildren: () => import('./satisfaturalari/satisfaturalari.module').then( m => m.SatisfaturalariPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnasayfaPageRoutingModule {}
