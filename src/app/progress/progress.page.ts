import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import { Swiper } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  @ViewChild('swiper') swiper: SwiperComponent;
  isOpen=false;
  alignerIndex=0;
  alignerIndexClick=0;
  isSwiper=null;
  progressValue=0;
  alignersArray = Array.from({ length: 5 });

  constructor() {
  }
  ngOnInit() {
  }
  onSwiper() {
    this.alignerIndex= this.swiper.swiperRef.realIndex;
    console.log(this.alignerIndex);
    this.isSwiper=true;
  }
  swiperPrev(){
    if(this.alignerIndex > 0){
      this.isSwiper=false;

    this.swiper.swiperRef.slidePrev();
    this.alignerIndexClick--;
    }
  }
  swiperNext(){

    if(this.alignerIndex < this.alignersArray.length-1){
      this.isSwiper=false;
      this.swiper.swiperRef.slideNext();
      this.alignerIndexClick++;
    }
  }
  onNotification(){
    if(!this.isOpen){
      document.getElementById('Notification_modal_progress').style.display='block';
      this.isOpen=!this.isOpen;
    }else{
      document.getElementById('Notification_modal_progress').style.display='none';
      this.isOpen=!this.isOpen;
    }
  }

}
