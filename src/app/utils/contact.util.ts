import { Contact } from '../models/contact.model';


export class ContactUtil {
    constructor() { }

    static saveContacts(data: any[]) {
        localStorage.setItem('user.contacts', JSON.stringify(data));
    }
    static getAllContacts() {
        const contact = localStorage.getItem('user.contacts');
        return (!contact) ? [] : JSON.parse(contact);
    }
    static removeContact(contact: any) {
        let contacts = JSON.parse(localStorage.getItem('user.contacts'));
        let cont = contacts.indexOf(contact);
        contacts.splice(cont);
    }
    static addContact(contact: any) {
        const contacts = localStorage.getItem('user.contacts');
        let listContact = (!contacts) ? [] : JSON.parse(contacts);
        listContact.push(contact);
        this.saveContacts(listContact);
    }
}