import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatareclamationService } from '../services/datareclamation.service';

@Component({
  selector: 'app-historiquereclamation',
  templateUrl: './historiquereclamation.page.html',
  styleUrls: ['./historiquereclamation.page.scss'],
})
export class HistoriquereclamationPage implements OnInit {
  listSujet=null;
  isReply=false;
  constructor(
    private dataServices: DatareclamationService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.listSujet=this.dataServices.getData();
  }
  details(id: number){
    this.navCtrl.navigateForward('/detailreclamation/'+id);
  }
  navBack(){
    this.navCtrl.pop();
  }
}
