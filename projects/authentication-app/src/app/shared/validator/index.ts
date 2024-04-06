import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null

    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    const minimumLength = /^.{6,}/.test(value);
    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && minimumLength;

    return !passwordValid ? {
      passwordStrength: {
        hasUpperCase,
        hasLowerCase,
        hasNumeric,
        minimumLength
      }
    } : null;
  }
}

export function compareControlsValidator(firstControl: string, secoundControl: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.get(firstControl)?.value === control.get(secoundControl)?.value) {
      return null
    } else {
      return { notSame: true }
    }

  }
}

export function userNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null

    const passwordValid = /^(?=.*[A-Za-z])(?=.*\w)[A-Za-z\w]{6,}$/.test(value);

    return !passwordValid ? { usernameStrength: true } : null;
  }
}

export function newPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null

    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(value);

    return !passwordValid ? { passwordStrength: true } : null;
  }
}