import { Component, CUSTOM_ELEMENTS_SCHEMA, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSettingsService } from '../../../../common/services/app-settings/app-settings.service';
import { InitialDataService } from '../../../../common/services/initialData/initial-data.service';
import { CoreService } from '../../../../common/services/core/core.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InnerScroll, Row } from '../../../../app-core/core-component/core-component.component';
import { AppButton } from '../../../../app-core/core-component/core-directives.directive';
import { InputControlComponent } from '../../../../app-core/form-input/input-control/input-control.component';
import { AppTableComponent, CellDefDirective, CellHeaderDefDirective } from '../../../../app-core/template/app-table/app-table.component';
import { StatusTextComponent } from '../../../../common/templates/label-templates';
import { AppService } from '../../../../app.service';
import { ApplicationApiService } from '../../../../common/api-services/application-api/application-api.service';
import { DataService } from '../../../../common/services/data/data.service';
import { UrlService } from '../../../../common/services/url/url.service';
import { entInvestorPermitApplicationSearch, entPermitApplicationSearch } from '../../../../common/api-services/application-api/application-api.classes';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppAccessDirective } from '../../../../common/permission/app-access.directive';
import { AppSafePipe } from '../../../../common/pipes/app-safe/app-safe.pipe';
import { AppDatePipe } from "../../../../common/pipes/app-date/app-date.pipe";
import { TatUpdate } from '../../../../common/templates/tat-update';
import { PaymentGatewayApiService } from '../../../../common/api-services/payment-gateway-api/payment-gateway-api.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAlertComponent } from '../../../../app-core/delete-alert/delete-alert.component';
import { ButtonAccessDirective } from '../../../../common/permission/button-access.directive';
import { InvestorPermitDetailService } from '../../permit-service/investor-detail-service';
import { InvestorPermitSearchService } from '../../permit-service/investor-search-service';
import { ReuseStateService } from '../../../../common/services/reuse-state/reuse-state.service';

@Component({
  selector: 'app-investor-permit-search',
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
    TatUpdate,
    ButtonAccessDirective
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './investor-permit-search.component.html',
  styleUrl: './investor-permit-search.component.scss'
})
export class InvestorPermitSearchComponent {

  pageId = 'IPSSC';
  searchParamsRAW = ''
  activeList: any = []
  type = '';
  fileURL:any;
  screenName = '';

  categoriesColumns: any = ["permitApplicationNo","ibmsPermitRefNo","applicantName", "permitType","assignedToFullName","paymentDate", "paymentAmount", "status", "action",  "processPay"];
  categoriesColumnsName: any = ["Application No","Permit No","Applicant Name", "Permit Type","Assigned Officer", "Payment Date", "Payment Amount (FJD)", "Status", "Action", "" ];
  tableData: any=[];

  sortinvestorPermitRegColumns: any = ["permitApplicationNo","ibmsPermitRefNo","applicantName", "permitType","assignedToFullName", "paymentDate", "paymentAmount", "status"];

  @ViewChild('searchTemplate') searchTemplate!: any;

  pagination = {
    pageNumber: 1,
    pageSize: this.appSettingService.environment.pageSizeOptions[0],
    totalCount: 0,
  };

  @ViewChild('viewPermit', { static: false })
  viewPermit!: TemplateRef<any>;

  searchParams = new entInvestorPermitApplicationSearch();

  searchConfig:any = {};


  constructor(
    public initialData: InitialDataService,
    public appSettingService: AppSettingsService,
    public dialog: CoreService,
    public route: ActivatedRoute,
    public url: UrlService,
    public data: DataService,
    public apiService: ApplicationApiService,
    public router : Router,
    public appService: AppService,
    public paymentGatewayService: PaymentGatewayApiService,
    public dialogBox: MatDialog,
    public investorPermitSearchService: InvestorPermitSearchService,
    private reuseState: ReuseStateService
  ) {
    this.appService.helpFile = 'Investor%20Permit%20Search.pdf';
    this.reuseState.update.subscribe(() => {
      this.init();
    });
  }
  
  async init() {
    await this.data.checkToken();
    let id = this.route.snapshot.paramMap.get('id');
    let params: any = await this.url.decode(id);
    this.type = params;
    // console.log(this.type);
    await this.initialData.getDDL('getInvestorPermitApplicationInitialData');
    this.searchConfig = await this.investorPermitSearchService.getHelpConfig(this.type); 
    // console.log(this.searchConfig);
    
    this.createInvestorPermitApplication();
  }

  createInvestorPermitApplication() {
    this.apiService
      .createNewInvestorPermitApplicationSearch()
      .subscribe((success) => {
        this.searchParams = success;
        if (this.type !== 'APPEL') {
          this.searchParams.applicationCategoryValue = 'REGLR';
          this.searchParams.permitTypeValue = this.type;
          this.screenName = 'Investor Permit';
          this.searchParams.screenMenuName = 'APLIC';
        } else {
          this.searchParams.applicationCategoryValue = this.type;
          this.searchParams.permitTypeValue = 'INVPR';
          this.screenName = 'Appeal: Investor Permit';
          this.appService.helpFile = 'Appeal%20Investor%20Permit%20Search.pdf';
        }
        this.searchParams.pageNumber = this.pagination.pageNumber;
        this.searchParams.pageSize = this.pagination.pageSize;
        this.searchInvestorPermitApplication();
      });
  }

  searchInvestorPermitApplication() {
    this.apiService
      .searchInvestorPermitApplication(this.searchParams)
      .subscribe((success) => {
        this.tableData =
          success.plstentInvestorPermitApplicationSearchResultset;
          this.pagination.pageNumber = success.pageNumber;
          this.pagination.pageSize = success.pageSize;
          this.pagination.totalCount = success.totalCount;
        this.dialog.closeDialog();
      });
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

  onSingleSelected(id: any){
    this.activeList = [];
    this.activeList.push(id);
    this.openDetail();
  }

  async openDetail(){

    // if (this.activeList.length === 0) {
    //   this.activeList.push(id);
    // }

    const obj = {
      currentIndex: 0,
      array: this.activeList,
      type: this.type,
    };
    let urlJson = await this.url.encode(obj);
    this.router.navigateByUrl('/home/investor/investor-detail/' + urlJson);
  }

  printPermit(id:any){
    const obj = {
      data: id,
    };

    const options = {
      responseType: 'blob',
    };
    this.apiService.printPermitLetter(obj, options).subscribe((success)=>{
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

  downloadInvestorPermitApplicationSearchScreenResultData() {
    const options = {
      responseType: 'blob',
    };

    this.apiService
      .downloadInvestorPermitApplicationSearchScreenResultData(
        this.searchParams,
        options
      )
      .subscribe((success: any) => {
        const resp = new Blob([success.body], { type: success.body.type });
        const fileURL = URL.createObjectURL(resp);

        const downloadLink = document.createElement('a');
        downloadLink.href = fileURL;
        downloadLink.download = this.screenName + ' Report';
        downloadLink.click();
      });
  }


  sortChanged(event: any) {
    
    this.searchParams.isortcolumn = event.columnName;
    this.searchParams.isortorder = event.sortOrder;
    this.searchInvestorPermitApplication();

  }

  processPayment(elem:any){
    const dialogRef = this.dialogBox.open(DeleteAlertComponent, {
      width: '500px',
      data: {
        msg: `Are you sure, you have received the Payment for the Application No: ${elem.permitApplicationNo} and want to move it to Application in Progress Status?`,
        type: 'submitAlert',
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        const obj = {
          data: elem.permitApplicationId,
          data1: 'PERAP'
        }
        this.paymentGatewayService.initiatePaymentReceiptIfPaymentSuccessFromProvider(obj).subscribe((success)=>{
          this.clearAllSearch();
          this.data.successMessage(
            success.msg.infoMessage.msgDescription,
            'Success'
          );
        })
      }
    })
  }
}
