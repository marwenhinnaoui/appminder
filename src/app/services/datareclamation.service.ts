import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatareclamationService {
  reclamationList: any =[];
  constructor() { }
  setData(body){
    this.reclamationList.push(body);
  }
  getData(){
    return this.reclamationList;
  }
}
