import { Injectable } from '@angular/core';

import { BlockType1 } from './block-type/block-type-1/block-type-1';
import { BlockType2 } from './block-type/block-type-2/block-type-2';
import { BlockType3 } from './block-type/block-type-3/block-type-3';
import { BlockTypeConstants } from './block-type/block-type-constants';

import * as _ from 'lodash';

@Injectable()
export class HomeService {

  public isJsonValidArray(json) {
    let jsonArray;
    try {
      jsonArray = JSON.parse(json);
      return jsonArray && !!json && Array.isArray(jsonArray);
    } catch (e) {
      return false;
    }
  }

  public getCode(blockTypes) {
    return JSON.stringify(blockTypes, null, '  ');
  }

  public addNew(blockTypes, blockType) {
    switch (blockType) {
      case BlockTypeConstants.BLOCK_TYPE_1:
        blockTypes.push(new BlockType1()); break;
      case BlockTypeConstants.BLOCK_TYPE_2:
        blockTypes.push(new BlockType2()); break;
      case BlockTypeConstants.BLOCK_TYPE_3:
        blockTypes.push(new BlockType3()); break;
      default:
        console.error('unknown block type');
    }
  }

  public delete(blockTypes, blockType) {
    for (let i = 0; i < blockTypes.length; i++) {
      if (blockTypes[i] === blockType) {
        blockTypes.splice(i, 1);
        break;
      }
    }
  }

  public updateAll(blockTypes, jsonArray) {
    const jsonArrLength = jsonArray.length;
    const blockArrLength = blockTypes.length;
    if (jsonArrLength === 0) {
      blockTypes.splice(0, blockTypes.length);
    } else if (jsonArrLength > blockArrLength) {
      for (let i = 0; i < jsonArrLength; i++) {
        if (!_.isEqual(JSON.stringify(blockTypes[i]), JSON.stringify(jsonArray[i]))) {
          blockTypes.splice(i, 0, jsonArray[i]);
        }
      }
    } else if (jsonArrLength < blockArrLength) {
      let j;
      for (let i = 0; i < jsonArrLength; i++) {
        j = i;
        const iObjectStr = JSON.stringify(jsonArray[i]);
        while (!_.isEqual(JSON.stringify(blockTypes[i]), iObjectStr) && j <= jsonArrLength) {
          blockTypes.splice(i, 1);
          j++;
        }
      }
      // handle situation when several objects with same json structure were deleted
      if (jsonArrLength < blockTypes.length) {
        let i = 0;
        while (i < jsonArrLength) {
          j = i;
          let srcLen = 1;
          const srcObjectStr = JSON.stringify(jsonArray[i]);
          while (i + 1 < jsonArrLength && _.isEqual(srcObjectStr, JSON.stringify(jsonArray[i + 1])) ) {
            i++;
            srcLen++;
          }

          let dstLen = 0;
          while (j < blockTypes.length && _.isEqual(srcObjectStr, JSON.stringify(blockTypes[j])) ) {
            j++;
            dstLen++;
          }

          if (dstLen !== srcLen) {
            blockTypes.splice(j - dstLen, dstLen - srcLen);
            break;
          } else {
            i++;
          }
        }
        // all similar elements were deleted in the end of the array
        if (jsonArrLength < blockTypes.length) {
          blockTypes.splice(jsonArrLength, blockTypes.length - jsonArrLength);
        }
      }
    } else {
      _.mergeWith(blockTypes, jsonArray, mergeCustomizer);
    }

    function mergeCustomizer(objValue, srcValue) {
      if (_.isObject(objValue) && !_.isNull(srcValue)) {
        if (Array.isArray(objValue)) {
          let delElemsNumber = 0;
          _.forEach(Object.keys(objValue), (key, i) => {
            if (!srcValue.hasOwnProperty(key)) {
              objValue.splice(i - delElemsNumber, 1);
              delElemsNumber++;
            }
          });
        } else {
          _.forEach(Object.keys(objValue), (key) => {
            if (!srcValue.hasOwnProperty(key) && key !== '_id') {
              delete objValue[key];
            }
          });
        }
      }
    }
  }

}
