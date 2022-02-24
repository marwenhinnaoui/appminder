import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailreclamationPageRoutingModule } from './detailreclamation-routing.module';

import { DetailreclamationPage } from './detailreclamation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailreclamationPageRoutingModule
  ],
  declarations: [DetailreclamationPage]
})
export class DetailreclamationPageModule {}
