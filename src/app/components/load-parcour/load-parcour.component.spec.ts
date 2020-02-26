import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadParcourComponent } from './load-parcour.component';

describe('LoadParcourComponent', () => {
  let component: LoadParcourComponent;
  let fixture: ComponentFixture<LoadParcourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadParcourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadParcourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
