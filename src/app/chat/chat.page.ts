import { Component, OnInit } from '@angular/core';
import { isThisISOWeek } from 'date-fns';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  isValid=false;
  inputMessage=null;
  messageArrayClient=[];
  messageArrayDoctor=[
    {
      id:0,
      name:'Doctor',
      content:'Test Message',
    },
    {
      id:1,
      name:'Doctor',
      content:'Test Message 2',
    }
  ];
  index=0;
  indexDoctor=0;
  inputMessageRemote=null;
  constructor() { }

  ngOnInit() {
  }
  onMsgChange(e: any){
    if(e!== ''){
      this.isValid=true;
    }else{
      this.isValid=false;
    }
    this.inputMessage=e;
  }
  onClickSend(){
    this.messageArrayClient[this.index]=this.inputMessage;
    this.index++;
    console.log(this.messageArrayClient);
  }
}
