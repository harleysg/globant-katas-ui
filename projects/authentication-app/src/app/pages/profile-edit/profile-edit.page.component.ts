import { Component, ElementRef, OnInit, inject, viewChild } from '@angular/core';
import { JsonPipe, Location, NgTemplateOutlet } from '@angular/common';
import { FormArray, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// -----
import { SharedModule } from '@shared/shared.module';
// -----
const TYPES = {
  TEXTAREA: 'textArea',
  BUTTON: 'button',
  CHECKBOX: 'checkbox',
  COLOR: 'color',
  DATE: 'date',
  DATETIME_LOCAL: 'datetime-local',
  EMAIL: 'email',
  FILE: 'file',
  HIDDEN: 'hidden',
  IMAGE: 'image',
  MONTH: 'month',
  NUMBER: 'number',
  PASSWORD: 'password',
  RADIO: 'radio',
  RANGE: 'range',
  RESET: 'reset',
  SEARCH: 'search',
  SUBMIT: 'submit',
  TEL: 'tel',
  TEXT: 'text',
  TIME: 'time',
  URL: 'url',
  WEEK: 'week',
} as const
type Types = typeof TYPES[keyof typeof TYPES]
/**
 * Login Flow / Payload
 */
export type EditFormControl = {
  photo: FormArray,
  name: FormArray,
  bio: FormArray,
  phone: FormArray,
  email: FormArray,
  password: FormArray
}
// -----
@Component({
  selector: 'auth-profile-edit',
  standalone: true,
  imports: [
    RouterLink,
    NgTemplateOutlet,
    ReactiveFormsModule,
    SharedModule,
    JsonPipe
  ],
  templateUrl: './profile-edit.page.component.html',
  styleUrl: './profile-edit.page.component.scss'
})
export class ProfileEditPageComponent implements OnInit {
  private location = inject(Location)
  private formBuilder = inject(FormBuilder)
  public imageRef = viewChild<ElementRef>('imageRef')
  public controls: {
      name: string;
      control: FormControl;
      type: Types,
      accept?: string
  }[] = []
  public userData = [
    {type: TYPES.TEXT, accept: "image/*", key: 'photo', value: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'},
    {type: TYPES.TEXT, key: 'name', value: 'Alma Sofia Santos Soto'},
    {type: TYPES.TEXTAREA, key: 'bio', value: 'I am little baby closing to arrive to this world... I`m exiting to know my parents, thay are a software developer and a big fan of devchallenges'},
    {type: TYPES.TEXT, key: 'phone', value: '3502342343'},
    {type: TYPES.TEXT, key: 'email', value: 'almaSofiaSS@gmail.com'},
    {type: TYPES.PASSWORD, key: 'password', value: '123456'},
  ] as {
      key: string;
      value: string;
      type: Types,
      accept?: string,
      control: FormControl;
  }[]
  public form = this.formBuilder.group({})

  ngOnInit(): void {
    this.buildForm()
  }

  private buildForm(): void {
    for (const [index, {key, value, type, accept}] of this.userData.entries()) {
      const required = Validators.required
      const validator: ValidatorFn[] | null = []
      const notRequired = ['photo', 'bio', 'phone']
      
      if (!notRequired.includes(key)) {
        validator.push(required)
      }

      this.form.addControl(key, this.formBuilder.control(value, validator))

      this.controls.push({
        name: key,
        control: this.formBuilder.control(value, validator),
        type: type as Types,
        accept
      })
      this.userData[index].control = this.formBuilder.control(value, validator)
    }
  }

  submit(): void {
    if (this.form.valid) {}

    const value = this.form.value
    console.log('👨‍🚀 ~ LoginComponent ~ submit:', {
      isValid: this.form.valid,
      ...value
    })
  }

  back(): void {
    this.location.back()
  }
  
  onChangeImage($event: Event) {
    const _this = this
    const { target } = $event as InputEvent
    const { files } = target as HTMLInputElement
    const image = this.imageRef()?.nativeElement
    const reader = new FileReader();

    if (!files && !files?.[0]) return

    reader.onload = function (event) {
      const currentTarget = event?.currentTarget as FileReader
      image.src = currentTarget.result?.toString() || '';
      _this.form.get('photo')?.patchValue(currentTarget.result as never)
    }
    reader.readAsDataURL(files[0]);
  }
}
