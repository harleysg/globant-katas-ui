import { Injectable, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
// -----
import { LoginQueryBody, LoginResponse } from '@shared/types';
import { ApiService } from '@services/api/api.service';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiService = inject(ApiService)
  private router = inject(Router)
  private store = inject(StoreService)

  isTokenValid(): boolean {
    const token = sessionStorage.getItem('lucky-token')

    if (token) {
      this.store.isLogged = true
    }

    return !!token
  }

  login(body: LoginQueryBody) {
    this.apiService.login(body).subscribe({
      next: (data: LoginResponse) => {
        this.store.logRegister = data
        this.router.navigate(['profile'])
      },
      error: ({error}: HttpErrorResponse) => {
        console.log('👨‍🚀 ~ this.apiService.login ~ error:', error)
      }
    })
  }
}
