import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// -----
import { SharedModule } from '@shared/shared.module';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { LoginFormControl } from '@shared/types';

@Component({
  selector: 'auth-home',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, SharedModule, NgTemplateOutlet],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss'
})
export class HomePageComponent {
  public formGroup!: FormGroup<LoginFormControl>
  private authService = inject(AuthenticationService)

  constructor() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required ])
    }, {
      validators: []
    })
  }

  submit(): void {
    if (this.formGroup.valid) {
      const { email, password } = this.formGroup.value
      this.authService.login({ email, password })
    }
  }
}
