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
  // ParseFilePipeBuilder
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

import 'multer';
import { CreateStoredFileDTO, FindStoredFilesQueryDTO, UpdateStoredFileDTO } from './models/file.dto';
import { StoredFile } from './models/file.model';
import { UploadedFile } from './models/file.types';
import { FileService } from './services/file.service';


@Controller('files')
export class FilesController {

  constructor(
    private readonly fileService: FileService
  ){}

  @Get()
  async getFiles(@Query() query: FindStoredFilesQueryDTO) {
    return this.fileService.findAll(query);
  }

  @Get(':id')
  async getFile(@Param('id') id: string) {
    return this.fileService.findOne(id);
  }

  @Delete(':id')
  async deleteFile(@Param('id') id: string) {
    return this.fileService.delete(id);
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
