import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children:[
      {
        path: 'anasayfa',
        loadChildren: () => import('./anasayfa/anasayfa.module').then( m => m.AnasayfaPageModule)
      },
      {
        path: 'ayarlar',
        loadChildren: () => import('./ayarlar/ayarlar.module').then( m => m.AyarlarPageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
      },
      {
        path: 'bildirimler',
        loadChildren: () => import('./bildirimler/bildirimler.module').then( m => m.BildirimlerPageModule)
      },
      {
        path: 'kisayollar',
        loadChildren: () => import('./kisayollar/kisayollar.module').then( m => m.KisayollarPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./anasayfa/anasayfa.module').then( m => m.AnasayfaPageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
      },
      {
        path: 'satisfisi',
        loadChildren: () => import('./satisfisi/satisfisi.module').then( m => m.SatisfisiPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/anasayfa',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
