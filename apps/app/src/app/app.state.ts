import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';



@State<unknown>({
  name: 'app'
})
@Injectable()
export class AppState {}
