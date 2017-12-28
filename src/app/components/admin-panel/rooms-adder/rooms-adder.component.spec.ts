import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsAdderComponent } from './rooms-adder.component';

describe('RoomsAdderComponent', () => {
  let component: RoomsAdderComponent;
  let fixture: ComponentFixture<RoomsAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
