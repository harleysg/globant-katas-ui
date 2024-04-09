import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core'
// -----
type BrandType = 'logotype' | 'imagotype' | 'isotype' | 'isologo'
enum BrandTypeEnum {
  logotype = 'logotype',
  imagotype = 'imagotype',
  isotype = 'isotype'
}

@Component({
  selector: 'auth-brand',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss'
})
export class BrandComponent {
  @Input() type: BrandType = BrandTypeEnum.imagotype
  brandType = BrandTypeEnum;
}
