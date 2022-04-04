import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentCoursesComponent } from './view-student-courses.component';

describe('ViewStudentCoursesComponent', () => {
  let component: ViewStudentCoursesComponent;
  let fixture: ComponentFixture<ViewStudentCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
