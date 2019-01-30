import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUmsatzBudgetComponent } from './ngx-umsatz-budget.component';

describe('NgxUmsatzBudgetComponent', () => {
  let component: NgxUmsatzBudgetComponent;
  let fixture: ComponentFixture<NgxUmsatzBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxUmsatzBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUmsatzBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
