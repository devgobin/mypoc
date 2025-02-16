import { Component, CUSTOM_ELEMENTS_SCHEMA, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../../../app.service';
import { entPermitApplicationSearch } from '../../../../../common/api-services/application-api/application-api.classes';
import { ApplicationApiService } from '../../../../../common/api-services/application-api/application-api.service';
import { AppSettingsService } from '../../../../../common/services/app-settings/app-settings.service';
import { CoreService } from '../../../../../common/services/core/core.service';
import { DataService } from '../../../../../common/services/data/data.service';
import { InitialDataService } from '../../../../../common/services/initialData/initial-data.service';
import { UrlService } from '../../../../../common/services/url/url.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InnerScroll, Row } from '../../../../../app-core/core-component/core-component.component';
import { AppButton } from '../../../../../app-core/core-component/core-directives.directive';
import { InputControlComponent } from '../../../../../app-core/form-input/input-control/input-control.component';
import { AppTableComponent, CellDefDirective, CellHeaderDefDirective } from '../../../../../app-core/template/app-table/app-table.component';
import { AppAccessDirective } from '../../../../../common/permission/app-access.directive';
import { AppSafePipe } from '../../../../../common/pipes/app-safe/app-safe.pipe';
import { StatusTextComponent } from '../../../../../common/templates/label-templates';
import { AppDatePipe } from "../../../../../common/pipes/app-date/app-date.pipe";
import { TatUpdate } from '../../../../../common/templates/tat-update';

@Component({
  selector: 'app-view-investor-permit-search',
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
    MatTooltipModule,
    AppSafePipe,
    AppAccessDirective,
    AppDatePipe,
    TatUpdate
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './view-investor-permit-search.component.html',
  styleUrl: './view-investor-permit-search.component.scss'
})
export class ViewInvestorPermitSearchComponent {
  searchParamsRAW = ''
  activeList: any = []
  type = '';
  fileURL:any;
  screenName = '';

  categoriesColumns: any = ["permitApplicationNo", "applicantName", "permitType","paymentDate", "paymentAmount", "status", "action"];
  sortinvestorPermitRegColumns: any = ["permitApplicationNo", "applicantName", "permitType", "paymentDate", "paymentAmount", "status"];
  categoriesColumnsName: any = ["Application No", "Applicant Name", "Permit Type", "Payment Date", "Payment Amount (FJD)", "Status", "Action"];
  tableData: any=[];

  @ViewChild('searchTemplate') searchTemplate!: any;

  pagination = {
    pageNumber: 1,
    pageSize: this.appSettingService.environment.pageSizeOptions[0],
    totalCount: 0
  }

  @ViewChild('viewPermit', { static: false })
  viewPermit!: TemplateRef<any>;

  searchParams = new entPermitApplicationSearch();


  constructor(
    public initialData: InitialDataService,
    public appSettingService: AppSettingsService,
    public dialog: CoreService,
    public route: ActivatedRoute,
    public url: UrlService,
    public data: DataService,
    public apiService: ApplicationApiService,
    public router : Router,
    public appService: AppService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.init();
    });
  }
  
  async init() {
    await this.data.checkToken();
    this.createInvestorPermitApplication();
    await this.initialData.getDDL('getInvestorPermitApplicationInitialData');
    this.screenName = 'View Investor Permit'
  }

  createInvestorPermitApplication(){
    this.apiService.createNewInvestorPermitApplicationSearch().subscribe((success)=>{
      this.searchParams = success;
      this.searchParams.statusValue = 'APPRV';
      this.searchParams.screenMenuName = 'PERMT';
      this.searchParams.permitCategoryValue = 'INVPR';
      this.searchParams.pageNumber = this.pagination.pageNumber;
      this.searchParams.pageSize = this.pagination.pageSize;
      this.searchInvestorPermitApplication();
    })
  }

  searchInvestorPermitApplication(){
    this.apiService.searchInvestorPermitApplication(this.searchParams).subscribe((success)=>{
       this.tableData = success.plstentInvestorPermitApplicationSearchResultset;
       this.pagination.pageNumber = success.pageNumber;
       this.pagination.pageSize = success.pageSize;
       this.pagination.totalCount = success.totalCount;
       this.dialog.closeDialog();
    })
  }

  implementSearch() {
    this.searchParams.pageNumber = 1;
    this.searchInvestorPermitApplication();
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
    this.pagination = {
      pageNumber: 1,
      pageSize: this.appSettingService.environment.pageSizeOptions[0],
      totalCount: 0,
    };
    this.createInvestorPermitApplication();
  }

  pageChanged(event: any) {
    this.searchParams.pageNumber = event.pageNumber;
    this.searchParams.pageSize = event.pageSize;
    this.searchInvestorPermitApplication();
  }

  onSelected(event: any) {
    this.activeList = event.array;
  }


  async openDetail() {
    const obj = {
      currentIndex: 0,
      array: this.activeList
    }
    let encodeId = await this.url.encode(obj);
    this.router.navigateByUrl('/home/investor/view-investor/detail/' + encodeId);
  }

  onSingleSelected(id: any) {
    this.activeList = [];
    this.activeList.push(id);
    this.openDetail();
  }

  printPermit(id:any){
    const obj = {
      data: id
    }
    
    const options = {
      responseType: 'blob',
    };
    this.apiService.printPermitLetter(obj, options).subscribe((success)=>{
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

  downloadWorkPermitSearchScreenResultData() {
    const options = {
      responseType: 'blob',
    };

    this.apiService
      .downloadWorkPermitSearchScreenResultData(this.searchParams, options)
      .subscribe((success: any) => {
        const resp = new Blob([success.body], { type: success.body.type });
        const fileURL = URL.createObjectURL(resp);

        const downloadLink = document.createElement('a');
        downloadLink.href = fileURL;
        downloadLink.download = 'View Permit Report';
        downloadLink.click();
      });
  }

  sortChanged(event: any) {
    this.searchParams.isortcolumn = event.columnName;
    this.searchParams.isortorder = event.sortOrder;
    this.searchInvestorPermitApplication();

  }
}
