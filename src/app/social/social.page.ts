import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { from } from 'rxjs';
@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  goToContact(){
    this.navCtrl.navigateForward(['/contact-s',
    {
      Social:'FACEBOOK:จัยส์กลาง ความรู้สึกดีๆ',
      ID:'na_1998',
      IG:'na_3186',
        }
    ]);
    // this.navCtrl.navigateForward('/contact-s');
    // this.navCtrl.navigateForward(['/contacth',{
    // }]);
  }

  goBack() {
    this.navCtrl.navigateRoot('home');
  }


}
