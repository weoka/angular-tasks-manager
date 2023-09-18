import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksLeftComponent } from './tasks-left.component';

describe('TasksLeftComponent', () => {
  let component: TasksLeftComponent;
  let fixture: ComponentFixture<TasksLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
