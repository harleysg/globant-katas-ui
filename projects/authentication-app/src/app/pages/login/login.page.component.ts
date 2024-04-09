import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { compareControlsValidator, passwordValidator } from '@shared/validator';

/**
 * Login Flow / Payload
 */
export type LoginFormControl = {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'auth-login',
  standalone: false,
  templateUrl: './login.page.component.html',
  styleUrl: './login.page.component.scss'
})
export class LoginPageComponent {
  public formLoginGroup!: FormGroup<LoginFormControl>

  constructor() {
    const formGroupConfig = {
      validators: [
        // compareControlsValidator('password', 'confirmPassword')
      ]
    }
    const controls = {
      email: new FormControl('', [
        Validators.required,
        // TODO: emailValidator()
      ]),
      password: new FormControl('', [
        Validators.required,
        // passwordValidator()
        // TODO: passwordValidator()
      ])
    }
    this.formLoginGroup = new FormGroup(controls, formGroupConfig)
  }

  submit(): void {
    if (this.formLoginGroup.valid) {}

    const { email, password } = this.formLoginGroup.value
    console.log('👨‍🚀 ~ LoginComponent ~ submit:', {
      isValid: this.formLoginGroup.valid,
      email, password
    })
  }
}
