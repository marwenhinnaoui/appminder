import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProgressPageRoutingModule } from './progress-routing.module';
import { ProgressPage } from './progress.page';
// import { NavbarComponent } from '../navbar/navbar.component';
import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressPageRoutingModule,
    SwiperModule,
    ComponentsModule
  ],
  declarations: [ProgressPage]
})
export class ProgressPageModule {}
