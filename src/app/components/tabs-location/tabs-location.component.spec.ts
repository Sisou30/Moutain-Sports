import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsLocationComponent } from './tabs-location.component';

describe('TabsLocationComponent', () => {
  let component: TabsLocationComponent;
  let fixture: ComponentFixture<TabsLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
