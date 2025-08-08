import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedLandingComponent } from './recommended-landing.component';

describe('RecommendedLandingComponent', () => {
  let component: RecommendedLandingComponent;
  let fixture: ComponentFixture<RecommendedLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendedLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
