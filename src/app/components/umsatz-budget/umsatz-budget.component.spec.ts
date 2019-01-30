import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmsatzBudgetComponent } from './umsatz-budget.component';

describe('UmsatzBudgetComponent', () => {
  let component: UmsatzBudgetComponent;
  let fixture: ComponentFixture<UmsatzBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmsatzBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmsatzBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
