import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ReclamationPage } from '../reclamation/reclamation.page';
import { SendphotoPage } from '../sendphoto/sendphoto.page';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'sendphoto',
        component: SendphotoPage,
      },
      {
        path: 'reclamation',
        component: ReclamationPage,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
