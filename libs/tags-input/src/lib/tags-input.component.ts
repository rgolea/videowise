import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CustomControlComponent } from '@rgolea/simple-custom-control';
import { lastValueFrom, take } from 'rxjs';

@Component({
  imports: [NgFor, AsyncPipe, NgIf, NgClass, FormsModule, ReactiveFormsModule],
  selector: 'tags-input',
  templateUrl: './tags-input.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: TagsInputComponent
  }]
})
export class TagsInputComponent extends CustomControlComponent<string[]> {
  @Input() placeholder = 'Type something';
  @Input() defaultTags: Array<string> = [];

  public control = new FormControl();

  async submit($event: SubmitEvent) {
    $event.preventDefault();
    const value = this.control.value;
    const tags = await lastValueFrom(this.value$.pipe(take(1)));
    if(tags.includes(value)) return;
    const update = [...tags, value];
    this.markAsTouched();
    this.update(update);
    this.control.reset();
  }

  async remove(tag: string){
    const tags = await lastValueFrom(this.value$.pipe(take(1)));
    const update = tags.filter(t => t !== tag);
    this.update(update);
  }
}
