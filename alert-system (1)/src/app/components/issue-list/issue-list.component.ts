import { Component, ViewChild } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../common/api-config/api-service.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.scss'
})
export class IssueListComponent {
  sampleData = [
    { no: 'VUE-001', link: 'VUE-001', summary: 'Issue Description', assignee: 'Alen Marker', status: 'Open' },
    { no: 'VUE-001', link: 'VUE-001', summary: 'Lorem Ipsum is simply dummy text of the printing', assignee: 'Alen Marker', status: 'In-Progress' },
    { no: 'VUE-001', link: 'VUE-001', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', assignee: 'Alen Marker', status: 'Rejected' },
    { no: 'VUE-001', link: 'VUE-001', summary: 'Issue Description', assignee: 'Alen Marker', status: 'Open' },
    { no: 'VUE-001', link: 'VUE-001', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', assignee: 'Alen Marker', status: 'Closed' },
    { no: 'VUE-001', link: 'VUE-001', summary: 'Lorem Ipsum is simply dummy text of the printing', assignee: 'Alen Marker', status: 'In-Progress' },
    { no: 'VUE-001', link: 'VUE-001', summary: 'Issue Description', assignee: 'Alen Marker', status: 'Open' },
    { no: 'VUE-001', link: 'VUE-001', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', assignee: 'Alen Marker', status: 'In-Progress' },
    { no: 'VUE-001', link: 'VUE-001', summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', assignee: 'Alen Marker', status: 'In-Progress' },
    { no: 'VUE-001', link: 'VUE-001', summary: 'Issue Description', assignee: 'Alen Marker', status: 'Open' },
    { no: 'VUE-001', link: 'VUE-001', summary: 'Lorem Ipsum is simply dummy text of the printing', assignee: 'Alen Marker', status: 'Closed' },
    { no: 'VUE-001', link: 'VUE-001', summary: 'Issue Description', assignee: 'Alen Marker', status: 'Open' },
  ]
  displayedColumns = ['no', 'link', 'summary', 'assignee', 'status'];
  dataSource: any = new MatTableDataSource(this.sampleData);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    public service: CommonService,
    public router: Router,
    public apiService: ApiServiceService
  ) {
    this.service.title = 'Issues List'
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onEdit(element: any) {
    this.router.navigateByUrl("/home/issue-detail");
    this.getData(); //*********************************test api */
  }

  getData() { 
    this.apiService.getIssues().subscribe((success: any) => {
      console.log(success);
      this.service.openSnackBar('Data retreived successfully')
    });
  }
}
