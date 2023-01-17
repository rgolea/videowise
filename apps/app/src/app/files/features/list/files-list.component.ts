import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FileActions } from '../../data-access/file.actions';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html'
})
export class FilesListComponent implements OnInit {
  private readonly store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(new FileActions.EnsureFilesLoadedAction());
  }
}
