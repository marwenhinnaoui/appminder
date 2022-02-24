import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  image=null;
  isOpen=false;
  constructor() { }

  ngOnInit() {
  }
  onNotification(){
    if(!this.isOpen){
      document.getElementById('Notification_modal').style.display='block';
      this.isOpen=!this.isOpen;
    }else{
      document.getElementById('Notification_modal').style.display='none';
      this.isOpen=!this.isOpen;
    }
  }
}
