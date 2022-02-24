import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriquereclamationPageRoutingModule } from './historiquereclamation-routing.module';

import { HistoriquereclamationPage } from './historiquereclamation.page';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriquereclamationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HistoriquereclamationPage]
})
export class HistoriquereclamationPageModule {}
