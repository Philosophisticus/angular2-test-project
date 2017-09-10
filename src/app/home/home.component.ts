import {
  Component,
  DoCheck
} from '@angular/core';

import { BlockTypeConstants } from './block-type/block-type-constants';
import { HomeService } from './home.service';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements DoCheck {

  public BLOCK_TYPE_1: string = BlockTypeConstants.BLOCK_TYPE_1;
  public BLOCK_TYPE_2: string = BlockTypeConstants.BLOCK_TYPE_2;
  public BLOCK_TYPE_3: string = BlockTypeConstants.BLOCK_TYPE_3;
  public selectedBlockType = this.BLOCK_TYPE_1;
  public blockTypes: any[] = [];
  public code: string = '';
  public showErrorMessage: boolean = false;

  constructor( private homeService: HomeService) {}

  public ngDoCheck() {
    this.updateCode();
  }

  public delete(blockType) {
    this.homeService.delete(this.blockTypes, blockType);
    this.updateCode();
  }

  public addNewBlock() {
    this.homeService.addNew(this.blockTypes, this.selectedBlockType);
    this.updateCode();
  }

  public jsonChange(newJson: string) {
    if (this.homeService.isJsonValidArray(newJson)) {
      this.homeService.updateAll(this.blockTypes, JSON.parse(newJson));
      if (this.showErrorMessage) {
        this.showErrorMessage = false;
      }
    } else if (!this.showErrorMessage) {
      this.showErrorMessage = true;
    }
  }

  private updateCode() {
    this.code = this.homeService.getCode(this.blockTypes);
  }
}
