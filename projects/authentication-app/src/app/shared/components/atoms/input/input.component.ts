import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'auth-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnChanges {
  @Input() autocomplete: boolean = false;
  @Input() control: FormControl<string> = new FormControl();
  @Input() pattern: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() invalid: boolean | undefined = false;
  @Input() required: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value'] && changes['value'].currentValue) {
      this.control.setValue(this.value)
    }
  }
}
