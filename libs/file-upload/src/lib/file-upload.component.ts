import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomControlComponent } from '@rgolea/simple-custom-control';

@Component({
  selector: 'file-upload',
  imports: [NgFor, NgClass, AsyncPipe, NgIf],
  templateUrl: './file-upload.component.html',
  standalone: true,
  host: {
    '(dragenter)': 'handleDrag($event)',
    '(dragover)': 'handleDrag($event)',
    '(dragleave)': 'handleDrag($event)',
    '(drop)': 'handleDrag($event)'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FileUploadComponent
    }
  ]
})
export class FileUploadComponent extends CustomControlComponent<File[]> {

  private isDragActiveSubject$ = new BehaviorSubject(false);
  public displayBackground$ = this.isDragActiveSubject$.asObservable().pipe(
    map((val) => !val)
  );

  public files$ = new BehaviorSubject<number[]>([1,2,3,4]);

  handleDrag(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    switch (event.type) {
      case 'dragenter':
      case 'dragover':
        this.isDragActiveSubject$.next(true);
        break;

      case 'dragleave':
      case 'drop':
        this.isDragActiveSubject$.next(false);
    }

    if(event.type === 'drop') {
      this.onDrop(event);
    }
  }

  onDrop(event: DragEvent) {
    const dataTransfer = event.dataTransfer;
    if(!dataTransfer) return;
    const items = dataTransfer.items ? [...dataTransfer.items].map(item => item.getAsFile()) : [...dataTransfer.files];
    const files = items.filter(item => item instanceof File) as File[];
    if(!files) return;
    this.handleFileChange(files);
  }

  inputChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if(!files) return;
    this.handleFileChange([...files]);
  }

  handleFileChange(files: File[]) {
    this.markAsTouched();
    this.onChange(files);
  }
}
