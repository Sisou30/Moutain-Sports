import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParcoursComponent } from './create-parcours.component';

describe('CreateParcoursComponent', () => {
  let component: CreateParcoursComponent;
  let fixture: ComponentFixture<CreateParcoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateParcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
