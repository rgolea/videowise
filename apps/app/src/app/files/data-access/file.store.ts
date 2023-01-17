import { State } from '@ngxs/store';
import { } from '';

export interface FileStateModel {
  list:
}


@State<FileStateModel>({
  defaults: {
    list: []
  }
})
export class FileState {}
