import { FormControl, FormArray } from '@angular/forms'

/**
 * =====================================================
 * ============================ Authentication
 * =====================================================
 */

export type LoginResponse = {
  access_token: string,
  refresh_token: string
}

export type LoginQueryBody = {
  email: string,
  password: string
}

export type LoginFormControl = {
  email: FormControl,
  password: FormControl
}

/**
 * =====================================================
 * ============================ User
 * =====================================================
 */

export type UserInfo = {
  id:       number;
  email:    string;
  password: string;
  name:     string;
  role:     string;
  avatar:   string;
}


export const TYPES = {
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
export type HTMLInputTypes = typeof TYPES[keyof typeof TYPES]
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

