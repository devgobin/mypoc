import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AppButton } from '../../../app-core/core-component/core-directives.directive';
import {
  AppTableComponent,
  CellDefDirective,
  CellHeaderDefDirective,
} from '../../../app-core/template/app-table/app-table.component';
import {
  InnerScroll,
  Row,
} from '../../../app-core/core-component/core-component.component';
import { CoreService } from '../../../common/services/core/core.service';
import { FormsModule } from '@angular/forms';
import { InputControlComponent } from '../../../app-core/form-input/input-control/input-control.component';
import { StatusTextComponent } from '../../../common/templates/label-templates';
import { InitialDataService } from '../../../common/services/initialData/initial-data.service';
import { AppSettingsService } from '../../../common/services/app-settings/app-settings.service';
import { DataService } from '../../../common/services/data/data.service';
import { ApplicationApiService } from '../../../common/api-services/application-api/application-api.service';
import { AppDatePipe } from '../../../common/pipes/app-date/app-date.pipe';
import { Router } from '@angular/router';
import { UrlService } from '../../../common/services/url/url.service';
import { AdminApiService } from '../../../common/api-services/admin-api/admin-api.service';
import {
  entWorkflowSearch,
  entWorkflowSearchResult,
} from '../../../common/api-services/admin-api/admin-api.classes';
import { AppService } from '../../../app.service';
import { entWorkflowSearchForApplication, entWorkflowSearchResultForApplication } from '../../../common/api-services/application-api/application-api.classes';

@Component({
  selector: 'app-my-task-workflow-list',
  standalone: true,
  templateUrl: './my-task-workflow-list.component.html',
  styleUrl: './my-task-workflow-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    AppButton,
    AppTableComponent,
    InnerScroll,
    FormsModule,
    Row,
    InputControlComponent,
    CellDefDirective,
    CellHeaderDefDirective,
    StatusTextComponent,
    AppDatePipe,
  ],
})
export class MyTaskWorkflowListComponent implements OnInit {

  pagination = {
    pageNumber: 1,
    pageSize: this.appSettingService.environment.pageSizeOptions[0],
    totalCount: 0,
  };

  searchParams = new entWorkflowSearchForApplication();
  searchParamsRAW = new entWorkflowSearchForApplication();
  successLst = new entWorkflowSearchResultForApplication();
  activeList: any = [];

  myTaskColumns: any = [
    'workflowName',
    'sourceName',
    'stepName',
    'assignedDateTime',
    'completedTatInWords',
    'action',
  ];

  sortAgentRegColumns: any = ["workflowName", "sourceName", "stepName", "assignedDateTime", "workflowName"];

  myTaskColumnsName: any = [
    'Workflow No ',
    'Source Name',
    'Current Task',
    'Assigned Date ',
    'Remaining TAT',
    'Action',
  ];

  tableMyTaskData: any = [];
  @ViewChild('mytaskSearchTemplate') mytaskSearchTemplate!: any;

  options = {
    type: 'adminPath',
  };

  constructor(
    public dialog: CoreService,
    public initialData: InitialDataService,
    public appSettingService: AppSettingsService,
    public data: DataService,
    public appService: AppService,
    public router: Router,
    public urlService: UrlService,
    public adminService: AdminApiService,
    public apiService: ApplicationApiService
  ) {
    this.appService.helpFile = 'My%20Task_Workflow%20List.pdf';
  }

  ngOnInit() {
    this.init();
  }

  async init() {
    await this.data.checkToken();
    await this.initialData.getAdminDDL('getWorkflowRuntimeInitialData');
    this.createNewWorkflowSearch();
  }

  createNewWorkflowSearch() {
    this.adminService
      .createNewWorkflowSearch(this.options)
      .subscribe((success) => {
        this.searchParams = success;
        this.searchParams.statusValue = 'INPRG';
        this.pagination.pageNumber = 1;
        this.searchParams.istrSortOrder = true;
        this.searchParams.pageNumber = this.pagination.pageNumber;
        this.searchParams.pageSize = this.pagination.pageSize;
        this.searchParamsRAW = JSON.parse(JSON.stringify(this.searchParams));
        this.searchParams.assignedTo = this.appService.userData.userLoginId;
        this.searchWorkFlow();
      });
  }

  implementsearch() {
    this.searchParams.pageNumber = 1;
    this.pagination.pageNumber = this.searchParams.pageNumber;
    this.searchWorkFlow();
  }

  searchWorkFlow() {
    this.apiService
      .searchWorkFlow(this.searchParams, this.options)
      .subscribe((success) => {
        this.successLst = success;
        this.pagination.pageNumber = success.pageNumber;
        this.pagination.pageSize = success.pageSize;
        this.pagination.totalCount = success.totalCount;
        this.dialog.closeDialog();
      });
  }

  clearAllSearch() {
    this.pagination = {
      pageNumber: 1,
      pageSize: this.appSettingService.environment.pageSizeOptions[0],
      totalCount: 0,
    };
    this.createNewWorkflowSearch();
  }

  pageChanged(event: any) {
    this.searchParams.pageNumber = event.pageNumber;
    this.searchParams.pageSize = event.pageSize;
    this.searchWorkFlow();
  }

  onSelected(event: any) {
    this.activeList = event.array;
  }

  async openSearchTemplates() {
    let dialogResponse: any = await this.dialog.openDialog(
      this.mytaskSearchTemplate,
      {
        disableClose: true,
        height: 'auto',
        width: '100%',
        maxWidth: '650px',
      }
    );
    if (dialogResponse) {
    }
  }

  async openAgentSearch(id: any) {
    const arrayList = [];
    arrayList.push(id);

    const obj = {
      currentIndex: 0,
      array: arrayList,
    };
    let encodeId = await this.urlService.encode(obj);
    this.router.navigateByUrl(
      '/home/registration/agent/agent_registration_detail/' + encodeId
    );
  }

  async openEmployerSearch(id: any) {
    const arrayList = [];
    arrayList.push(id);

    const obj = {
      currentIndex: 0,
      array: arrayList,
    };
    let encodeId = await this.urlService.encode(obj);
    this.router.navigateByUrl(
      '/home/registration/employer/employer_registration_detail/' + encodeId
    );
  }

  async openWorkPermitScreen(id: any) {
    const arrayList = [];
    arrayList.push(id);

    const obj = {
      currentIndex: 0,
      array: arrayList,
      type: []
    };
    let encodeId = await this.urlService.encode(obj);
    this.router.navigateByUrl(
      '/home/work-permit/common-permit-info/' + encodeId
    );
  }

  async openInvestorPermitScreen(id: any) {
    const arrayList = [];
    arrayList.push(id);

    const obj = {
      currentIndex: 0,
      array: arrayList,
      type: []
    };
    let encodeId = await this.urlService.encode(obj);
    this.router.navigateByUrl(
      '/home/investor/investor-detail/' + encodeId
    );
  }

  async openVisitorsPermitScreen(id: any) {
    const arrayList = [];
    arrayList.push(id);

    const obj = {
      currentIndex: 0,
      array: arrayList,
      type: []
    };
    let encodeId = await this.urlService.encode(obj);
    this.router.navigateByUrl(
      '/home/visitor-visa/visitor-visa-detail/' + encodeId
    );
  }
  async openStudyPermitScreen(id: any) {
    const arrayList = [];
    arrayList.push(id);

    const obj = {
      currentIndex: 0,
      array: arrayList,
      type: []
    };
    let encodeId = await this.urlService.encode(obj);
    this.router.navigateByUrl(
      '/home/study-permit/study-permit-detail/' + encodeId
    );
  }
  async openResidentPermitScreen(id: any) {
    const arrayList = [];
    arrayList.push(id);

    const obj = {
      currentIndex: 0,
      array: arrayList,
      type: []
    };
    let encodeId = await this.urlService.encode(obj);
    this.router.navigateByUrl(
      '/home/resident-permit/resident-permit-detail/' + encodeId
    );
  }

  async openEmbassyRegScreen(id:any){
    const arrayList = [];
    arrayList.push(id);

    const obj = {
      currentIndex: 0,
      array: arrayList,
      type: []
    };
    let encodeId = await this.urlService.encode(obj);
    this.router.navigateByUrl(
      '/home/registration/embassy/embassy_registration_detail/' + encodeId
    );
  }

  sortChanged(event: any) {

    this.searchParams.istrSortColumn = event.columnName;
    this.searchParams.istrSortOrder = event.sortOrder;
    this.searchWorkFlow();

  }
}
