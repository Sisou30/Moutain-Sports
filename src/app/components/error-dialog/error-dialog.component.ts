import {Component, Inject, HostListener } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'error-dialog.component.html'
})

export class ErrorDialogComponent {

  constructor(private dialogRef: MatDialogRef<ErrorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data : any) {
  }

  closeDialog(){
    this.dialogRef.close();
    console.log("clic to close");
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }

}
