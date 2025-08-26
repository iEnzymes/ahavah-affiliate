import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListMobileComponent } from './filter-list-mobile.component';

describe('FilterListMobileComponent', () => {
  let component: FilterListMobileComponent;
  let fixture: ComponentFixture<FilterListMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterListMobileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterListMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
