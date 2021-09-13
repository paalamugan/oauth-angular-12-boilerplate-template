import {
  FormControl,
  AbstractControl,
  FormGroup,
  NgForm,
  FormGroupDirective,
} from '@angular/forms';
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';

export function passValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
    const cnfpassValue = control.value;

    const passControl = control.root.get('password');
    if (passControl) {
      const passValue = passControl.value;
      if (passValue !== cnfpassValue || passValue === '') {
        return {
          passValidator: true,
        };
      }
    }
  }

  return null;
}
export class UsernameValidator {
  static validUsername(fc: FormControl) {
    if (fc.value.toLowerCase() === 'abc123' || fc.value.toLowerCase() === '123abc') {
      return { validUsername: true };
    } else {
      return null;
    }
  }
}
export function pincodeValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
    const regrex = new RegExp('^[0-9]{6}$');
    if (!regrex.test(control.value)) {
      return {
        isError: true,
      };
    }
  }
  return null;
}
export function forgetpassValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
    const cnfpassValue = control.value;

    const passControl = control.root.get('newPassword');
    if (passControl) {
      const passValue = passControl.value;
      if (passValue !== cnfpassValue || passValue === '') {
        return {
          passValidator: true,
        };
      }
    }
  }

  return null;
}
//   export class PasswordValidator {
//     // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
//     static areEqual(formGroup: FormGroup) {
//       let value;
//       let valid = true;
//       for (let key in formGroup.controls) {
//         if (formGroup.controls.hasOwnProperty(key)) {
//           let control: FormControl = <FormControl>formGroup.controls[key];

//           if (value === undefined) {
//             value = control.value
//           } else {
//             if (value !== control.value) {
//               valid = false;
//               break;
//             }
//           }
//         }
//       }

//       if (valid) {
//         return null;
//       }

//       return {
//         areEqual: true
//       };
//     }
//}
export var account_validation_messages = {
  companyname: [{ type: 'required', message: 'CompanyName is required' }],
  username: [
    { type: 'required', message: 'Username is required' },
    { type: 'minlength', message: 'Username must be at least 5 characters long' },
    { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
    { type: 'pattern', message: 'Your username must contain only letters' },
    { type: 'validUsername', message: 'Your username has already been taken' },
  ],
  email: [
    { type: 'required', message: 'Email is required' },
    { type: 'pattern', message: 'Enter a valid email' },
  ],
  confirm_password: [
    { type: 'required', message: 'Confirm password is required' },
    { type: 'passValidator', message: 'Password mismatch' },
  ],
  password: [
    { type: 'required', message: 'Password is required' },
    { type: 'minlength', message: 'Password must be at least 5 characters long' },
    {
      type: 'pattern',
      message: 'Your password must contain Uppercase and charactes and number Only',
    },
  ],
  address: [{ type: 'required', message: 'Address is required' }],
  phonenumber: [
    { type: 'required', message: 'phoneNumber is required' },
    { type: 'minlength', message: 'phoneNumber must be a 10 Digit long' },
    { type: 'pattern', message: 'Your phoneNumber must contain Numbers Only' },
  ],
  terms: [{ type: 'pattern', message: 'You must accept terms and conditions' }],
};
export var ForgetPassword_validation_messages = {
  temppassword: [{ type: 'required', message: 'Temporary Password is required' }],
  confirm_password: [
    { type: 'required', message: 'Confirm password is required' },
    { type: 'passValidator', message: 'Password is mismatch' },
  ],
  password: [
    { type: 'required', message: 'Password is required' },
    { type: 'minlength', message: 'Password must be at least 5 characters long' },
    {
      type: 'pattern',
      message: 'Your password must contain Uppercase and charactes and number Only',
    },
  ],
};
