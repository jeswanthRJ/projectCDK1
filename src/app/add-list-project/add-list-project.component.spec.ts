import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListProjectComponent } from './add-list-project.component';

describe('AddListProjectComponent', () => {
  let component: AddListProjectComponent;
  let fixture: ComponentFixture<AddListProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
