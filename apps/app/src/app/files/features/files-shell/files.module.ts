import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { FilesRoutingModule } from './files-routing.module';
import { FilesListComponent } from '../list/files-list.component';
import { FilesUploadComponent } from '../upload/files-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsInputModule } from '@file-upload-demo/tags-input'
import { FileUploadModule } from '@file-upload-demo/file-upload'
import { FilesEditComponent } from '../edit/files-edit.component';
import { env } from '../../../../environments';

@NgModule({
  declarations: [
    FilesListComponent,
    FilesUploadComponent,
    FilesEditComponent
  ],
  imports: [
    CommonModule,
    FilesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TagsInputModule,
    FileUploadModule,
    NgOptimizedImage
  ],
  exports: [],
  providers: [
    provideCloudinaryLoader(env.CLOUDINARY_BASE)
  ],
})
export class FilesModule {}
