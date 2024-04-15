import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// -----
import { SharedModule } from '@shared/shared.module';

/**
 * Login Flow / Payload
 */
export type LoginFormControl = {
  email: FormControl,
  password: FormControl
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
      validators: []
    }
    const controls = {
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    }
    this.formLoginGroup = new FormGroup(controls, formGroupConfig)
  }

  submit(): void {
    if (this.formLoginGroup.valid) {}

    const { email, password } = this.formLoginGroup.value
    console.log('👨‍🚀 ~ HomePageComponent ~ submit:', {
      isValid: this.formLoginGroup.valid,
      email, password
    })
  }
}
