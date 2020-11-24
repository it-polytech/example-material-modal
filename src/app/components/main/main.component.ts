import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  style = {
    wrapper: {
      'text-align':'center',
      'margin-top':'30px'
    },
    button: {
      'height':'50px',
      'width':'150px'
    }
  }

  constructor( private matDialog: MatDialog ) {  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { name: "CiccioFranco"};
    this.matDialog.open( DialogBodyComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

}
