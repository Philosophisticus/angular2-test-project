import { BlockTypeRadioButtonOption } from '../block-type-radio-button-option';

export class BlockType3Description {
  public key: string;
  public value: string;
  public options: BlockTypeRadioButtonOption[];

  constructor() {
    this.key = 'RadioButton Group Label';
    this.value = 'rb1';
    this.options = [
      new BlockTypeRadioButtonOption('rb1'),
      new BlockTypeRadioButtonOption('rb2'),
      new BlockTypeRadioButtonOption('rb3')
    ];
  }
}
