import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentCoursesComponent } from './add-student-courses.component';

describe('AddStudentCoursesComponent', () => {
  let component: AddStudentCoursesComponent;
  let fixture: ComponentFixture<AddStudentCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
