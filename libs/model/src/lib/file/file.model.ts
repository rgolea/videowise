import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

import {
  IsString,
  MaxLength,
  IsMimeType,
  IsArray,
  ArrayUnique,
  MinLength,
  IsNotEmpty,
  IsUrl
} from 'class-validator';

import { Expose, Transform } from 'class-transformer';
import { UploadedFile } from './file.types';

export type StoredFileDocument = HydratedDocument<StoredFile>;


@Schema({
  timestamps: true,
  collection: 'files'
})
export class StoredFile implements UploadedFile {
  @Expose()
  @Transform(({ value }) => value.toString())
  _id!: ObjectId;

  @Expose()
  @IsString()
  @MaxLength(255)
  @Prop()
  originalname!: string;


  @Expose()
  @IsString()
  @IsNotEmpty()
  @IsMimeType()
  @Prop()
  mimetype!: string;

  @Expose()
  @IsArray()
  @IsString({
    each: true
  })
  @MinLength(1, {
    each: true
  })
  @MaxLength(255, {
    each: true
  })
  @ArrayUnique(tag => tag.toLowerCase())
  @Prop({
    type: [String],
    default: []
  })
  tags!: string[];

  @Expose()
  @IsArray()
  @IsString({
    each: true
  })
  @MinLength(1, {
    each: true
  })
  @MaxLength(255, {
    each: true
  })
  @ArrayUnique(tag => tag.toLowerCase())
  @Prop({
    type: [String],
    default: [],
    minlength: 1
  })
  defaultTags!: string[];

  @IsUrl()
  path!: string;

}

export const StoredFileSchema = SchemaFactory.createForClass(StoredFile);

StoredFileSchema.post('validate', (doc) => {
  doc.tags = [...doc.defaultTags, ...doc.tags].filter((tag, index, arr) => arr.indexOf(tag) === index);
});
