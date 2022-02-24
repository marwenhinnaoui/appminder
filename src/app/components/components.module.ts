import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';



@NgModule({
  declarations:[NotificationComponent, ],
  exports:[NotificationComponent, ]
})

export class ComponentsModule {}
