import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  isOpen=false;
  constructor() { }

  ngOnInit() {
  }
  onNotification(){
    if(!this.isOpen){
      document.getElementById('Notification_modal_profile').style.display='block';
      this.isOpen=!this.isOpen;
    }else{
      document.getElementById('Notification_modal_profile').style.display='none';
      this.isOpen=!this.isOpen;
    }
  }

}
