import { ControlValueAccessor } from '@angular/forms';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

export abstract class CustomControlComponent<T> implements ControlValueAccessor {

  private valueSubject$ = new ReplaySubject<T>(1);
  private disabledSubject$ = new BehaviorSubject(false);
  private touchedSubject$ = new BehaviorSubject(false);


  public value$ = this.valueSubject$.asObservable();

  public disabled$ = this.disabledSubject$.asObservable();
  public touched$ = this.touchedSubject$.asObservable();

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  public onChange = (value: T) => { };
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  private onTouched = () => {};


  writeValue(obj: T): void {
    this.valueSubject$.next(obj);
  }

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledSubject$.next(isDisabled);
  }

  public markAsTouched() {
    if(!this.touchedSubject$.getValue()){
      this.touchedSubject$.next(true);
      this.onTouched();
    }
  }

  public update(obj: T){
    this.writeValue(obj);
    this.onChange(obj);
  }
}
