import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// -----
import { compareControlsValidator, passwordValidator } from '@shared/validator'
import { SharedModule } from '@shared/shared.module';

/**
 * Login Flow / Payload
 */
export type LoginFormControl = {
  email: FormControl,
  password: FormControl,
  confirmPassword: FormControl,
}

@Component({
  selector: 'auth-home',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, SharedModule],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss'
})
export class HomePageComponent {
  public formLoginGroup!: FormGroup<LoginFormControl>

  constructor() {
    const formGroupConfig = {
      validators: [
        compareControlsValidator('password', 'confirmPassword')
      ]
    }
    const controls = {
      email: new FormControl('', [
        Validators.required,
        // TODO: emailValidator()
      ]),
      password: new FormControl('', [
        Validators.required,
        passwordValidator()
        // TODO: passwordValidator()
      ]),
      confirmPassword: new FormControl('', [
        Validators.required
      ]),
    }
    this.formLoginGroup = new FormGroup(controls, formGroupConfig)
  }
}
