import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
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
  imports: [RouterLink, ReactiveFormsModule, SharedModule, NgTemplateOutlet],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss'
})
export class HomePageComponent {
  public formGroup!: FormGroup<LoginFormControl>

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
    this.formGroup = new FormGroup(controls, formGroupConfig)
  }

  submit(): void {
    if (this.formGroup.valid) {}

    console.log('👨‍🚀 ~ HomePageComponent ~ submit:', {
      isValid: this.formGroup.valid,
      value: this.formGroup.value
    })
  }
}
