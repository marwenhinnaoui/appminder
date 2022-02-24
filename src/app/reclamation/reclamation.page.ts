import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DatareclamationService } from '../services/datareclamation.service';
@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.page.html',
  styleUrls: ['./reclamation.page.scss'],
})
export class ReclamationPage implements OnInit {
  isValid=false;
  isValidSujet=false;
  isClicked=false;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  static recId=0;
  id=null;
  constructor(
    private alertController: AlertController,
    private dataServices: DatareclamationService,
    private navCtrl: NavController,
    ) { }
  ngOnInit() {
    console.log('id',ReclamationPage.recId);
    this.id=ReclamationPage.recId;
  }
  navBack(){
    this.navCtrl.pop();
  }
  onInputChange(event: any){
    if(event !== ''){
      this.isValid=true;
    }else{
      this.isValid=!this.isValid;
    }
  }

  onInputDescChange(event: any){
    if(event !== ''){
      this.isValidSujet=true;
    }else{
      this.isValidSujet=!this.isValidSujet;
    }
  }

  async onAlert(){
    if(this.isValid){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        message: 'Réclamation envoyé',
      });
      await alert.present();
    }
    }
    sendData(id, sujet, description, doctorReply){
      this.dataServices.setData({id, sujet, description, doctorReply});
      this.navCtrl.navigateForward('/historique');
      ReclamationPage.recId++;
      console.log(ReclamationPage.recId);
    }

}
