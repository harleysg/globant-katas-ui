import { Component, Input, OnChanges, SimpleChanges, output } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { RouterLink } from '@angular/router'
// -----
import { BrandComponent } from '../../atoms/brand/brand.component'
import { AsyncPipe, NgClass, NgTemplateOutlet } from '@angular/common'

@Component({
  selector: 'auth-wrapper',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, BrandComponent, NgTemplateOutlet, AsyncPipe, NgClass],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent implements OnChanges {
  @Input() sendLabel: string = ''
  @Input() useBrand: boolean = false
  @Input() formLoginGroup!: FormGroup<any>

  submitEmmiter = output<any>()
  useForm!: Promise<boolean>;

  submit(): void {
    this.submitEmmiter.emit(this.formLoginGroup.value)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formLoginGroup']) {
      if (this.formLoginGroup) {
        this.useForm = Promise.resolve(true);
      } else {
        this.useForm = Promise.resolve(false);
      }
    }
  }
}
