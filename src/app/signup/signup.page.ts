import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { FeedBack } from '../models/feedback';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  feedback: FeedBack;
  constructor(private loadingCtrl: LoadingController,
    private alertCtrl: AlertController, private authService:


AuthService, private navCtrl: NavController) { }

  ngOnInit() { }
  async signup(form: any) {
    // Object ของ ฟอร์มทั้งหมดสามารถ log ออกมาดูได้ หรือจะส่งไปทั้ง Object ก็ได้เช่นกัน
    // console.log(form);
    // รับข้อมูลต่างๆมาจากฟอร์ม
    const fullname = form.fullname;
    const email = form.email;
    const password = form.password;
    // แสดง loading controller
    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'กำลังบันทึกข้อมูล...'
    });


    await loading.present();
    // เรียกใช้ service (AuthService) และ method signup
    this.authService.signup(fullname, email, password).subscribe(
      async (feedback: FeedBack) => {
        this.feedback = feedback; // รับค่าข้อมูล json จาก provider (Backend)
        if (this.feedback.status === 'ok') { // ถ้าสถานะเท่ากบ ั'ok' แสดงวาบันทึกข้อมูลเรียบร้อย
          const alert = await this.alertCtrl.create({
            message: this.feedback.message,
            buttons: ['ตกลง']
          });
          // console.log('signup successfully');
          await alert.present();

          // บันทึกเสร็จเรียบร้อยให้กลับหน้า Home
          this.navCtrl.navigateRoot('/home');
        } else { // ถ้าสถานะเท่ากบ ั'error' ให้ท างานและแสดงข้อความในส่วนนี
          const alert = await this.alertCtrl.create({
            message: this.feedback.message,
            buttons: ['ตกลง']
          });
          // console.log('signup error');
          await alert.present();
        }
      },


async (error) => {
        console.log(error);
        await loading.dismiss();
      },
      async () => {
        await loading.dismiss();
      }
    );
  }
}
