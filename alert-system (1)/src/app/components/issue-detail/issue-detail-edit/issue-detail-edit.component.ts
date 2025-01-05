import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-issue-detail-edit',
  templateUrl: './issue-detail-edit.component.html',
  styleUrl: './issue-detail-edit.component.scss'
})
export class IssueDetailEditComponent {

  issueDetail = {
    refNo: 'VUE-001',
    status: 'Open',
    severity: 'Medium',
    category: 'A',
    assignee: 'Developer Team',
    alert: 'Lorem Ipsum',
    automation: 'Lorem Ipsum',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }
  
  constructor(
    public dialogRef: MatDialogRef<IssueDetailEditComponent>) { }

    doSave(l: NgForm){
      if(l.valid){
        this.dismiss();
      }
      else{
        alert('Enter mandatory fields')
      }
  }

  dismiss(){
    this.dialogRef.close();
  }

  doReset(){
    this.issueDetail = {
      refNo: 'VUE-001',
      status: 'Open',
      severity: 'Medium',
      category: 'A',
      assignee: 'Developer Team',
      alert: 'Lorem Ipsum',
      automation: 'Lorem Ipsum',
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more or less normal distribution of letters as opposed to using Content here content here making it look like readable English"
    }
  }
}
