import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchParcourComponent } from './search-parcour.component';

describe('SearchParcourComponent', () => {
  let component: SearchParcourComponent;
  let fixture: ComponentFixture<SearchParcourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchParcourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchParcourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
