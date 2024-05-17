import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
// -----
import { ButtonComponent } from '@shared/components/atoms/button/button.component';
import { WrapperComponent } from '@shared/components/molecules/wrapper/wrapper.component';

@Component({
  selector: 'auth-profile',
  standalone: true,
  imports: [WrapperComponent, ButtonComponent, UpperCasePipe],
  templateUrl: './profile.page.component.html',
  styleUrl: './profile.page.component.scss'
})
export class ProfilePageComponent {
  userData = [
    {key: 'Photo', value: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'},
    {key: 'Name', value: 'Alma Sofia Santos Soto'},
    {key: 'Bio', value: 'I am little baby closing to arrive to this world... I`m exiting to know my parents, thay are a software developer and a big fan of devchallenges'},
    {key: 'Phone', value: '3502342343'},
    {key: 'Email', value: 'almaSofiaSS@gmail.com'},
    {key: 'Password', value: '123456'},
  ]

  getFormValue(value: any): void {
    console.log('👨‍🚀 ~ getFormValue ~ value:', value)
  }
}
