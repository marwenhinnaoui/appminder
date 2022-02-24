import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isOpen=false;
  isStart=true;
  isStoped=null;
  timeHours=0;
  timeMinutes=0;
  timeSecond=0;
  timeTotal=22;
  secondStream=null;
  dateStartAligner=1;
  dateEndAligner=9;
  currentDay=new Date().getDate();

  constructor() {
  }


//Counter Progress
  startSecond(){
    const currentTime=new Date().getHours();
    console.log('Day',this.currentDay);
    if((this.currentDay >= this.dateStartAligner) && this.currentDay <= this.dateEndAligner){
    if(this.isStart && this.timeHours<this.timeTotal && (currentTime+this.timeTotal !==new Date().getHours())){
      this.secondStream=setInterval(_=>{
        if(this.timeHours<this.timeTotal){
          this.timeSecond++;
          if( this.timeSecond === 59){
            this.timeSecond=0;
            this.timeMinutes++;
          }else
          if( this.timeMinutes === 59){
            this.timeMinutes=0;
            this.timeHours++;
            if(this.timeHours<=1 && this.timeHours<10){
            document.getElementById('Progress_bar').style.background='#EB445A';
          }
            if(this.timeHours>=10 && this.timeHours<=21){
            document.getElementById('Progress_bar').style.backgroundColor='#FFC409';
          }
            if(this.timeHours===22){
            document.getElementById('Progress_bar').style.backgroundColor='#2DD36F';
          }
            document.getElementById('Progress_bar').style.width=`${(this.timeHours/this.timeTotal)*100}%`;
          }
          }
        },1000
        );
        this.isStart=false;
      }
    }
}
  start(){
    console.log('start');
    this.startSecond();
    }
  stop(){
      console.log('stop');
      console.log('Time is:' +this.timeHours);
      clearInterval(this.secondStream);
      this.isStart=true;
    }

    onNotification(){
      if(!this.isOpen){
        document.getElementById('Notification_modal_home').style.display='block';
        this.isOpen=!this.isOpen;
      }else{
        document.getElementById('Notification_modal_home').style.display='none';
        this.isOpen=!this.isOpen;
      }
    }
}
