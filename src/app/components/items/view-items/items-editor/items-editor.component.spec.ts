import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsEditorComponent } from './items-editor.component';

describe('ItemsEditorComponent', () => {
  let component: ItemsEditorComponent;
  let fixture: ComponentFixture<ItemsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
