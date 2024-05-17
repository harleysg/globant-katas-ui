import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// -----
import { BrandComponent } from '@shared/components/atoms/brand/brand.component';

@Component({
  selector: 'auth-header',
  standalone: true,
  imports: [BrandComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
