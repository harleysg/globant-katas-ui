import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandComponent } from '../../components/atoms/brand/brand.component';
import { InputComponent } from '../../components/atoms/input/input.component';
import { compareControlsValidator, passwordValidator } from '@shared/validator'

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
  imports: [RouterLink, ReactiveFormsModule, BrandComponent, InputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
