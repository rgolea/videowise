import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'file-upload-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ui';

  public formControl = new FormControl<File[]>([]);

  ngOnInit() {
    this.formControl.valueChanges.subscribe((val) => console.log(val));
  }
}
