import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsAdderComponent } from './items-adder.component';

describe('ItemsAdderComponent', () => {
  let component: ItemsAdderComponent;
  let fixture: ComponentFixture<ItemsAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
