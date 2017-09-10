import { BlockType1Description } from './block-type-1-description';
import { BlockTypeTitle } from '../block-type-title';
import { BlockTypeConstants } from '../block-type-constants';

export class BlockType1 {

  public type: string;
  public title: BlockTypeTitle;
  public description: BlockType1Description;

  constructor() {
    this.type =  BlockTypeConstants.BLOCK_TYPE_1;
    this.title = new BlockTypeTitle();
    this.description = new BlockType1Description();
  }
}
