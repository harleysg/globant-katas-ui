import { Injectable, signal } from '@angular/core';
// -----
import { LoginResponse } from '@shared/types';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _isLogged = signal(false)
  private _token = signal<LoginResponse>({ access_token: '', refresh_token: '' })

  get token(): LoginResponse {
    const storage = sessionStorage.getItem('lucky-token')
    const token = (storage ? JSON.parse(storage) : { access_token: '', refresh_token: '' }) as LoginResponse
    this._token.set(token)

    return this._token()
  }

  set isLogged(status: boolean) {
    this._isLogged.set(status)
  }

  set logRegister(value: LoginResponse) {
    this._token.set(value)

    if (value.access_token && value.refresh_token) {
      sessionStorage.setItem('lucky-token', JSON.stringify(value))
      this._isLogged.set(true);
    }
  }
}
