import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../common/common.service';
import { MatDialog } from '@angular/material/dialog';
import { IssueDetailEditComponent } from './issue-detail-edit/issue-detail-edit.component';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrl: './issue-detail.component.scss'
})
export class IssueDetailComponent {

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
    public service: CommonService,
    public dialog: MatDialog
  ) {
    this.service.title = 'Issue Detail'
  }

  doEdit() {
    let dialogRef = this.dialog.open(IssueDetailEditComponent, {
      width: '90%',
      height: '90%',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  
}
