import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { from } from 'rxjs';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  goToContact(){
    this.navCtrl.navigateForward(['/contact-a',
  {
    Address:'16 ม.8 ต.ทุ่งนารี อ.ป่าบอน จ.พัทลุง 93170',
  }
  ]);
    // this.navCtrl.navigateForward(['/contacth',{
    // }]);
  }

  goBack() {
    this.navCtrl.navigateRoot('/family');
  }


}
