import { Component, Input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BrandComponent } from '../../atoms/brand/brand.component';
import { InputComponent } from '../../atoms/input/input.component';

@Component({
  selector: 'auth-login-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, BrandComponent, InputComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Input() sendLabel: string = ''
  @Input() formLoginGroup!: FormGroup<any>

  submitEmmiter = output<any>()

  submit(): void {
    this.submitEmmiter.emit(this.formLoginGroup.value)
  }
}
