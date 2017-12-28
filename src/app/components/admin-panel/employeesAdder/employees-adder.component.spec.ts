import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAdderComponent } from './employees-adder.component';

describe('EmployeesAdderComponent', () => {
  let component: EmployeesAdderComponent;
  let fixture: ComponentFixture<EmployeesAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
