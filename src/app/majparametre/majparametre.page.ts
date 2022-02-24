import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-majparametre',
  templateUrl: './majparametre.page.html',
  styleUrls: ['./majparametre.page.scss'],
})
export class MajparametrePage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  dateValue = '';
  rangeValue=22;
  color='#000';
  constructor() { }

  ngOnInit() {
  }
  onRangerChange(event: any){
    this.rangeValue=event;
  }
  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }
}
