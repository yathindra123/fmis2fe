import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMoveComponent } from './user-move.component';

describe('UserMoveComponent', () => {
  let component: UserMoveComponent;
  let fixture: ComponentFixture<UserMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
