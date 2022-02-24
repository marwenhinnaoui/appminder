import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendphotoPageRoutingModule } from './sendphoto-routing.module';

import { SendphotoPage } from './sendphoto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendphotoPageRoutingModule
  ],
  declarations: [SendphotoPage]
})
export class SendphotoPageModule {}
