import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { defer, map, retry } from 'rxjs';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'files',
    pathMatch: 'full',
  },
  {
    path: 'files',
    loadChildren: () =>
      defer(() => import('./files')).pipe(
        retry(3),
        map((m) => m.FilesModule)
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'files',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
