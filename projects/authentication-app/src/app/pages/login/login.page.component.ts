import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    const controls = {
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    }
    this.formLoginGroup = new FormGroup(controls)
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
