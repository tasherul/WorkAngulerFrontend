import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudentCoursesComponent } from './delete-student-courses.component';

describe('DeleteStudentCoursesComponent', () => {
  let component: DeleteStudentCoursesComponent;
  let fixture: ComponentFixture<DeleteStudentCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteStudentCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStudentCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
