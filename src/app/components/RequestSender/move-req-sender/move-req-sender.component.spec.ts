import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveReqSenderComponent } from './move-req-sender.component';

describe('MoveReqSenderComponent', () => {
  let component: MoveReqSenderComponent;
  let fixture: ComponentFixture<MoveReqSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveReqSenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveReqSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
