import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-kx-info-dialog',
  templateUrl: './kx-info-dialog.component.html',
  styleUrls: ['./kx-info-dialog.component.css']
})
export class KxInfoDialogComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<KxInfoDialogComponent>,
               @Inject(MAT_DIALOG_DATA) private data: string 
             ) 
  { }

  ngOnInit() {
    //this.changePosition();
  }

  onCloseConfirm() {
    this.dialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }

  changePosition() {
    this.dialogRef.updatePosition({ top: '50px', left: '50px' });
  }
}
