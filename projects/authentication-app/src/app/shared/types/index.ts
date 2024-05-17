import { FormControl } from '@angular/forms'

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

