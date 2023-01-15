import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule as FUModule } from '@file-upload-demo/file-upload';
import { FileUploadRouterModule } from './file-upload-router.module';

import { FileUploadComponent } from './file-upload.component';
import { FileService } from '../services/file.service';

@NgModule({
  imports: [FileUploadRouterModule, FUModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  exports: [],
  declarations: [FileUploadComponent],
  providers: [FileService],
})
export class FileUploadModule { }
