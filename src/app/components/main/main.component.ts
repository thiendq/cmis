import { Component, OnInit, NgModule, Optional, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { ApiService } from '../../api.service'

// import { BrowserModule } from '@angular/platform-browser'
// import { FormsModule, FormControl } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { from } from 'rxjs';

export interface UsersData {
  THANG: string;
  NAM: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  _thang: String;
  _nam: string;

  constructor(public dialog: MatDialog, public api: ApiService) { }
  ngOnInit(): void {
    this.getInfo();
  }
  title = 'mobile';

  getInfo() {
    this._thang = this.api.getMonth();
    this._nam = this.api.getYear();
    // this.api.currenThang.subscribe(Message => this._thang = Message);
    // this.api.currenNam.subscribe(Message => this._nam = Message);
    console.log("output:", this._thang, this._nam);
  }
  //Ham open dialog
  openDialog() {
    // obj.action = action;
    const dialogRef = this.dialog.open(dialogthongbaotComponent, {
      width: '280px',
      data: {
        THANG: this._thang,
        NAM: this._nam
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog output:", result.data);

      this.api.setMonth(result.data.THANG);
      this.api.setYear(result.data.NAM);
      this.getInfo();

      // this.api.strThang.next(result.data.THANG);
      // this.api.currenThang.subscribe(Message => this._thang = Message);
      // this.api.strNam.next(result.data.NAM);
      // this.api.currenNam.subscribe(Message => this._nam = Message);
      
      console.log("output:", this._thang, this._nam);
    });
  }
}

// Khai bao dialog
@Component({
  selector: 'dialog-capnhat',
  templateUrl: './dialog-thongbao.component.html'
})
export class dialogthongbaotComponent {
  action: string;
  local_data: any;
  constructor(public dialogRef: MatDialogRef<dialogthongbaotComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    // console.log(data);
    this.local_data = { ...data };
    // this.action = this.local_data.action;
  }
  doAction() {
    this.dialogRef.close({ data: this.local_data });
  }
  closeDialog() {
    this.dialogRef.close({ data: this.local_data });
  }
}
