import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StoredFileDocument = HydratedDocument<StoredFile>;


@Schema({
  timestamps: true,
  collection: 'files'
})
export class StoredFile {
  @Prop()
  filename: string;

  @Prop()
  mimetype: string;

  @Prop({
    type: [String],
    default: []
  })
  tags: string[];

  @Prop({
    type: [String],
    default: [],
    minlength: 1
  })
  defaultTags: string[];
}

export const StoredFileSchema = SchemaFactory.createForClass(StoredFile);

StoredFileSchema.post('validate', (doc) => {
  doc.tags = [...doc.defaultTags, ...doc.tags].filter((tag, index, arr) => arr.indexOf(tag) === index);
});
