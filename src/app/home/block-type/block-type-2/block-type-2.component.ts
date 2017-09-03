import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { BlockType2 } from './block-type-2';
import { BlockTypeDeleteEvent } from '../block-type-delete-event';

@Component({
  selector: 'block-type-2',
  styleUrls: [ './block-type-2.component.css', '../block-type.css'],
  templateUrl: './block-type-2.component.html'
})
export class BlockType2Component {

  public readonly headerTitle = 'Block type #2';

  @Input() public blockType2: BlockType2;
  @Output() private onDelete = new EventEmitter<any>();

  public delete() {
    this.onDelete.emit(new BlockTypeDeleteEvent(this.blockType2.id, this.blockType2.type ));
  }

}
