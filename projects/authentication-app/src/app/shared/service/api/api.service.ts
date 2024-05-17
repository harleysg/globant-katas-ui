import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
// -----
import { EnvironmentService } from '@services/environment/environment.service';
import { LoginQueryBody, LoginResponse, UserInfo } from '@shared/types';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private env = inject(EnvironmentService)
  private https = inject(HttpClient)
  private store = inject(StoreService)

  login(body: LoginQueryBody) {
    return this.https
      .post<LoginResponse>(`${this.env.getValue('apiUrl')}/auth/login`, body)
  }

  profile(): Observable<UserInfo> {
    const { access_token } = this.store.token
    const headers = {'Authorization': `Bearer ${access_token}`}

    return this.https
      .get<UserInfo>(`${this.env.getValue('apiUrl')}/auth/profile`, { headers })
  }
}
