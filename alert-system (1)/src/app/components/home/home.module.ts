import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { IssueListModule } from '../issue-list/issue-list.module';
import { IssueDetailModule } from '../issue-detail/issue-detail.module';
import { FooterModule } from '../../initial/footer/footer.module';
import { HeaderModule } from '../../initial/header/header.module';
import { SharedModule } from '../../common/shared/shared.module';
import { LoaderModule } from '../../common/loader/loader.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import(
            '../dashboard/dashboard.module'
          ).then((m) => m.DashboardModule),
      },
      {
        path: 'issue-list',
        loadChildren: () => 
          import(
            '../issue-list/issue-list.module'
          ).then((m) => IssueListModule)
      },
      {
        path: 'issue-detail',
        loadChildren: () => 
          import(
            '../issue-detail/issue-detail.module'
          ).then((m) => IssueDetailModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    FooterModule,
    SharedModule,
    LoaderModule
  ],
  exports: [RouterModule],
})
export class HomeModule { }
