import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilesListComponent } from '../list/files-list.component';
import { FilesUploadComponent } from '../upload/files-upload.component';
import { FilesEditComponent } from '../edit/files-edit.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'list',
  },
  {
    path: 'list', component: FilesListComponent
  },
  {
    path: 'upload', component: FilesUploadComponent
  },
  {
    path: 'edit', component: FilesEditComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule {}
