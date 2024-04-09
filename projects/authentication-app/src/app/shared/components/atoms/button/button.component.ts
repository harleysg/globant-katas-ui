import { NgClass } from '@angular/common'
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'

type StyleValues = 'huge'| 'outline' | 'middle' | 'rounded' | 'simetric'
type StyleType = StyleValues | StyleValues[] | undefined | null | ''

enum StylesDictionary {
  huge ='c-btn--huge',
  simetric ='c-btn--simetric',
  middle ='c-btn--middle',
  outline ='c-btn--outline',
  rounded ='c-btn--rounded',
}

@Component({
  selector: 'auth-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnChanges {
  @Input() styles: StyleType = 'huge'
  @Input() aspectRatio: number = 1
  classNames = '';

  ngOnChanges(changes: SimpleChanges): void {
    const styles = changes['styles'].currentValue as StyleValues[]
    let classNames: StyleValues[] = []

    if (Array.isArray(styles)) {
      classNames = styles
    } else if (typeof styles === 'string') {
      classNames = [styles]
    }

    this.classNames = classNames
      .map((type: StyleValues) => StylesDictionary[type])
      .toString()
      .replaceAll(',', ' ')
  }
}
