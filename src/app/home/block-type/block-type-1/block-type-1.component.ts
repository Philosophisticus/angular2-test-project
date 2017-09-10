import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { BlockType1 } from './block-type-1';

@Component({
  selector: 'block-type-1',
  styleUrls: [ './block-type-1.component.css', '../block-type.css'],
  templateUrl: './block-type-1.component.html'
})
export class BlockType1Component {

  public readonly headerTitle = 'Block type #1';

  @Input() public blockType1: BlockType1;
  @Output() private onDelete = new EventEmitter<any>();

  public delete() {
    this.onDelete.emit(this.blockType1);
  }

}
