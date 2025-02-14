import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueDetailComponent } from './issue-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../common/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { IssueDetailEditComponent } from './issue-detail-edit/issue-detail-edit.component';

const routes: Routes = [
  {
    path: "",
    component: IssueDetailComponent,
  },
];

@NgModule({
  declarations: [
    IssueDetailComponent,
    IssueDetailEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule
  ]
})
export class IssueDetailModule { }
