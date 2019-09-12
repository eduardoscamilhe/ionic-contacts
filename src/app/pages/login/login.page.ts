import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { UserUtil } from 'src/app/utils/user.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: DataService,
    private loadCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    const user = UserUtil.getUser();
    if (user) this.navCtrl.navigateRoot('/');
  }

  async submit() {
    const load = await this.loadCtrl.create({ message: "Autenticando...", duration: 1000 });
    load.present();

    UserUtil.setUser('token');
    this.navCtrl.navigateRoot('');

    // this.service.auth(this.form.value).subscribe(
    //   (res: any) => {
    //     load.dismiss();
    //     UserUtil.setUser(res);
    //     this.navCtrl.navigateRoot('');
    //   },
    //   (err: any) => {
    //     this.showError('Erro ao autenticar')
    //   }
    // );
  }
  async showError(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Fechar'
    });
    toast.present();
  }

}
