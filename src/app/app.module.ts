import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { DatareclamationService } from './services/datareclamation.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent, ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },DatareclamationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
