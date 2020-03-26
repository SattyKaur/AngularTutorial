import {AbstractControl, ValidationErrors} from '@angular/forms';


export class CustomValidators {

    static emailDomain(control: AbstractControl): ValidationErrors | null  {
        let email = control.value;
        let domain = email.substring(email.indexOf('@') + 1);
        if (email === '' || domain.toLocaleLowerCase() === 'sabintech.com') {
            return null;
        } else {
            return {emailDomain : true};
        }
    }

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).includes(' ')) {
            return { whitespace: true };
        }
        return null;
    }

    static uniqueUsername(control: AbstractControl): Promise <ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value === 'satty') {
                    resolve({uniqueUsername: true});
                } else {
                    resolve (null);
                }
            }, 2000);

        });
    }

}
