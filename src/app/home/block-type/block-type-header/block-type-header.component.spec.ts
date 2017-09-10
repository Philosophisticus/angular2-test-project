import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { By }              from '@angular/platform-browser';

import { BlockTypeHeaderComponent } from './block-type-header.component';

describe('BlockTypeHeaderComponent (templateUrl)', () => {

  let comp: BlockTypeHeaderComponent;
  let fixture: ComponentFixture<BlockTypeHeaderComponent>;
  let titleEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTypeHeaderComponent ],
    })
      .compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTypeHeaderComponent);

    comp = fixture.componentInstance;

    titleEl = fixture.debugElement.query(By.css('.block-type-header_title')).nativeElement;
  });

  it('should display default title value', () => {
    expect(titleEl.textContent).toEqual('');
  });

  it('should display changed title', () => {
    comp.title = 'Test title';
    fixture.detectChanges();
    expect(titleEl.textContent).toContain('Test title');
  });

});
