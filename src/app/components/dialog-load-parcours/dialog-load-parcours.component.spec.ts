import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoadParcoursComponent } from './dialog-load-parcours.component';

describe('DialogLoadParcoursComponent', () => {
  let component: DialogLoadParcoursComponent;
  let fixture: ComponentFixture<DialogLoadParcoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLoadParcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLoadParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
