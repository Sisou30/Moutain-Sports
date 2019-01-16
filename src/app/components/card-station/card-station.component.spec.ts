import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStationComponent } from './card-station.component';

describe('CardStationComponent', () => {
  let component: CardStationComponent;
  let fixture: ComponentFixture<CardStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
