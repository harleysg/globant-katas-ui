import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'auth-register',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './register.page.component.html',
  styleUrl: './register.page.component.scss'
})
export class RegisterPageComponent {

}
