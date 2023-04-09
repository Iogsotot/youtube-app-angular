/* eslint-disable class-methods-use-this */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { urlValidator } from '../../shared/form/validators/urlValidator';
import { dateValidator } from '../../shared/form/validators/dateValidator';

@Component({
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  createCardForm!: FormGroup;

  descriptionHint: string =
    'Use a description that is at least 8 characters long ' +
    'and includes a combination of uppercase and lowercase letters, numbers, ' +
    'and special characters - !@#?$%^&*№';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createCardForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', [Validators.maxLength(255)]],
      image: ['', [Validators.required, urlValidator]],
      linkVideo: ['', [Validators.required, urlValidator]],
      creationDate: ['', [Validators.required, dateValidator]],
    });
  }

  onSubmit(): void {
    // create new card (push this card to cards[])
  }

  getErrorMessage(type: string): string {
    if (type === 'title') {
      if (this.createCardForm.get('title')?.hasError('required')) return 'Please enter a title';

      if (this.createCardForm.get('title')?.hasError('minlength')) return 'The title is too short';

      return this.createCardForm.get('title')?.hasError('maxlength') ? 'The title is too long' : '';
    }

    if (type === 'description') {
      return this.createCardForm.get('description')?.hasError('maxlength')
        ? 'The description is too long'
        : '';
    }

    if (type === 'image') {
      if (this.createCardForm.get('image')?.hasError('required')) return 'Please enter a title';

      return this.createCardForm.get('image')?.hasError('invalidUrl')
        ? 'The image link is invalid'
        : '';
    }

    if (type === 'linkVideo') {
      if (this.createCardForm.get('linkVideo')?.hasError('required'))
        return 'Please enter a link to the video';

      return this.createCardForm.get('linkVideo')?.hasError('invalidUrl')
        ? 'The video link is invalid'
        : '';
    }

    if (type === 'creationDate') {
      if (this.createCardForm.get('creationDate')?.hasError('required'))
        return 'Please enter a creation date';

      return this.createCardForm.get('creationDate')?.hasError('invalidDate')
        ? 'The date is invalid'
        : '';
    }

    return 'you do smth wrong';
  }
}
