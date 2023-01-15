import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload.component';

export const routes: Routes = [
  { path: '', component: FileUploadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class FileUploadRouterModule { }
