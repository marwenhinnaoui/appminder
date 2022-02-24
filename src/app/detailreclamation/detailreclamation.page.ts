import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DatareclamationService } from '../services/datareclamation.service';
@Component({
  selector: 'app-detailreclamation',
  templateUrl: './detailreclamation.page.html',
  styleUrls: ['./detailreclamation.page.scss'],
})
export class DetailreclamationPage implements OnInit {
  id: string;
  recObjet: any;
  constructor(
    private navCtrl: NavController,
    private dataServ: DatareclamationService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.recObjet = this.dataServ.getData();
    console.log('This:',this.recObjet[this.id]);
  }
  navBack(){
    this.navCtrl.pop();
  }
}
