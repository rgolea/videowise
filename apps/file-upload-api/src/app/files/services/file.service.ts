import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { StoredFile, StoredFileDocument } from '../models/file.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(StoredFile.name) private readonly storedFileModel: Model<StoredFileDocument>) {}
  async findAll () {
    return await this.storedFileModel.find().exec()
  }
}
