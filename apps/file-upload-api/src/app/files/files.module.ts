import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesController } from './files.controller';

import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 } from 'cloudinary';
import { StoredFile, StoredFileSchema } from './models/file.model';
import { FileService } from './services/file.service';
import { parse as bytes } from 'bytes';


export const storage = new CloudinaryStorage({
  cloudinary: v2
});

@Module({
  imports: [
    MulterModule.register({
      storage,
      limits: {
        fileSize: bytes('10MB'),
      }
    }),
    MongooseModule.forFeature([
      { name: StoredFile.name, schema: StoredFileSchema }
    ])
  ],
  controllers: [FilesController],
  providers: [
    FileService
  ],
})
export class FilesModule {};
