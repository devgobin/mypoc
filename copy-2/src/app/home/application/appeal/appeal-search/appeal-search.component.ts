import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationApiService } from '../../../../common/api-services/application-api/application-api.service';
import { AppSettingsService } from '../../../../common/services/app-settings/app-settings.service';
import { CoreService } from '../../../../common/services/core/core.service';
import { DataService } from '../../../../common/services/data/data.service';
import { InitialDataService } from '../../../../common/services/initialData/initial-data.service';
import { UrlService } from '../../../../common/services/url/url.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  InnerScroll,
  Row,
} from '../../../../app-core/core-component/core-component.component';
import { AppButton } from '../../../../app-core/core-component/core-directives.directive';
import { InputControlComponent } from '../../../../app-core/form-input/input-control/input-control.component';
import {
  AppTableComponent,
  CellDefDirective,
  CellHeaderDefDirective,
} from '../../../../app-core/template/app-table/app-table.component';
import { AppDatePipe } from '../../../../common/pipes/app-date/app-date.pipe';
import { StatusTextComponent } from '../../../../common/templates/label-templates';
import {
  entPermitApplicationSearch,
  entPermitApplicationSearchResult,
} from '../../../../common/api-services/application-api/application-api.classes';

@Component({
  selector: 'app-appeal-search',
  standalone: true,
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './appeal-search.component.html',
  styleUrl: './appeal-search.component.scss',
})
export class AppealSearchComponent implements OnInit {
  @ViewChild('appealSearch') appealSearch!: any;
  searchParams = new entPermitApplicationSearch();
  searchParamsRAW = new entPermitApplicationSearch();
  appealSearchResult = new entPermitApplicationSearchResult();

  activeList: any = [];

  pagination = {
    pageNumber: 1,
    pageSize: this.appSettingService.environment.pageSizeOptions[0],
    totalCount: 0,
  };

  appealColumn: any = [
    'applicationNo',
    'applicantName',
    'permitTypeDescription',
    'paymentDate',
    'paymentAmount',
    'statusDescription',
    'action',
  ];
  appealColumnName: any = [
    'Application No',
    'Applicant Name',
    'Permit Type',
    'Payment Date',
    'Payment Amount',
    'Status',
    'Action',
  ];

  constructor(
    public dialog: CoreService,
    public appSettingService: AppSettingsService,
    public initialData: InitialDataService,
    public data: DataService,
    public router: Router,
    public apiService: ApplicationApiService,
    public urlService: UrlService,
    public appSetting: AppSettingsService
  ) {}

  ngOnInit(): void {
    this.init();
  }

  async init() {
    await this.data.checkToken();
    await this.initialData.getDDL('getappealapplicationsearchinitialdata');
    this.getappealapplicationsearch();
  }
  getappealapplicationsearch() {
    this.apiService.getappealapplicationsearch().subscribe((success) => {
      this.searchParams = success;
      this.pagination.pageNumber = 1;
      this.searchParams.pageNumber = this.pagination.pageNumber;
      this.searchParams.pageSize = this.pagination.pageSize;
      this.searchParamsRAW = JSON.parse(JSON.stringify(this.searchParams));
      this.searchappealapplication();
    });
  }
  searchappealapplication() {
    this.apiService
      .searchappealapplication(this.searchParams)
      .subscribe((success: any) => {
        this.appealSearchResult = success;
        this.pagination.pageNumber = success.pageNumber;
        this.pagination.pageSize = success.pageSize;
        this.pagination.totalCount = success.totalCount;
      });
  }

  implementSearch() {
    this.searchParams.pageNumber = 1;
    this.pagination.pageNumber = this.searchParams.pageNumber;
    this.searchappealapplication();
    this.dialog.closeDialog();
  }

  // openViewPermitDetail(permitApplicationId : any) {
  //   const obj = {
  //     data: permitApplicationId
  //   }
  // }

  clearAllSearch() {
    this.searchParams = JSON.parse(JSON.stringify(this.searchParamsRAW));
    this.searchParams.pageNumber = 1;
    this.searchParams.pageSize =
      this.appSettingService.environment.pageSizeOptions[0];
    this.pagination.pageNumber = 1;
    this.searchappealapplication();
  }
  pageChanged(event: any) {
    this.searchParams.pageNumber = event.pageNumber;
    this.searchParams.pageSize = event.pageSize;
    this.searchappealapplication();
  }

  onSelected(event: any) {
    this.activeList = event.array;
  }

  async openSearchTemplates() {
    let dialogResponse: any = await this.dialog.openDialog(this.appealSearch, {
      disableClose: true,
      height: 'auto',
      width: '100%',
      maxWidth: '900px',
    });
    if (dialogResponse) {
    }
  }

  async openAppealDetail(id: any, type: any) {
    const obj = {
      parentId: 0,
      type: type,
    };
    let urlJson = await this.urlService.encode(obj);
    this.router.navigateByUrl('/home/appeal/appeal-detail/' + urlJson);
  }
}
