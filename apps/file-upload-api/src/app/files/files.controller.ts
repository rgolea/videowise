import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
  // ParseFilePipeBuilder
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
// import { parse as bytes } from 'bytes';
import 'multer';


@Controller('files')
export class FilesController {

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  uploadFile(@UploadedFiles(
    // new ParseFilePipeBuilder().addMaxSizeValidator({
    //   maxSize: bytes('10MB')
    // })
    // .build()
  ) files: Array<Express.Multer.File>) {
    console.log(files);
    return {
      uploaded: true
    }
  }
}
