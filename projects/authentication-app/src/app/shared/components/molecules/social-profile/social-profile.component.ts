import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'auth-social-profile',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './social-profile.component.html',
  styleUrl: './social-profile.component.scss'
})
export class SocialProfileComponent {

}
