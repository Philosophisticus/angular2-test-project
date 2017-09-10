import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlockType1 } from './block-type-1';
import { BlockType1Component } from './block-type-1.component';

describe('BlockType1Component (templateUrl)', () => {

  let comp: BlockType1Component;
  let fixture: ComponentFixture<BlockType1Component>;
  let inputEl: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ BlockType1Component ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockType1Component);

    comp = fixture.componentInstance;

    comp.blockType1 = new BlockType1();
    fixture.detectChanges();
    inputEl = fixture.debugElement.query(By.css('.block-type-1_content_input')).nativeElement;
  });

  it('should be default input value', () => {
    expect(inputEl.value).toEqual('');
  });

  it('should change model input value', () => {
    inputEl.value = 'Test value';
    inputEl.dispatchEvent(new Event('input'));
    expect(comp.blockType1.title.value).toEqual('Test value');
  });

  it('model change should change input value', fakeAsync(() => {
    comp.blockType1.title.value = 'Test value';
    fixture.detectChanges();
    tick();
    expect(inputEl.value).toEqual('Test value');
  }));

});
