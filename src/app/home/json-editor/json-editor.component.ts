import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import 'codemirror/mode/javascript/javascript';

@Component({
  selector: 'json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: [ './json-editor.component.css' ]
})
export class JsonEditorComponent {

  public jeCode: string;
  public isSetFromOutside: boolean = false;
  @Output() private onChange = new EventEmitter<any>();

  public change() {
    if (this.isSetFromOutside) {
      this.isSetFromOutside = false;
      return;
    }
    this.onChange.emit(this.jeCode);
  }

  @Input()
  set code(value: string) {
    if (this.jeCode !== value) {
      this.isSetFromOutside = true;
      this.jeCode = value;
    }
  }
}
