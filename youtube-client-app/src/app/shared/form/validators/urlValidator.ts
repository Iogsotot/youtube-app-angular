import { AbstractControl } from '@angular/forms';

export function urlValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const inputURL = control.value as string;
  if (!inputURL) {
    return null;
  }
  
  const urlPattern = /^(www|ftp:|http:|https:)+[^\s]+[\w]/;
  const isValid = urlPattern.test(control.value);

  return isValid ? null : { 'invalidUrl': true };
}
