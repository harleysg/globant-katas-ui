import { NgClass, NgTemplateOutlet } from '@angular/common'
import { Component, Input, OnChanges, SimpleChanges, output } from '@angular/core'
import { RouterLink } from '@angular/router'
// -----
type StyleValues = 'huge'| 'outline' | 'middle' | 'rounded' | 'simetric' | 'flat'
type StyleType = StyleValues | StyleValues[] | undefined | null | ''
enum StylesDictionary {
  huge ='c-btn--huge',
  flat ='c-btn--flat',
  simetric ='c-btn--simetric',
  middle ='c-btn--middle',
  outline ='c-btn--outline',
  rounded ='c-btn--rounded',
}
// -----
@Component({
  selector: 'auth-button',
  standalone: true,
  imports: [NgClass, RouterLink, NgTemplateOutlet],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnChanges {
  @Input() styles: StyleType = 'huge'
  @Input() aspectRatio: number = 1
  @Input() routerLink: string | string[] | undefined = undefined
  @Input() name: string = ''

  // @Output() emitAction = output<any>() // minor than angular 16
  emitAction = output<void>() // Angular 17
  classNames = '';

  ngOnChanges(changes: SimpleChanges): void {
    const styles = changes['styles']?.currentValue as StyleValues[]
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

  handleEmit(): void {
    this.emitAction.emit()
  }
}
