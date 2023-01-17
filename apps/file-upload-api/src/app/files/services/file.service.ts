import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { StoredFile, StoredFileDocument } from '../models/file.model';
import { CreateStoredFileDTO, FindStoredFilesQueryDTO, UpdateStoredFileDTO } from '../models/file.dto';
import { UploadedFile } from '../models/file.types';

@Injectable()
export class FileService {
  constructor(@InjectModel(StoredFile.name) private readonly storedFileModel: Model<StoredFileDocument>) {}

  async findAll (query: FindStoredFilesQueryDTO) {
    const { skip, limit, ...parsedQuery } = query;
    return await this.storedFileModel.find(
      parsedQuery
    ).skip(skip).limit(limit).exec();
  }

  async findOne (id: string) {
    return await this.storedFileModel.findById(id).exec();
  }

  async create (fileFields: UploadedFile, commonFields: CreateStoredFileDTO) {
    const createdFile = new this.storedFileModel({...fileFields, ...commonFields});
    return await createdFile.save();
  }

  async update (update: UpdateStoredFileDTO) {
    const { _id, ...upsert } = update;
    return await this.storedFileModel.findOneAndUpdate(_id, upsert, { new: true, upsert: true }).exec();
  }

  async delete (id: string) {
    return await this.storedFileModel.findByIdAndDelete(id).exec();
  }
}
