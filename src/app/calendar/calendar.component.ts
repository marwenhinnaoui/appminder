import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  days=[];
  monthLength=null;
  currentMounth=new Date().getMonth();
  currentDay=new Date().getDate();
  constructor() { }
  ngOnInit() {
    console.log('Month'+this.currentMounth);
    console.log('Month'+this.currentDay);

    switch (this.currentMounth) {
      case 0:this.monthLength=31;
        break;
      case 1:this.monthLength=28;
        break;
    }
    for(let i=1; i<=this.monthLength;i++){
      this.days[i-1]=i;
    }
    console.log(this.days.length);
    this.days.forEach(day => {
      console.log(day);
    });

  }

}
