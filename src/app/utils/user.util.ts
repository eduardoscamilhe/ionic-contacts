export class UserUtil {

    static setUser(user: any) {

        localStorage.setItem('user', JSON.stringify(user));
    }
    static getUser(): any {
        const user = localStorage.getItem('user');
        return (!user) ? null : JSON.parse(user);
    }

    static cleanUser() {
        localStorage.removeItem('user');
    }
}