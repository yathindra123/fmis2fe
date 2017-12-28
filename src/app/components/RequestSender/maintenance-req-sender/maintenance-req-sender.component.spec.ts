import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceReqSenderComponent } from './maintenance-req-sender.component';

describe('MaintenanceReqSenderComponent', () => {
  let component: MaintenanceReqSenderComponent;
  let fixture: ComponentFixture<MaintenanceReqSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceReqSenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceReqSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
