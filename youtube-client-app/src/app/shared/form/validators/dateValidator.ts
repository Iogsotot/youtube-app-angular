import { AbstractControl } from '@angular/forms';

export function dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const inputDate = control.value as string;

  if (!inputDate) {
    return null;
  }

  const datePattern2 =
    /^(?:\d{4})-(?:\d{2})-(?:\d{2})T(?:\d{2}):(?:\d{2}):(?:\d{2}(?:\.\d*)?)(?:(?:-(?:\d{2}):(?:\d{2})|Z)?)$/; // ISO 8061 date
  const datePattern3 =
    /^(?:(1[0-2]|0?[1-9])\/|.(3[01]|[12][0-9]|0?[1-9])|(3[01]|[12][0-9]|0?[1-9])\/|.(1[0-2]|0?[1-9]))\/|.(?:[0-9]{2})?[0-9]{2}$/; // any combinations of d, m, y with . or | delimiters

  const isValid =
    (datePattern2.test(inputDate) || datePattern3.test(inputDate)) &&
    new Date(inputDate).toString() !== 'invalid Date';

  return isValid ? null : { 'invalidDate': true };
}
