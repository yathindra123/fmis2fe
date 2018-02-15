import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceEditorComponent } from './maintenance-editor.component';

describe('MaintenanceEditorComponent', () => {
  let component: MaintenanceEditorComponent;
  let fixture: ComponentFixture<MaintenanceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
