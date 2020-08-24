import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-family',
  templateUrl: './family.page.html',
  styleUrls: ['./family.page.scss'],
})
export class FamilyPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  goToContact(){
    this.navCtrl.navigateForward(['/contact-f',
    {
      Family:'6 คน',
    }
    ]);
    // this.navCtrl.navigateForward('/contact-f');
    // this.navCtrl.navigateForward(['/contact้้้้h',{
    // }]);
  }

  goBack() {
    this.navCtrl.navigateRoot('/social');
  }


}
