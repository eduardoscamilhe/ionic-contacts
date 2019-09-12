export class ContactUtil {
    constructor() { }

    static saveContacts(data: any[]) {
        localStorage.setItem('user.contacts', JSON.stringify(data));
    }

    static removeContact(contact: any) {
        let contacts = JSON.parse(localStorage.getItem('user.contacts'));
        let cont = contacts.indexOf(contact);
        contacts.splice(cont);
    }
    static addContact(contact: any) {
        let contacts = JSON.parse(localStorage.getItem('user.contacts'));
        contacts.push(contact);
        this.saveContacts(contacts);
    }
}