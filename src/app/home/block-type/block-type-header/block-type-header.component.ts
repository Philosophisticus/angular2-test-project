import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'block-type-header',
  styleUrls: [ './block-type-header.component.css' ],
  templateUrl: './block-type-header.component.html'
})
export class BlockTypeHeaderComponent {

  @Input() public title: string;
  @Output() private onDelete = new EventEmitter<any>();

  public delete($event) {
    $event.preventDefault();
    this.onDelete.emit();
  }

}
