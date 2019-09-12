import { FormControl } from '@angular/forms';

export class CustomValidator {
    static EmailValidator(code: FormControl) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

        if (!re.test(code.value))
            return { "ERROR!": true }
        return null;
    }
    static PasswordValidator(code: FormControl) {
        //Minimum eight characters, at least one letter, one number and one special character:
        const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

        if (!re.test(code.value))
            return { "ERROR!": true }
        return null;
    }


}