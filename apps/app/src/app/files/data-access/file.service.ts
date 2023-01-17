import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FileService {
  constructor(private httpClient: HttpClient) {}

  // uploadFile(file: File) {
  //   const formData = new FormData();
  //   formData.append('files', file);
  //   formData.append('data', '{tags: ["test1", "test2"]}')
  //   return this.httpClient.post('http://localhost:3333/files', formData);
  // }
}
