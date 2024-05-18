import { Component, OnInit, inject } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// -----
import { SharedModule } from '@shared/shared.module';
import { HTMLInputTypes, UserInfo } from '@shared/types';
import { UserService } from '@shared/service/user/user.service';

@Component({
  selector: 'auth-profile-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, SharedModule],
  templateUrl: './profile-edit.page.component.html',
  styleUrl: './profile-edit.page.component.scss'
})
export class ProfileEditPageComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private location = inject(Location)
  private userService = inject(UserService)
  public userData = [] as {
      key: string;
      value: string;
      type: HTMLInputTypes,
      accept?: string,
      control: FormControl;
  }[]
  public form!: FormGroup<{}>

  public user?: UserInfo

  ngOnInit(): void {
    this.readUserData()
  }

  private readUserData() {
    this.route.data.subscribe(response => {
      this.user = response['profile']

      if (!this.user) return

      this.buildForm(this.user)
    })
  }

  private buildForm(user: UserInfo): void {
    let { form, userData } = this.userService.buildForm(true, user)

    this.form = form
    this.userData = userData
  }

  submit(): void {
    const value = this.form.value
    console.log('👨‍🚀 ~ LoginComponent ~ submit:', {
      isValid: this.form.valid,
      ...value
    })
  }

  back(): void {
    this.location.back()
  }

  onChangeImage(file: string | ArrayBuffer | null) {
    if (!file) return

    this.form.get('photo')?.patchValue(file as never)
  }
}
