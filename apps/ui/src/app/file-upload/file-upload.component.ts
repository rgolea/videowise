import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileService } from '../services/file.service';

@Component({
  selector: 'file-upload-demo-file-upload',
  templateUrl: './file-upload.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadComponent {

  public form = inject(FormBuilder).nonNullable.group({
    files: [[] as File[], [Validators.required, Validators.minLength(1), Validators.maxLength(1)]]
  });

  private fileService = inject(FileService);

  uploadFiles(){
    const file = (this.form.value.files ?? []).at(0);
    if(!file) return;

    this.fileService.uploadFile(file).subscribe();
  }

}
