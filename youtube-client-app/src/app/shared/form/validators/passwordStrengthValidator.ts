import { AbstractControl } from '@angular/forms';

export function passwordStrengthValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const value = control.value as string;
  if (!value) {
    return null;
  }

  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumeric = /[0-9]/.test(value);
  const hasSpecial = /[!@#?$%^&*№]/.test(value);
  const hasMinLength = value.length >= 8;

  const isValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecial && hasMinLength;

  return isValid ? null : { passwordStrength: true };
}
