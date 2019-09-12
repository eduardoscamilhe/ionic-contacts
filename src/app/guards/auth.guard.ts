import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CanActivate } from '@angular/router';
import { UserUtil } from '../utils/user.util';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private navCtrl: NavController) { }

    canActivate() {
        if (!UserUtil.getUser()) {
            this.navCtrl.navigateRoot('/login')
            return false
        }
        return true
    }
}