import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileUploadComponent } from './file-upload.component';

@NgModule({
  imports: [CommonModule, FileUploadComponent],
  declarations: [],
  exports: [FileUploadComponent],
})
export class FileUploadModule {}
