import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSettingsService } from '../../../common/services/app-settings/app-settings.service';
import { CoreService } from '../../../common/services/core/core.service';
import { InitialDataService } from '../../../common/services/initialData/initial-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  InnerScroll,
  Row,
} from '../../../app-core/core-component/core-component.component';
import { AppButton } from '../../../app-core/core-component/core-directives.directive';
import { InputControlComponent } from '../../../app-core/form-input/input-control/input-control.component';
import {
  AppTableComponent,
  CellDefDirective,
  CellHeaderDefDirective,
} from '../../../app-core/template/app-table/app-table.component';
import { StatusTextComponent } from '../../../common/templates/label-templates';
import { AppService } from '../../../app.service';
import { entPermitApplicationSearch } from '../../../common/api-services/application-api/application-api.classes';
import { ApplicationApiService } from '../../../common/api-services/application-api/application-api.service';
import { DataService } from '../../../common/services/data/data.service';
import { UrlService } from '../../../common/services/url/url.service';
import { AppSafePipe } from '../../../common/pipes/app-safe/app-safe.pipe';
import { AppDatePipe } from '../../../common/pipes/app-date/app-date.pipe';
import { TatUpdate } from '../../../common/templates/tat-update';

@Component({
  selector: 'app-permit-application-list',
  standalone: true,
  imports: [
    InnerScroll,
    AppTableComponent,
    FormsModule,
    InputControlComponent,
    Row,
    CommonModule,
    AppButton,
    CellDefDirective,
    CellHeaderDefDirective,
    StatusTextComponent,
    AppSafePipe,
    AppDatePipe,
    TatUpdate
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './permit-application-list.component.html',
  styleUrl: './permit-application-list.component.scss',
})
export class PermitApplicationListComponent implements OnInit {
  type = [];
  screenName = '';
  activeList: any = [];
  fileURL: any;

  searchParams = new entPermitApplicationSearch();
  searchParamsRAW = new entPermitApplicationSearch();

  @ViewChild('searchTemplate') searchTemplate!: any;

  pagination = {
    pageNumber: 1,
    pageSize: this.appSettingService.environment.pageSizeOptions[0],
    totalCount: 0,
  };
  categoriesColumns: any = [
    'permitApplicationNo',
    'ibmsPermitRefNo',
    'applicantName',
    'permitType',
    'paymentDate',
    'startDate',
    'paymentAmount',
    'assignedOfficer',
    'status',
    'action',
  ];

  sortAgentRegColumns: any = [
    'permitApplicationNo',
    'ibmsPermitRefNo',
    'applicantName',
    'permitType',
    'paymentDate',
    'startDate',
    'paymentAmount',
    'assignedOfficer',
    'status',
  ];

  categoriesColumnsName: any = [
    'Application No',
    'Permit No',
    'Applicant Name',
    'Permit Type',
    'Payment Date',
    'Start Date',
    'Payment Amount (FJD)',
    'Payment Amount',
    'Status',
    'Action',

  ];
  tableData: any = [];

  @ViewChild('viewPermit', { static: false })
  viewPermit!: TemplateRef<any>;

  constructor(
    public initialData: InitialDataService,
    public appSettingService: AppSettingsService,
    public dialog: CoreService,
    public route: ActivatedRoute,
    public url: UrlService,
    public data: DataService,
    public apiService: ApplicationApiService,
    public router: Router,
    public appService: AppService,
    public urlService: UrlService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.init();
    });
  }
  ngOnInit(): void { }

  async init() {
    await this.data.checkToken();
    this.createPermitApplication();
    await this.initialData.getDDL('getPermitApplicationInitialData');
  }

  createPermitApplication() {
    this.apiService.createNewPermitApplicationSearch().subscribe((success) => {
      this.searchParams = success;
      this.searchParams.pageNumber = this.pagination.pageNumber;
      this.searchParams.pageSize = this.pagination.pageSize;
      this.searchScreenPermitApplication();
    });
  }

  searchScreenPermitApplication() {
    this.apiService
      .searchScreenPermitApplication(this.searchParams)
      .subscribe((success) => {
        this.tableData = success.plstentPermitApplicationSearchResultset;
        this.pagination.pageNumber = success.pageNumber;
        this.pagination.pageSize = success.pageSize;
        this.pagination.totalCount = success.totalCount;
        this.dialog.closeDialog();
      });
  }

  implementSearch() {
    this.searchParams.pageNumber = 1;
    this.searchScreenPermitApplication();
  }

  async openSearchTemplates() {
    let dialogResponse: any = await this.dialog.openDialog(
      this.searchTemplate,
      {
        disableClose: true,
        height: 'auto',
        width: '100%',
        maxWidth: '900px',
      }
    );
    if (dialogResponse) {
    }
  }


  clearAllSearch() {
    this.searchParams = JSON.parse(JSON.stringify(this.searchParamsRAW));
    this.searchParams.pageNumber = 1;
    this.searchParams.pageSize = this.appSettingService.environment.pageSizeOptions[0];
    this.pagination.pageNumber = 1;
    this.searchScreenPermitApplication()
  }

  pageChanged(event: any) {
    this.searchParams.pageNumber = event.pageNumber;
    this.searchParams.pageSize = event.pageSize;
    this.searchScreenPermitApplication();
  }

  printPermit(id: any) {
    const obj = {
      data: id,
    };

    const options = {
      responseType: 'blob',
    };
    this.apiService.printPermitLetter(obj, options).subscribe((success) => {
      const resp = new Blob([success.body], { type: success.body.type });
      this.fileURL = URL.createObjectURL(resp);
      const fileName = 'file';

      if (success.body.type === 'application/pdf') {
        const dialogRef = this.dialog.openDialog(this.viewPermit, {
          width: '90%',
          height: '85%',
        });
      }
    });
  }

  downloadPermitApplicationSearchScreenResultData() {
    const options = {
      responseType: 'blob',
    };

    this.apiService
      .downloadPermitApplicationSearchScreenResultData(this.searchParams, options)
      .subscribe((success: any) => {
        const resp = new Blob([success.body], { type: success.body.type });
        const fileURL = URL.createObjectURL(resp);

        const downloadLink = document.createElement('a');
        downloadLink.href = fileURL;
        downloadLink.download = 'Permit Application Report';
        downloadLink.click();
      });
  }

  onSelected(event: any) {
    this.activeList = event.array;
  }


  onSingleSelected(id: any) {
    this.activeList = [];
    this.activeList.push(id);
  }

  getInitialType(){
    
    this.type = this.activeList.map((id: any) => {
      const item = this.tableData.find((data: any) => data.permitApplicationId === id);
      return item.permitCategoryValue ? item.permitCategoryValue : '';
    });
  }

  openDetail(){
    this.getInitialType()
    // console.log(this.type);  
    if(this.type[0] === "INVPR"){
      this.openInvestorPermitScreen();
    }
    else{
      this.openWorkPermitScreen();
    }
  }


  async openWorkPermitScreen() {
    const obj = {
      currentIndex: 0,
      array: this.activeList,
      type: this.type,
    };
    let encodeId = await this.urlService.encode(obj);
    this.router.navigateByUrl(
      '/home/work-permit/common-permit-info/' + encodeId
    );
  }

  async openInvestorPermitScreen() {
    const obj = {
      currentIndex: 0,
      array: this.activeList,
      type: this.type,
    };
    let encodeId = await this.urlService.encode(obj);
    this.router.navigateByUrl('/home/investor/investor-detail/' + encodeId);
  }

  async openSingleWorkPermitScreen(id:any){
    this.activeList = [];
    this.activeList.push(id);

    const obj = {
      currentIndex: 0,
      array: this.activeList,
      type: [],
    };
    let encodeId = await this.urlService.encode(obj);
    this.router.navigateByUrl(
      '/home/work-permit/common-permit-info/' + encodeId
    );
  }

  async openSingleInvestorPermitScreen(id:any){
    this.activeList = [];
    this.activeList.push(id);

    const obj = {
      currentIndex: 0,
      array: this.activeList,
      type: [],
    };
    let encodeId = await this.urlService.encode(obj);
    this.router.navigateByUrl('/home/investor/investor-detail/' + encodeId);

  }

  async openAppealPermitScreen(id: any) {
    const arrayList = [];
    arrayList.push(id);

    const obj = {
      currentIndex: 0,
      array: arrayList,
      type: '',
    };
    let encodeId = await this.urlService.encode(obj);
    this.router.navigateByUrl('/home/appeal/appeal-detail/' + encodeId);
  }

  async openInvestorAppealPermitScreen(id: any) {
    const arrayList = [];
    arrayList.push(id);

    const obj = {
      currentIndex: 0,
      array: arrayList,
      type: '',
    };
    let encodeId = await this.urlService.encode(obj);
    this.router.navigateByUrl('/home/investor/investor-detail/' + encodeId);
  }

  sortChanged(event: any) {

    this.searchParams.isortcolumn = event.columnName;
    this.searchParams.isortorder = event.sortOrder;
    this.searchScreenPermitApplication();
  }

  printRejectPermit(id: any){
    const obj = {
      data: id
    }
    const options = {
      responseType: 'blob',
    };
    this.apiService.printRejectionLetter(obj, options).subscribe((success) => {
      const resp = new Blob([success.body], { type: success.body.type });
      this.fileURL = URL.createObjectURL(resp);
      const fileName = 'file'

      if (success.body.type === 'application/pdf') {
        const dialogRef = this.dialog.openDialog(this.viewPermit, {
          width: '90%',
          height: '85%',
        });
      }
    })
  }
}
