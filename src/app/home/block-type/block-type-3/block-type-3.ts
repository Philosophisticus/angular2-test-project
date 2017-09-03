import { BlockType3Description } from './block-type-3-description';
import { BlockTypeTitle } from '../block-type-title';
import { BlockTypeConstants } from '../block-type-constants';

export class BlockType3 {
  private static _id: number = 0;

  public type: string;
  public title: BlockTypeTitle;
  public description: BlockType3Description;

  private _id: number;

  constructor() {
    this.type =  BlockTypeConstants.BLOCK_TYPE_3;
    this._id = ++BlockType3._id;
    this.title = new BlockTypeTitle();
    this.description = new BlockType3Description();
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
