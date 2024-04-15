import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
// -----
import { LoginPageComponent } from './login.page.component';
import { LoginRoutingModule } from './login.page.routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    RouterLink,
    NgTemplateOutlet,
    ReactiveFormsModule,
    LoginRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [LoginPageComponent],
  providers: [],
})
export class LoginPageModule { }
