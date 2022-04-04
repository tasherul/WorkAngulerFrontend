import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentCoursesComponent } from './edit-student-courses.component';

describe('EditStudentCoursesComponent', () => {
  let component: EditStudentCoursesComponent;
  let fixture: ComponentFixture<EditStudentCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStudentCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
