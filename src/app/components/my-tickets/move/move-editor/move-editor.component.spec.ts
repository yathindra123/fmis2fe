import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveEditorComponent } from './move-editor.component';

describe('MoveEditorComponent', () => {
  let component: MoveEditorComponent;
  let fixture: ComponentFixture<MoveEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
