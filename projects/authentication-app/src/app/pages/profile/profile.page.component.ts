import { UpperCasePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// -----
import { ButtonComponent } from '@shared/components/atoms/button/button.component';
import { WrapperComponent } from '@shared/components/molecules/wrapper/wrapper.component';
import { UserInfo } from '@shared/types';

@Component({
  selector: 'auth-profile',
  standalone: true,
  imports: [WrapperComponent, ButtonComponent, UpperCasePipe],
  templateUrl: './profile.page.component.html',
  styleUrl: './profile.page.component.scss'
})
export class ProfilePageComponent implements OnInit {
  private route = inject(ActivatedRoute)
  public user?: UserInfo

  userData = [
    {key: 'photo', value: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'},
    {key: 'bio', value: 'I am little baby closing to arrive to this world... I`m exiting to know my parents, thay are a software developer and a big fan of devchallenges'},
    {key: 'phone', value: '3502342343'},
  ]

  ngOnInit(): void {
    this.route.data.subscribe(response => {
      this.user = response['profile']

      if (!this.user) return

      this.userData.push({key: 'email', value: this.user.email})
      this.userData.push({key: 'name', value: this.user.name})
      this.userData.push({key: 'password', value: this.user.password})
      })
  }
}
