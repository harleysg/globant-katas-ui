import { Component, ElementRef, output, viewChild } from '@angular/core';

@Component({
  selector: 'auth-input-file',
  standalone: true,
  imports: [],
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.scss'
})
export class InputFileComponent {
  public imageRef = viewChild<ElementRef>('imageRef')
  public emitImage = output<string | ArrayBuffer | null>()

  onChangeImage($event: Event) {
    const { target } = $event as InputEvent
    const { files } = target as HTMLInputElement
    const image = this.imageRef()?.nativeElement
    const reader = new FileReader();

    if (!files && !files?.[0]) return

    reader.onload = (event) => {
      const currentTarget = event?.currentTarget as FileReader
      image.src = currentTarget.result?.toString() || ''
      this.emitImage.emit(currentTarget.result)
    }
    reader.readAsDataURL(files[0]);
  }
}
