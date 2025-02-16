import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InnerScroll, Row } from '../../../../app-core/core-component/core-component.component';
import { AppButton } from '../../../../app-core/core-component/core-directives.directive';
import { InputControlComponent } from '../../../../app-core/form-input/input-control/input-control.component';
import { AppTableComponent, CellDefDirective, CellHeaderDefDirective } from '../../../../app-core/template/app-table/app-table.component';
import { DocumentsComponent } from '../../../../app-core/template/documents/documents.component';
import { AppDatePipe } from '../../../../common/pipes/app-date/app-date.pipe';
import { AppSafePipe } from '../../../../common/pipes/app-safe/app-safe.pipe';
import { LabelTemplates, StatusTextComponent } from '../../../../common/templates/label-templates';
import { ActivatedRoute, Router } from '@angular/router';
import { entDetailForProviderTypeAndDate, entDetailForProviderTypeAndDateList } from '../../../../common/api-services/application-api/application-api.classes';
import { ApplicationApiService } from '../../../../common/api-services/application-api/application-api.service';
import { AppSettingsService } from '../../../../common/services/app-settings/app-settings.service';
import { CoreService } from '../../../../common/services/core/core.service';
import { DataService } from '../../../../common/services/data/data.service';
import { InitialDataService } from '../../../../common/services/initialData/initial-data.service';
import { UrlService } from '../../../../common/services/url/url.service';

@Component({
  selector: 'app-internal-finance-detail-report',
  standalone: true,
  imports: [InnerScroll, AppTableComponent, LabelTemplates, 
    AppButton, CellDefDirective, CellHeaderDefDirective, 
    Row, InputControlComponent, FormsModule, AppSafePipe,
    StatusTextComponent, AppDatePipe,DocumentsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './internal-finance-detail-report.component.html',
  styleUrl: './internal-finance-detail-report.component.scss'
})
export class InternalFinanceDetailReportComponent {

  paymentColumns: any = ["permitApplicationNo", 'applicantName', 'employerIndividualName', 'paymentTransactionNo', 'walletBank','provider', 'transactionAmount','transactionFees', 'totalTransactionAmount', 'transactionInitiationTime']
  paymentColumnName: any = ["Permit Application No", 'Applicant Name', 'Employer Individual Name', 'Payment Transaction No', 'Wallet Bank', 'Provider', 'Transaction Amount','Transaction Fee','Total Transaction Amount', 'Transaction Initiation Time']

  errorTrue = false;
  startDate = '';
  endDate = '';
  date = '';
  providerTypeValue = '';


  providerTypeDetailParams = new entDetailForProviderTypeAndDateList();
  providerTypeDetailDupliParams = new entDetailForProviderTypeAndDateList();
  exportExcelParams = new entDetailForProviderTypeAndDate()

  constructor(
    public router: Router,
    public dialog: CoreService,
    public appSettingService: AppSettingsService,
    public initialData: InitialDataService,
    public data: DataService,
    public apiService: ApplicationApiService,
    public route: ActivatedRoute,
    public url: UrlService
  ) {
    this.clearAllSearch()
  }
  
  ngOnInit(): void {
    this.init()
  }

  async init() {
    await this.data.checkToken();
    let paramsId = this.route.snapshot.paramMap.get('id');
    let date: any = await this.url.decode(paramsId);
    await this.initialData.getDDL('getSummaryReportInitialData');

    if(date !== ''){
      this.startDate = date;
      this.endDate = date;
      this.getSummaryDetail()
    }
  }

  getSummaryDetail(){
    const obj = {
      data1: this.startDate,
      data2: this.endDate,
    }
    this.apiService.getSummaryReportDetailForTransactionAmount(obj).subscribe((success)=>{
      this.providerTypeDetailParams = success;
    })
  }

  loadProviderTypeData(l:any) {
    if(l.valid){
      this.errorTrue = false;
      const obj = {
        data1: this.startDate,
        data2: this.endDate,
        data3: this.providerTypeValue
      }
      this.apiService.getSummaryReportDetailForTransactionAmount(obj).subscribe((success)=>{
        this.providerTypeDetailParams = success;
      })
    }
    else{
      this.errorTrue = true;
    }
  }

  clearAllSearch() {
   this.startDate = '';
   this.endDate = '';
   this.providerTypeDetailParams = this.providerTypeDetailDupliParams;
  }

  exportExcel(){
    this.exportExcelParams.startDate = this.startDate;
    this.exportExcelParams.endDate = this.endDate
    const options = {
      responseType: 'blob',
    };

    this.apiService
      .downloadSummaryReportDetailForTransactionAmount(
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


}
