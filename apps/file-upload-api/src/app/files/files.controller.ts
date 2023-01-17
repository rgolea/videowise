import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
  Get,
  Query,
  Delete,
  Param,
  Body,
  Put,
  Patch
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

import 'multer';
import { FindStoredFilesQueryDTO, UpdateStoredFileDTO, StoredFile, UploadedFile } from '@file-upload-demo/model';
import { FileService } from './services/file.service';
import { v2 } from 'cloudinary';


@Controller('files')
export class FilesController {

  constructor(
    private readonly fileService: FileService
  ){}

  @Get()
  async getFiles(@Query() query: FindStoredFilesQueryDTO): Promise<StoredFile[]> {
    return this.fileService.findAll(query);
  }

  @Get(':id')
  async getFile(@Param('id') id: string): Promise<StoredFile> {
    return this.fileService.findOne(id);
  }

  @Delete(':id')
  async deleteFile(@Param('id') id: string): Promise<StoredFile> {
    const doc = await this.fileService.delete(id);
    v2.uploader.destroy(doc.originalname);
    return doc;
  }

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFile(@UploadedFiles() files: Array<UploadedFile>, @Body('data') data: unknown, @Body() body: unknown): Promise<StoredFile[]> {
    console.log(files, data, body);
    return await Promise.all(
      files.map(file => this.fileService.create(file, {tags: []}))
    )
  }

  @Put(':id')
  @Patch(':id')
  async update(@Body() update: UpdateStoredFileDTO){
    return this.fileService.update(update);
  }
}
