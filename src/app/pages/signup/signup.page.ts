import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ToastController, AlertController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';
import { CustomValidator } from 'src/app/custom.validator';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private loadCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private service: DataService) {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, CustomValidator.EmailValidator])],
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, CustomValidator.PasswordValidator])]
    });
  }

  ngOnInit() {
  }
  async submit() {
    const load = await this.loadCtrl.create({ message: "Estamos criando...", duration: 1000 });
    load.present();

    this.navCtrl.navigateRoot('login');
    // this.service.createUser(this.form.value).subscribe(
    //   (res: any) => {
    //     load.dismiss();
    //     this.navCtrl.navigateRoot('login');
    //   },
    //   (err: any) => {
    //     load.dismiss();
    //     this.showError('Sinto muito... Mas não deu para criar');

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
