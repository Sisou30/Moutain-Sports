import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { WinterHomeComponent } from './winter-home.component';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorDialogComponent } from "../error-dialog/error-dialog.component";
//import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

describe('WinterHomeComponent', () => {
  let component: WinterHomeComponent;
  let fixture: ComponentFixture<WinterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinterHomeComponent, ErrorDialogComponent, /*MatDialogRef, MAT_DIALOG_DATA */],
      imports: [
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render title in a h1 tag', async(() => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('PAGES.HOME.TITLE');
  // }));
});