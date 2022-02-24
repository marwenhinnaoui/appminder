import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { NavbottombarPageRoutingModule } from './navbottombar-routing.module';

import { NavbottombarPage } from './navbottombar.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavbottombarPageRoutingModule,
  ],
  declarations: [NavbottombarPage]
})
export class NavbottombarPageModule {}
