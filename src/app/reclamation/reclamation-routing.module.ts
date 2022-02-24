import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReclamationPage } from './reclamation.page';

const routes: Routes = [
  {
    path: '',
    component: ReclamationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReclamationPageRoutingModule {}
