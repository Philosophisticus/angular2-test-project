import { BlockTypeCheckboxOption } from '../block-type-checkbox-option';

export class BlockType2Description {
  public key: string;
  public options: BlockTypeCheckboxOption[];

  constructor() {
    this.key = 'Checkbox group label';
    this.options = [new BlockTypeCheckboxOption(), new BlockTypeCheckboxOption(), new BlockTypeCheckboxOption()];
  }
}
