import { BlockType2Description } from './block-type-2-description';
import { BlockTypeTitle } from '../block-type-title';
import { BlockTypeConstants } from '../block-type-constants';

export class BlockType2 {
  private static _id: number = 0;

  public type: string;
  public title: BlockTypeTitle;
  public description: BlockType2Description;

  private _id: number;

  constructor() {
    this.type =  BlockTypeConstants.BLOCK_TYPE_2;
    this._id = ++BlockType2._id;
    this.title = new BlockTypeTitle();
    this.description = new BlockType2Description();
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
