import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
// -----
const TYPES = {
  TEXTAREA: 'textArea',
  BUTTON: 'button',
  CHECKBOX: 'checkbox',
  COLOR: 'color',
  DATE: 'date',
  DATETIME_LOCAL: 'datetime-local',
  EMAIL: 'email',
  FILE: 'file',
  HIDDEN: 'hidden',
  IMAGE: 'image',
  MONTH: 'month',
  NUMBER: 'number',
  PASSWORD: 'password',
  RADIO: 'radio',
  RANGE: 'range',
  RESET: 'reset',
  SEARCH: 'search',
  SUBMIT: 'submit',
  TEL: 'tel',
  TEXT: 'text',
  TIME: 'time',
  URL: 'url',
  WEEK: 'week',
} as const
type Types = typeof TYPES[keyof typeof TYPES]

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
  @Input() controlName: string | null | number = null;
  @Input() pattern: string = '';
  @Input() placeholder: string = '';
  @Input() type: Types = 'text';
  @Input() resize: boolean = false;
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() text: string = '';
  @Input() image: string = '';
  @Input() accept: string = '*';
  @Input() name: string = '';
  @Input() invalid: boolean | undefined = false;
  @Input() required: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value'] && changes['value'].currentValue) {
      this.control.setValue(this.value)
    }
  }
}
