import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
// -----
import { HTMLInputTypes, TYPES, UserInfo } from '@shared/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private formBuilder = inject(FormBuilder)
  private userData = [
    {type: TYPES.TEXT, accept: "image/*", key: 'photo', value: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'},
    {type: TYPES.TEXT, key: 'name', value: 'Alma Sofia Santos Soto'},
    {type: TYPES.TEXTAREA, key: 'bio', value: 'I am little baby closing to arrive to this world... I`m exiting to know my parents, thay are a software developer and a big fan of devchallenges'},
    {type: TYPES.TEXT, key: 'phone', value: '3502342343'},
    {type: TYPES.TEXT, key: 'email', value: 'almaSofiaSS@gmail.com'},
    {type: TYPES.PASSWORD, key: 'password', value: '123456'},
  ] as {
      key: string;
      value: string;
      type: HTMLInputTypes,
      accept?: string,
      control: FormControl;
  }[]
  private form = this.formBuilder.group({})

  public buildForm(setValues = true, user?: UserInfo) {
    for (const {key, value} of this.userData) {
      const required = Validators.required
      const validator: ValidatorFn[] | null = []
      const notRequired = ['photo', 'bio', 'phone']

      if (!notRequired.includes(key)) {
        validator.push(required)
      }

      if (key === 'email' && user?.email) {
        this.form.addControl(key, this.formBuilder.control(setValues ? user?.email : '', validator))
      }
      else if (key === 'name' && user?.name) {
        this.form.addControl(key, this.formBuilder.control(setValues ? user?.name : '', validator))
      }
      else if (key === 'password' && user?.password) {
        this.form.addControl(key, this.formBuilder.control(setValues ? user?.password : '', validator))
      } else {
        this.form.addControl(key, this.formBuilder.control(setValues ? value : '', validator))
      }
    }

    return {
      userData: this.userData,
      form: this.form
    }
  }
}
