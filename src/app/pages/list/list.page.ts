import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { DataService } from 'src/app/data.service';
import { ToastController } from '@ionic/angular';
import { ContactUtil } from 'src/app/utils/contact.util';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public contacts: Contact[];
  constructor(private service: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user.token'));
    this.service.getContacts(user).subscribe(
      (res: any) => {
        this.contacts = res;
        ContactUtil.saveContacts(this.contacts);
      },
      (err: any) => { }
    );
  }

}
