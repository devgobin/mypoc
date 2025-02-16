import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationApiService } from '../../../../common/api-services/application-api/application-api.service';
import { AppSettingsService } from '../../../../common/services/app-settings/app-settings.service';
import { CoreService } from '../../../../common/services/core/core.service';
import { DataService } from '../../../../common/services/data/data.service';
import { InitialDataService } from '../../../../common/services/initialData/initial-data.service';
import { entBasedOnBothProviderTypeAnddate, entBasedOnProviderTypeAndDate } from '../../../../common/api-services/application-api/application-api.classes';
import { FormsModule } from '@angular/forms';
import { InnerScroll, Row } from '../../../../app-core/core-component/core-component.component';
import { AppButton } from '../../../../app-core/core-component/core-directives.directive';
import { InputControlComponent } from '../../../../app-core/form-input/input-control/input-control.component';
import { AppTableComponent, CellDefDirective, CellHeaderDefDirective } from '../../../../app-core/template/app-table/app-table.component';
import { DocumentsComponent } from '../../../../app-core/template/documents/documents.component';
import { AppDatePipe } from '../../../../common/pipes/app-date/app-date.pipe';
import { AppSafePipe } from '../../../../common/pipes/app-safe/app-safe.pipe';
import { LabelTemplates, StatusTextComponent } from '../../../../common/templates/label-templates';
import { UrlService } from '../../../../common/services/url/url.service';
import { EmptyStateComponent } from '../../../../common/templates/empty-state';

@Component({
  selector: 'app-internal-finance-reports',
  standalone: true,
  imports: [InnerScroll, AppTableComponent, LabelTemplates, 
    AppButton, CellDefDirective, CellHeaderDefDirective, 
    Row, InputControlComponent, FormsModule, AppSafePipe, 
    EmptyStateComponent,
    StatusTextComponent, AppDatePipe,DocumentsComponent,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './internal-finance-reports.component.html',
  styleUrl: './internal-finance-reports.component.scss'
})
export class InternalFinanceReportsComponent implements OnInit {

  paymentColumns: any = ["permitApplicationNo", 'applicantName', 'employerInidividual', 'payTransNo', 'walletBank', 'transAmt','transFee','totalTransAmt', 'transInitiTime']
  paymentColumnName: any = ["Permit Application No", 'Applicant Name', 'Employer Individual Name', 'Payment Transaction No', 'Wallet Bank', 'Provider Transaction Amount', 'Transaction Initiation Time']

  errorTrue = false;
  startDate = '';
  endDate = '';

  providerTypeParams = new entBasedOnBothProviderTypeAnddate();
  providerTypeDupliParams = new entBasedOnBothProviderTypeAnddate();
  exportExcelParams = new entBasedOnProviderTypeAndDate()

  constructor(
    public router: Router,
    public dialog: CoreService,
    public appSettingService: AppSettingsService,
    public initialData: InitialDataService,
    public data: DataService,
    public apiService: ApplicationApiService,
    public url: UrlService
  ) {
  }

  ngOnInit(): void {
    this.init()
  }

  async init() {
    await this.data.checkToken();
    // this.providerTypeParams.lstentBasedOnProviderTypeAndDate = []
  }

  loadProviderTypeData(l:any) {
    if(l.valid){
      this.errorTrue = false;
      const obj = {
        data1: this.startDate,
        data2: this.endDate
      }
      this.apiService.getSummaryReportForTransactionAmount(obj).subscribe((success)=>{
        this.providerTypeParams = success;
      })
    }
    else{
      this.errorTrue = true;
    }
  }

  clearAllSearch() {
   this.startDate = '';
   this.endDate = '';
   this.providerTypeParams = this.providerTypeDupliParams;
  }

  exportExcel(){
    this.exportExcelParams.startDate = this.startDate;
    this.exportExcelParams.endDate = this.endDate
    const options = {
      responseType: 'blob',
    };

    this.apiService
      .downloadSummaryReportForTransactionAmount(
        this.exportExcelParams,
        options
      )
      .subscribe((success: any) => {
        const resp = new Blob([success.body], { type: success.body.type });
        const fileURL = URL.createObjectURL(resp);

        const downloadLink = document.createElement('a');
        downloadLink.href = fileURL;
        downloadLink.download = 'Summary Report';
        downloadLink.click();
      });
  }

  async navSummaryDetail(date:any){
    const encodeUrl = await this.url.encode(date);
    this.router.navigateByUrl('/home/report/summary-detail-report/' + encodeUrl)
  }

  // openDocumentFile(val:any, ) {
  //  this.resultset = val;
  //   const obj = {
  //     data: val.offlinePaymentTransactionId
  //   }
  //   this.apiService.openOfflinePaymentTransaction(obj).subscribe((success) => {
  //     this.offlinePaymentTransaction = success;
  //     this.openDocumentTemplates();
  //   })
  // }



  // async openDocumentTemplates() {
  //   let dialogResponse: any = await this.dialog.openDialog(this.documentView, {
  //     disableClose: true,
  //     height: '620px',
  //     width: '95%',
  //     maxWidth: '1280px',
  //   });
  // }

  // async openSearchTemplates() {
  //   let dialogResponse: any = await this.dialog.openDialog(this.paymentSearch, {
  //     disableClose: true,
  //     height: 'auto',
  //     width: '100%',
  //     maxWidth: '900px',
  //   });
  //   if (dialogResponse) {

  //   }
  // }

  // generateReceipt(val:any){
  //   const obj = {
  //     data : val.pentReceipt.receiptId,
  //     data1 : 'FINCY'
  //   }
  //   const options = {
  //     responseType: 'blob'
  //   }
  //   let fileName = val.pentDocumentFile.documentFileName;
  //   this.apiService.generatePaymentTransactionReceipt(obj, options).subscribe((success)=>{
  //     const resp = new Blob([success.body], { type: success.body.type });
  //     const fileURL = URL.createObjectURL(resp);
  //     if (success.body.type === 'application/pdf') {
  //       this.docURL = fileURL;
  //       // this.openDocumentTemplates1();
  //       this.document.openPDFViewer(fileURL);
  //     } else if (success.body.type.includes('image')) {
  //       this.document.imageView(fileURL, fileName);
  //     } else {
  //       this.document.download();
  //     }
  //   })
  // }

  // makePaymentScreen() {
  //   this.router.navigateByUrl('/home/employer-application/payment/makepayment');
  // }

}
