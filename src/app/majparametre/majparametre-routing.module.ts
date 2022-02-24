import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MajparametrePage } from './majparametre.page';

const routes: Routes = [
  {
    path: '',
    component: MajparametrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MajparametrePageRoutingModule {}
