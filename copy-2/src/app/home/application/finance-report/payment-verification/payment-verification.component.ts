import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InnerScroll, Row } from '../../../../app-core/core-component/core-component.component';
import { AppButton } from '../../../../app-core/core-component/core-directives.directive';
import { AppTableComponent, CellDefDirective } from '../../../../app-core/template/app-table/app-table.component';
import { entOnlinePaymentVerificationSearch, entOnlinePaymentVerificationSearchResult, entPaymentVerificationSet } from '../../../../common/api-services/application-api/application-api.classes';
import { ApplicationApiService } from '../../../../common/api-services/application-api/application-api.service';
import { DataService } from '../../../../common/services/data/data.service';
import { InitialDataService } from '../../../../common/services/initialData/initial-data.service';
import { AppSettingsService } from '../../../../common/services/app-settings/app-settings.service';
import { CoreService } from '../../../../common/services/core/core.service';
import { InputControlComponent } from '../../../../app-core/form-input/input-control/input-control.component';
import { AppDatePipe } from "../../../../common/pipes/app-date/app-date.pipe";
import { AppAccessDirective } from '../../../../common/permission/app-access.directive';
import { ButtonAccessDirective } from '../../../../common/permission/button-access.directive';

@Component({
  selector: 'app-payment-verification',
  standalone: true,
  imports: [AppTableComponent, 
            AppButton, 
            FormsModule, 
            InnerScroll, 
            CellDefDirective, 
            Row, 
            InputControlComponent, 
            AppDatePipe,
            AppAccessDirective,
            ButtonAccessDirective
          ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './payment-verification.component.html',
  styleUrl: './payment-verification.component.scss'
})
export class PaymentVerificationComponent {

  searchParams = new entOnlinePaymentVerificationSearch()
  searchParamsRAW = new entOnlinePaymentVerificationSearch()
  searchResult = new entOnlinePaymentVerificationSearchResult();
  resultset = new entPaymentVerificationSet();
  errorTrue = false;
  pagination = {
    pageNumber: 1,
    pageSize: this.appSettingService.environment.pageSizeOptions[0],
    totalCount: 0
  }

  @ViewChild('paymentSearch') paymentSearch!: any;

  paymentColumns: any = ["permitApplicationNo", "applicantName", "employerIndividualName", "paymentTransactionNo", "walletBank", "provider", "transactionAmount", "transactionFees", "totalTransactionAmount", "transactionInitiationTime", "actions"]
  paymentColumnName: any = ["Permit Application No", "Applicant Name", "Employer Individual Name", "Payment transaction No", "wallet Bank", "Provider", "Transaction Amount (FJD)", "Transaction Fee (FJD)", "Total Transaction Amount (FJD)", "Transaction Initiation Time", "Action"]

  sortAgentRegColumns: any = ["permitNo", "applicantName", "employerIndividualName", "PaymentTransactionNo", "wallet", "provider", "transactionAmount", "TransactionFee", "totalTransactionAmounts", "transactioninitiationTime"];


  constructor(public initial: InitialDataService,
    public apiService: ApplicationApiService,
    public data: DataService,
    public dialog: CoreService,
    public appSettingService: AppSettingsService
  ) {

  }

  async ngOnInit() {
    await this.data.getToken();
    this.createNewOnlinePaymentVerificationSearch();
  }


  pageChanged(event: any) {
    this.searchParams.pageNumber = event.pageNumber;
    this.searchParams.pageSize = event.pageSize;
    this.searchOnlinePaymentVerification();
  }

  clearAllSearch() {
    this.pagination = {
      pageNumber: 1,
      pageSize: this.appSettingService.environment.pageSizeOptions[0],
      totalCount: 0,
    };
    this.createNewOnlinePaymentVerificationSearch();
  }

  sortChanged(event: any) {

    this.searchParams.isortcolumn = event.columnName;
    this.searchParams.isortorder = event.sortOrder;
    this.searchOnlinePaymentVerification();

  }

  implementSearch() {
    this.searchParams.pageNumber = 1;
    this.pagination.pageNumber = this.searchParams.pageNumber;
    this.searchOnlinePaymentVerification();
  }

  createNewOnlinePaymentVerificationSearch() {
    this.apiService.createNewOnlinePaymentVerificationSearch().subscribe((success: any) => {
      this.searchParams = success;
      this.searchParams.pageNumber = 1;
      this.searchParams.pageSize = 10;
      this.pagination.pageNumber = this.searchParams.pageNumber;
      this.searchParams.isortorder = true;
      this.searchOnlinePaymentVerification();
    })
  }

  searchOnlinePaymentVerification() {
    this.searchParams.paymentResponseCodeValue = 'INPRO';
    this.apiService.searchOnlinePaymentVerification(this.searchParams).subscribe((success: any) => {
      this.searchResult = success;
      this.resultset = success.plstentPaymentVerificationSet;
      this.pagination.pageNumber = success.pageNumber;
      this.pagination.pageSize = success.pageSize;
      this.pagination.totalCount = success.totalCount;
      this.dialog.closeDialog();
    })
  }

  verifyOnlinePaymentTransaction(element: any, status: any) {
    const obj = {
      data: element.paymentImmigrationTransactionId,
      data1: status
    }
    this.apiService.verifyOnlinePaymentTransaction(obj).subscribe((success: any) => {
      if (success.msg && success.msg.infoMessage && success.msg.infoMessage.msgDescription) {
        this.data.successMessage(success.msg.infoMessage.msgDescription, 'Success')
      }
      this.searchOnlinePaymentVerification();
    })
  }

  async openSearchTemplates() {
    let dialogResponse: any = await this.dialog.openDialog(this.paymentSearch, {
      disableClose: true,
      height: 'auto',
      width: '100%',
      maxWidth: '900px',
    });
    if (dialogResponse) {

    }
  }

}
