import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCostComponent } from './maintain-cost.component';

describe('MaintainCostComponent', () => {
  let component: MaintainCostComponent;
  let fixture: ComponentFixture<MaintainCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
