import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';

import { BrandComponent } from '../../components/atoms/brand/brand.component';
import { InputComponent } from '../../components/atoms/input/input.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
import { LoginFormComponent } from '../../components/molecules/login-form/login-form.component';

@NgModule({
  imports: [RouterLink, NgTemplateOutlet, ReactiveFormsModule, LoginRoutingModule, BrandComponent, InputComponent, LoginFormComponent],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule { }
