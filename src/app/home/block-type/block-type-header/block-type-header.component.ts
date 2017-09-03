import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'block-type-header',
  styleUrls: [ './block-type-header.component.css' ],
  templateUrl: './block-type-header.component.html'
})
export class BlockTypeHeaderComponent implements OnInit {

  @Input() public title: string;
  @Output() private onDelete = new EventEmitter<any>();

  public delete($event) {
    $event.preventDefault();
    this.onDelete.emit();
  }

  public ngOnInit() {
    console.log('block type header init');
  }

}
