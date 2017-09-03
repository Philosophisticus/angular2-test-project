import { BlockType1Description } from './block-type-1-description';
import { BlockTypeTitle } from '../block-type-title';
import { BlockTypeConstants } from '../block-type-constants';

export class BlockType1 {
  private static _id: number = 0;

  public type: string;
  public title: BlockTypeTitle;
  public description: BlockType1Description;

  private _id: number;

  constructor() {
    this.type =  BlockTypeConstants.BLOCK_TYPE_1;
    this._id = ++BlockType1._id;
    this.title = new BlockTypeTitle();
    this.description = new BlockType1Description();
  }

  get id(): number {
    return this._id;
  }

  public toJSON(): Object {
    return {
      type: this.type,
      title: this.title,
      description: this.description
    };
  }
}
