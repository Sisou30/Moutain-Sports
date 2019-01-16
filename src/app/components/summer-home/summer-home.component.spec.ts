import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerHomeComponent } from './summer-home.component';

describe('SummerHomeComponent', () => {
  let component: SummerHomeComponent;
  let fixture: ComponentFixture<SummerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
