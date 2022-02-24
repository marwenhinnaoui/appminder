import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { CalendarComponent } from '../calendar/calendar.component';
import { HomePageRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxCalendarModule } from 'igniteui-angular';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    IgxCalendarModule,
    ComponentsModule
  ],
  declarations: [HomePage, CalendarComponent]
})
export class HomePageModule {}
