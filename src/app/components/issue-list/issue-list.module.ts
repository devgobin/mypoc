import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueListComponent } from './issue-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../common/shared/shared.module';

const routes: Routes = [
  {
    path: "",
    component: IssueListComponent,
  },
];

@NgModule({
  declarations: [
    IssueListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class IssueListModule { }
