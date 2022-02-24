import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./navbottombar/navbottombar.module').then( m => m.NavbottombarPageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'sendphoto',
    loadChildren: () => import('./sendphoto/sendphoto.module').then( m => m.SendphotoPageModule)
  },
  {
    path: 'reclamation',
    loadChildren: () => import('./reclamation/reclamation.module').then( m => m.ReclamationPageModule)
  },
  {
    path: 'parametre',
    loadChildren: () => import('./majparametre/majparametre.module').then( m => m.MajparametrePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'historique',
    loadChildren: () => import('./historiquereclamation/historiquereclamation.module').then( m => m.HistoriquereclamationPageModule)
  },
  {
    path: 'detailreclamation/:id',
    loadChildren: () => import('./detailreclamation/detailreclamation.module').then( m => m.DetailreclamationPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
