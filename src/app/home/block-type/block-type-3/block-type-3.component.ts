import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { BlockType3 } from './block-type-3';

@Component({
  selector: 'block-type-3',
  styleUrls: [ './block-type-3.component.css', '../block-type.css'],
  templateUrl: './block-type-3.component.html'
})
export class BlockType3Component {

  public readonly headerTitle = 'Block type #3';

  @Input() public blockType3: BlockType3;
  @Output() private onDelete = new EventEmitter<any>();

  public delete() {
    this.onDelete.emit(this.blockType3);
  }

}
