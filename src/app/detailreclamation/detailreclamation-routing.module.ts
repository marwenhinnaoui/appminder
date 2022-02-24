import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailreclamationPage } from './detailreclamation.page';

const routes: Routes = [
  {
    path: '',
    component: DetailreclamationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailreclamationPageRoutingModule {}
