import { StoredFile } from './file.model';
import { PickType, OmitType, IntersectionType } from '@nestjs/mapped-types';
import { QueryDTO } from '../../common/dto/query.dto';

export class CreateStoredFileDTO extends PickType(StoredFile, ['tags']){}

export class UpdateStoredFileDTO extends OmitType(StoredFile, ['defaultTags', 'mimetype']){}

export class DeleteStoredFileDTO extends PickType(StoredFile, ['_id']){}

export class FindStoredFilesQueryDTO extends IntersectionType(OmitType(StoredFile, ['_id']), QueryDTO){}
