import { StoredFile } from './file.model';
import { PickType, OmitType, IntersectionType, PartialType } from '@nestjs/mapped-types';
import { QueryDTO } from '../query/query.dto';

export class CreateStoredFileDTO extends PickType(StoredFile, ['tags']){}

export class UpdateStoredFileDTO extends OmitType(StoredFile, ['defaultTags', 'mimetype']){}

export class DeleteStoredFileDTO extends PickType(StoredFile, ['_id']){}

export class FindStoredFilesQueryDTO extends PartialType(IntersectionType(OmitType(StoredFile, ['_id']), QueryDTO)){}
