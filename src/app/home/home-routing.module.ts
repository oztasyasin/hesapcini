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
      },
      {
        path: 'carilistesi',
        loadChildren: () => import('./carilistesi/carilistesi.module').then( m => m.CarilistesiPageModule)
      },
      {
        path: 'filterscreen',
        loadChildren: () => import('./filterscreen/filterscreen.module').then( m => m.FilterscreenPageModule)
      },
      {
        path: 'ceksenet',
        loadChildren: () => import('./ceksenet/ceksenet.module').then( m => m.CeksenetPageModule)
      },
      {
        path: 'caribilgileri',
        loadChildren: () => import('./caribilgileri/caribilgileri.module').then( m => m.CaribilgileriPageModule)
      },
      {
        path: 'satisfiyatlari',
        loadChildren: () => import('./satisfiyatlari/satisfiyatlari.module').then( m => m.SatisfiyatlariPageModule)
      },
      {
        path: 'sehirler',
        loadChildren: () => import('./sehirler/sehirler.module').then(m=>m.SehirlerPageModule),
      },
      {
        path: 'musteriekle',
        loadChildren: () => import('./musteriekle/musteriekle.module').then( m => m.MusterieklePageModule)
      },
      {
        path: 'proje',
        loadChildren: () => import('./proje/proje.module').then( m => m.ProjePageModule)
      },
      {
        path: 'raporlar',
        loadChildren: () => import('./raporlar/raporlar.module').then( m => m.RaporlarPageModule)
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
