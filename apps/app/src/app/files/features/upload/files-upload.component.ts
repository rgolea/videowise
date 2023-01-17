import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { FileService } from '../../data-access/file.service';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesUploadComponent implements OnInit {
  public form = inject(FormBuilder).nonNullable.group({
    files: [
      [] as File[],
      [Validators.required, Validators.minLength(1), Validators.maxLength(1)],
    ],
    tags: [['asdf', 'ghjk'] as string[]]
  });

  // private fileService = inject(FileService);

  uploadFiles() {
    const file = (this.form.value.files ?? []).at(0);
    if (!file) return;

    // this.fileService.uploadFile(file).subscribe();
  }

  ngOnInit(): void {
      this.form.valueChanges.subscribe(val => console.log(val));
  }
}
