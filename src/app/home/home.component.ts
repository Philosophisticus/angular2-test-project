import {
  Component,
  DoCheck
} from '@angular/core';

import * as _ from 'lodash';

import { BlockType1 } from './block-type/block-type-1/block-type-1';
import { BlockType2 } from './block-type/block-type-2/block-type-2';
import { BlockType3 } from './block-type/block-type-3/block-type-3';
import { BlockTypeDeleteEvent } from './block-type/block-type-delete-event';
import { BlockTypeConstants } from './block-type/block-type-constants';

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

  public ngDoCheck() {
    this.updateCode();
  }

  public delete(blockTypeDeleteEvent: BlockTypeDeleteEvent) {
    for (let i = 0; i < this.blockTypes.length; i++) {
      if (this.blockTypes[i].id === blockTypeDeleteEvent.id
        && this.blockTypes[i].type === blockTypeDeleteEvent.type) {
        this.blockTypes.splice(i, 1);
        break;
      }
    }
    this.updateCode();
  }

  public addNewBlock() {
    switch (this.selectedBlockType) {
      case this.BLOCK_TYPE_1:
        this.blockTypes.push(new BlockType1()); break;
      case this.BLOCK_TYPE_2:
        this.blockTypes.push(new BlockType2()); break;
      case this.BLOCK_TYPE_3:
        this.blockTypes.push(new BlockType3()); break;
      default:
        console.error('unknown block type');
    }
    this.updateCode();
  }

  public jsonChange(newJson: string) {
    let jsonArray;
    let isJsonValid = true;

    try {
      jsonArray = JSON.parse(newJson);
      isJsonValid = jsonArray && !!newJson && Array.isArray(jsonArray);
    } catch (e) {
      isJsonValid = false;
    }

    if (isJsonValid) {
      if (this.blockTypes.length !== jsonArray.length) {
        if (jsonArray.length === 0) {
          this.blockTypes = [];
        } else {
          for (let i = 0; i < this.blockTypes.length; i++) {
            if (!_.isEqual(this.blockTypes[i], jsonArray[i])) {
              this.blockTypes.splice(i, 1);
            }
          }
        }
      } else {
        _.mergeWith(this.blockTypes, jsonArray, mergeCustomizer);
      }
      if (this.showErrorMessage) {
        this.showErrorMessage = false;
      }
    } else if (!this.showErrorMessage) {
      this.showErrorMessage = true;
    }

    function mergeCustomizer(objValue, srcValue) {
      if (_.isObject(objValue)) {
        if (Array.isArray(objValue)) {
          let i = 0;
          _.forEach(Object.keys(objValue), (key) => {
            if (!_.isNull(srcValue) && !_.isUndefined(srcValue)
              && !srcValue.hasOwnProperty(key)) {
              objValue.splice(i, 1);
            }
            i++;
          });
        } else {
          _.forEach(Object.keys(objValue), (key) => {
            if (!_.isNull(srcValue) && !_.isUndefined(srcValue)
              && !srcValue.hasOwnProperty(key) && key !== '_id') {
              delete objValue[key];
            }
          });
        }
      }
    }
  }

  private updateCode() {
    this.code = JSON.stringify(this.blockTypes, null, '  ');
  }
}
