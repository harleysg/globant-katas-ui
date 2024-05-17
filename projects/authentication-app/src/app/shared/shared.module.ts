import { NgModule } from '@angular/core';
// -----
import { BrandComponent } from './components/atoms/brand/brand.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputComponent } from './components/atoms/input/input.component';
import { WrapperComponent } from './components/molecules/wrapper/wrapper.component';
import { SocialProfileComponent } from './components/molecules/social-profile/social-profile.component';
// -----
const atoms = [BrandComponent, ButtonComponent, InputComponent]
const molecules = [WrapperComponent, SocialProfileComponent]

@NgModule({
  imports: [...atoms, ...molecules],
  exports: [...atoms, ...molecules],
  providers: [],
})
export class SharedModule { }
