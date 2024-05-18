import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
// -----
import { UserService } from '@shared/service/user/user.service';
import { SharedModule } from '@shared/shared.module';
import { HTMLInputTypes } from '@shared/types';

@Component({
  selector: 'auth-register',
  standalone: true,
  imports: [SharedModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.page.component.html',
  styleUrl: './register.page.component.scss'
})
export class RegisterPageComponent implements OnInit {
  public userData = [] as {
      key: string;
      value: string;
      type: HTMLInputTypes,
      accept?: string,
      control: FormControl
  }[]
  public form!: FormGroup<{}>
  private userService = inject(UserService)

  ngOnInit(): void {
    this.buildForm()
  }

  private buildForm(): void {
    const { form, userData } = this.userService.buildForm(false)

    this.form = form
    this.userData = userData
  }

  onChangeImage(file: string | ArrayBuffer | null) {
    if (!file) return

    this.form.get('photo')?.patchValue(file as never)
  }

  submit(): void {
    const value = this.form.value
    console.log('👨‍🚀 ~ LoginComponent ~ submit:', {
      isValid: this.form.valid,
      ...value
    })
  }
}
