import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contact } from './models/contact.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) { }

    createUser(user: any) {
        return this.http.post(`${environment.url}user/create`, user);
    }

    auth(user: any) {
        return this.http.post(`${environment.url}user/auth`, user);
    }

    getContacts(user: any) {
        return this.http.get(`${environment.url}contact/get`);
    }

}