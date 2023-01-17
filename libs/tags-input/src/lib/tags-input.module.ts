import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsInputComponent } from './tags-input.component';

@NgModule({
  imports: [CommonModule, TagsInputComponent],
  exports: [TagsInputComponent]
})
export class TagsInputModule {}
