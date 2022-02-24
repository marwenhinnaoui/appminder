import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MajparametrePage } from '../majparametre/majparametre.page';
import { ReclamationPage } from '../reclamation/reclamation.page';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    children:[
      {
        path: 'reclamation',
        component: ReclamationPage,
      },
      {
        path: 'parametre',
        component: MajparametrePage,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
