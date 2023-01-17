import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { env } from '../../../environments';
import type { FindStoredFilesQueryDTO, StoredFile } from '@file-upload-demo/model';

@Injectable({ providedIn: 'root' })
export class FileService {
  private endpoint = new URL('files', env.API_ENDPOINT);

  constructor(private httpClient: HttpClient) {}

  query(query: Readonly<FindStoredFilesQueryDTO>){
    console.log(query);
    const params = new HttpParams({
      fromObject: query
    });
    console.log(params);
    return this.httpClient.get<StoredFile[]>(this.endpoint.toString(), {
      params
    });
  }

  // uploadFile(file: File) {
  //   const formData = new FormData();
  //   formData.append('files', file);
  //   formData.append('data', '{tags: ["test1", "test2"]}')
  //   return this.httpClient.post('http://localhost:3333/files', formData);
  // }
}
