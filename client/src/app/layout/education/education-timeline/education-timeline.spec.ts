import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationTimeline } from './education-timeline';

describe('EducationTimeline', () => {
  let component: EducationTimeline;
  let fixture: ComponentFixture<EducationTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationTimeline],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationTimeline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
