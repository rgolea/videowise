import type { FindStoredFilesQueryDTO, StoredFile } from '@file-upload-demo/model';

export namespace FileActions {
  export class EnsureFilesLoadedAction {
    static readonly type = '[Files] Ensure loaded files';
  }

  export class LoadFilesAction {
    static readonly type = '[Files] Load Files';
  }

  export class LoadMoreFiles {
    static readonly type = '[Files] Load More Files';
    constructor(public readonly payload: FindStoredFilesQueryDTO) {}
  }

  export class LoadFileAction {
    static readonly type = '[Files] Load File';
    constructor(public readonly payload: StoredFile['_id']) {}
  }
}
