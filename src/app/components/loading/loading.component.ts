import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ElectronService } from '../../providers/electron.service';



@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  valueUsername = '';
  valuePassword = '';

  constructor(public electronService: ElectronService,
    public dialogRef: MatDialogRef<LoadingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    ClickSignIn(): void {
      document.querySelector('.cont').classList.toggle('s--signup');
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
