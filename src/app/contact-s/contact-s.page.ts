import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-s',
  templateUrl: './contact-s.page.html',
  styleUrls: ['./contact-s.page.scss'],
})
export class ContactSPage implements OnInit {

  Social:String;
  IG:string;
  ID:string;

  constructor(private navCtrl:NavController,private route: ActivatedRoute) { 
    this.Social=this.route.snapshot.paramMap.get('Social');
    this.IG=this.route.snapshot.paramMap.get('IG');
    this.ID=this.route.snapshot.paramMap.get('ID');
  }

  ngOnInit() {
  }

  goHome() {
    this.navCtrl.navigateRoot('/home');
  }


}
