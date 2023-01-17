import { Action, State, StateContext } from '@ngxs/store';
import type { StoredFile } from '@file-upload-demo/model';
import { inject, Injectable } from '@angular/core';
import { FileActions } from './file.actions';
import { FileService } from './file.service';
import { tap } from 'rxjs';

export interface FileStateModel {
  list: Array<StoredFile>;
  selected?: StoredFile['_id'];
  loading: boolean;
}


@State<FileStateModel>({
  defaults: {
    list: [],
    loading: false,
  },
  name: 'file'
})
@Injectable({
  providedIn: 'root'
})
export class FileState {
  private readonly fileService = inject(FileService);

  @Action(FileActions.EnsureFilesLoadedAction)
  ensureLoaded(ctx: StateContext<FileStateModel>){
    const { loading, list } = ctx.getState();
    if(loading || list.length > 0) return;
    return ctx.dispatch(new FileActions.LoadFilesAction());
  }

  @Action(FileActions.LoadFilesAction)
  loadFiles(ctx: StateContext<FileStateModel>){
    ctx.patchState({ loading: true });
    return this.fileService.query({
      skip: 0
    }).pipe(
      tap(files => ctx.setState({ loading: false, list: files }))
    );
  }
}
