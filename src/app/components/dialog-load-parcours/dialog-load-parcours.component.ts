import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ElectronService } from '../../providers/electron.service';
import { FormBuilder, FormGroup } from  '@angular/forms';
import { UploadFileService } from  '../../Services/UploadFiles/upload-file.service';


@Component({
  selector: 'app-dialog-load-parcours',
  templateUrl: './dialog-load-parcours.component.html',
  styleUrls: ['./dialog-load-parcours.component.scss']
})
export class DialogLoadParcoursComponent implements OnInit{
  value = '';

  form: FormGroup;
  error: string;
  userId: number = 1;
  uploadResponse = { status: '', message: '', filePath: '' };

  constructor(private formBuilder: FormBuilder, private uploadService: UploadFileService,
    public electronService: ElectronService,
    public dialogRef: MatDialogRef<DialogLoadParcoursComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


    ngOnInit() {
      console.log("init");
      this.form = this.formBuilder.group({
        avatar: ['']
      });
    }

    onFileChange(event) {
      if (event.target.files.length > 0) {
        this.value = event.target.files[0];
        this.form.get('avatar').setValue(this.value);
      }
    }

    onSubmit() {
      console.log("submit");
      this.dialogRef.close(this.form.get('avatar').value);

      const formData = new FormData();
      formData.append('file', this.form.get('avatar').value);

      this.uploadService.upload(formData, this.userId).subscribe(
        (res) => this.uploadResponse = res,
        (err) => this.error = err
      );
      console.log(this.error);
      console.log(this.uploadResponse.filePath);
    }


    onNoClick(): void {
    this.dialogRef.close();
  }

  onLoad() {
    console.log('load');

    // let options = {
    //   // See place holder 1 in above image
    //   title : "Custom title bar",

    //   // See place holder 2 in above image
    //   defaultPath : "D:\\electron-app",

    //   // See place holder 3 in above image
    //   buttonLabel : "Custom button",

    //   // See place holder 4 in above image
    //   filters :[
    //    {name: 'Images', extensions: ['jpg', 'png', 'gif']},
    //    {name: 'Movies', extensions: ['mkv', 'avi', 'mp4']},
    //    {name: 'Custom File Type', extensions: ['as']},
    //    {name: 'All Files', extensions: ['*']}
    //   ],
    //   properties: ['openFile','multiSelections']
    //  }



this.electronService.remote.dialog.showOpenDialog({
      title: 'Select a file Gpx',
      properties: ['openFile']
    }, (filePath) => {
      if (filePath === undefined) {
        console.log("You didn't select a file");
        return;
      }
      console.log('file' + filePath);
    });
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
