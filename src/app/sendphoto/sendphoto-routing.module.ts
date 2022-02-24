import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendphotoPage } from './sendphoto.page';

const routes: Routes = [
  {
    path: '',
    component: SendphotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendphotoPageRoutingModule {}
