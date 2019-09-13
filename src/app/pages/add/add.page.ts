import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Address } from 'src/app/models/address.model';
import { Contact } from 'src/app/models/contact.model';
import { ContactUtil } from 'src/app/utils/contact.util';
import { NavController, LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  public form: FormGroup;
  @Input() editContact: Contact;

  constructor(private fb: FormBuilder, private navCtrl: NavController, private toastCtrl: ToastController) {
    this.form = this.fb.group({
      name: [!this.editContact ? '' : `${this.editContact.name}`, Validators.required],
      cpf: [!this.editContact ? '' : `${this.editContact.cpf}`],
      email: [!this.editContact ? '' : `${this.editContact.email}`],
      phone: [!this.editContact ? '' : `${this.editContact.phone}`, Validators.required],
      street: [!this.editContact ? '' : `${this.editContact.address.street}`],
      country: [!this.editContact ? '' : `${this.editContact.address.country}`],
      number: [!this.editContact ? '' : `${this.editContact.address.number}`],
      state: [!this.editContact ? '' : `${this.editContact.address.state}`],
      city: [!this.editContact ? '' : `${this.editContact.address.city}`],
      neighborhood: [!this.editContact ? '' : `${this.editContact.address.neighborhood}`],
      profile: [!this.editContact ? '' : `${this.editContact.profile}`]

    });
  }

  ngOnInit() {


  }
  async submit() {

    const listContacts = ContactUtil.getAllContacts();

    const contact = new Contact(
      (listContacts.length + 1),
      this.form.controls['name'].value,
      this.form.controls['email'].value,
      this.form.controls['cpf'].value,
      this.form.controls['phone'].value,
      'https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      //this.form.controls['profile'].value,
      new Address(
        this.form.controls['country'].value,
        this.form.controls['state'].value,
        this.form.controls['city'].value,
        this.form.controls['neighborhood'].value,
        this.form.controls['street'].value,
        this.form.controls['number'].value
      ));
    ContactUtil.addContact(contact);

    this.navCtrl.navigateRoot('');

    const load = await this.toastCtrl.create(
      {
        message: `${this.form.controls['name'].value} inserido na sua agenda!`, duration: 1500
      });
    load.present();
  }

}
