import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbottombarPage } from './navbottombar.page';

const routes: Routes = [
  {
    path: '',
    component: NavbottombarPage,
    children: [
  {
    path:'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule),
  },
  {
    path:'progress',
    loadChildren: () => import('../progress/progress.module').then( m => m.ProgressPageModule),
  },
  {
    path:'feedback',
    loadChildren: () => import('../feedback/feedback.module').then( m => m.FeedbackPageModule),
  },
  {
    path:'chat',
    loadChildren: () => import('../chat/chat.module').then( m => m.ChatPageModule),
  },
  {
    path:'profile',
    loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule),
  },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavbottombarPageRoutingModule {}
