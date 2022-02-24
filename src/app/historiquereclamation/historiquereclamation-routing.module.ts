import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriquereclamationPage } from './historiquereclamation.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriquereclamationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriquereclamationPageRoutingModule {}
