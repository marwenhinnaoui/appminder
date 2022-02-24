import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclamationPageRoutingModule } from './reclamation-routing.module';

import { ReclamationPage } from './reclamation.page';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclamationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReclamationPage]
})
export class ReclamationPageModule {}
