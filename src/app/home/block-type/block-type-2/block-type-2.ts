import { BlockType2Description } from './block-type-2-description';
import { BlockTypeTitle } from '../block-type-title';
import { BlockTypeConstants } from '../block-type-constants';

export class BlockType2 {

  public type: string;
  public title: BlockTypeTitle;
  public description: BlockType2Description;

  constructor() {
    this.type =  BlockTypeConstants.BLOCK_TYPE_2;
    this.title = new BlockTypeTitle();
    this.description = new BlockType2Description();
  }
}
