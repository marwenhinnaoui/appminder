import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MajparametrePageRoutingModule } from './majparametre-routing.module';

import { MajparametrePage } from './majparametre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MajparametrePageRoutingModule
  ],
  declarations: [MajparametrePage]
})
export class MajparametrePageModule {}
