import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { defer, map, retry } from 'rxjs';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full',
  },
  {
    path: 'upload',
    loadChildren: () => defer(() => import('./file-upload/file-upload.module')).pipe(
      retry(3),
      map(m => m.FileUploadModule)
    ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'upload',
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
