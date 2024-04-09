import { NgModule } from '@angular/core';
// -----
import { BrandComponent } from './components/atoms/brand/brand.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputComponent } from './components/atoms/input/input.component';
import { LoginFormComponent } from './components/molecules/login-form/login-form.component';

@NgModule({
  imports: [BrandComponent, ButtonComponent, InputComponent, LoginFormComponent],
  exports: [BrandComponent, ButtonComponent, InputComponent, LoginFormComponent],
  providers: [],
})
export class SharedModule { }
