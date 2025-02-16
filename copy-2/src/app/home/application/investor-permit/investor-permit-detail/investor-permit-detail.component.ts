import { Component, CUSTOM_ELEMENTS_SCHEMA, TemplateRef, ViewChild } from '@angular/core';
import { CircleProgress } from '../../../../common/templates/cirle-progress';
import { CommonModule, NgClass } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Row, InnerScroll } from '../../../../app-core/core-component/core-component.component';
import { AppButton } from '../../../../app-core/core-component/core-directives.directive';
import { InputControlComponent } from '../../../../app-core/form-input/input-control/input-control.component';
import { AppTableComponent, CellDefDirective, CellHeaderDefDirective } from '../../../../app-core/template/app-table/app-table.component';
import { DocumentsComponent } from '../../../../app-core/template/documents/documents.component';
import { PdfViewerComponent } from '../../../../app-core/template/pdf-viewer/pdf-viewer.component';
import { AccordionModule } from '../../../../common/templates/accordion/accordion.module';
import { AppCheckBoxComponent } from '../../../../common/templates/app-check-box';
import { LabelTemplates, StatusTextComponent } from '../../../../common/templates/label-templates';
import { TabComponent, TabGroupComponent, VerticalTabComponent, VerticalTabGroupComponent } from '../../../../common/templates/tabs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppService } from '../../../../app.service';
import { entPermitApplication, entPermitInfoInput, entGetListOfPassportInfoInput, entWorkPermitApplicationPrimaryApplicantDependentsDetail, entWorkPermitApplicationDocumentsDetail, entPermitApplicationEmailHistory, entPermitApplicationRecommendationOnhold, entPermitApplicationAssignedOfficerHistory, entAddress, entInvestorPermitApplicationPrimaryApplicantDependentsDetail, entInvestorPermitApplicationDocumentsDetail, entGetActiveControversiallist, entTravelhistory, entPreviousApplicationInput, entPermitApplicationList } from '../../../../common/api-services/application-api/application-api.classes';
import { ApplicationApiService } from '../../../../common/api-services/application-api/application-api.service';
import { AppSettingsService } from '../../../../common/services/app-settings/app-settings.service';
import { CoreService } from '../../../../common/services/core/core.service';
import { DataService } from '../../../../common/services/data/data.service';
import { DialogAnimateService } from '../../../../common/services/dialog-animated/dialog-animate.service';
import { InitialDataService } from '../../../../common/services/initialData/initial-data.service';
import { UrlService } from '../../../../common/services/url/url.service';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FilterAndSortPipe } from '../../../../app-core/form-input/pipes/filter-and-sort/filter-and-sort.pipe';
import { AppAccessDirective } from '../../../../common/permission/app-access.directive';
import { ButtonAccessDirective } from '../../../../common/permission/button-access.directive';
import { AppDatePipe } from '../../../../common/pipes/app-date/app-date.pipe';
import { AppSafePipe } from '../../../../common/pipes/app-safe/app-safe.pipe';
import { ByteToMbPipe } from '../../../../common/pipes/byte-to-mb/byte-to-mb.pipe';
import { PermitRecommendationTabComponent } from '../../work-permit/permit-common-info/permit-recommendation-tab/permit-recommendation-tab.component';
import { InvestorRecommendationTabComponent } from './investor-recommendation-tab/investor-recommendation-tab.component';
import { AppFilterLocationPipe } from '../../../../common/pipes/filter-location/app-filter-location.pipe';
// import { TatPipe } from '../../../../common/pipes/app-tat/tat.pipe';
import { InputPlacerComponent } from '../../../../app-core/form-input/input-placer/input-placer.component';
import { TatPipe } from '../../../../common/pipes/app-tat/tat.pipe';
import { MatDialog } from '@angular/material/dialog';
import { OfflinePaymentComponent } from '../../payment/offline-payment/offline-payment.component';
import { BankingDetailsComponent } from '../../payment/banking-details/banking-details.component';
import { PaymentDetailComponent } from '../../payment/payment-detail/payment-detail.component';
import { TabAccessDirective } from '../../../../common/permission/tab-access.directive';
import { InvestorPermitDetailService } from '../../permit-service/investor-detail-service';

@Component({
  selector: 'app-investor-permit-detail',
  standalone: true,
  imports: [
    Row,
    LabelTemplates,
    CircleProgress,
    TabComponent,
    TabGroupComponent,
    CommonModule,
    InnerScroll,
    AppTableComponent,
    CellDefDirective,
    CellHeaderDefDirective,
    MatCheckboxModule,
    VerticalTabComponent,
    VerticalTabGroupComponent,
    AppButton,
    AppCheckBoxComponent,
    StatusTextComponent,
    AccordionModule,
    DocumentsComponent,
    InputControlComponent,
    FilterAndSortPipe,
    NgClass,
    TatPipe,
    PdfViewerComponent,
    AppDatePipe,
    AppSafePipe,
    FormsModule,
    MatRadioModule,
    RouterModule,
    ByteToMbPipe,
    InvestorRecommendationTabComponent,
    AppAccessDirective,
    ButtonAccessDirective,
    AppFilterLocationPipe,
    InputPlacerComponent,
    PaymentDetailComponent,
    BankingDetailsComponent,
    OfflinePaymentComponent,
    TabAccessDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './investor-permit-detail.component.html',
  styleUrl: './investor-permit-detail.component.scss'
})
export class InvestorPermitDetailComponent {

  pageId = 'IPSSC';
  loadingTrue = false;
  fileUrl: any;
  verticalSegment = '';
  applicantSegmant = '';
  screenName = '';
  type = '';
  permitId = 0;
  swap = true;
  errorTrue = false;
  url = '';
  selectedDocType = '';
  dependentType = 0;
  docIndex = 0;
  statusRecommendationValue = false;
  accordTab = 0;
  onHoldBtnDisable = false;
  isReasonAvail = true;
  isApprvBtn = false;
  docType = '';
  isFamilyIncluded = '';
  getDocType = '';
  rejectionIsChecked = false;
  controversialList = new entGetActiveControversiallist();
  travelHistory = new entTravelhistory();
  permitLst: any = [];
  passPortLst: any = [];
  permitApplicationList: any = [];
  investorParams = new entPermitApplication();
  dependentDocDetail = new entInvestorPermitApplicationPrimaryApplicantDependentsDetail();
  permitDocDetail = new entInvestorPermitApplicationDocumentsDetail();
  permitEmailHistory = new entPermitApplicationEmailHistory();
  permitDetail = new entPermitInfoInput();
  passportDetail = new entGetListOfPassportInfoInput();
  previousApplication = new entPreviousApplicationInput();


  tabGroup: any;
  detail: any = {
    data: '',
  };


  documentColunm: any = ['documentType', 'documentNo', 'fileName'];
  documentColunmName: any = ['Document Type', 'Document No', 'file Name'];

  applicantDocumentColumns: any = [
    'documentType',
    'documentNo',
    'fileName',
    'uploadedDateTime',
    'status',
    'action',
  ];

  comments = '';
  recommendTabId = 0;
  currentIndex = 0;
  array = [];
  nextUrl: any = '';
  previousUrl: any = '';
  appealType = '';
  appealScreenName = '';
  reAssignSearch = '';
  currentDate = '';
  types: any = [];
  categoryType = '';


  uploadLimit = 2;
  fileType = 'pdf';
  accept = 'application/pdf';

  objArray: any = [
    { label: 'Yes', trueValue: 'Y', falseValue: '' },
    { label: 'No', trueValue: 'N', falseValue: '' },
  ];

  recommendationOnHold = new entPermitApplicationRecommendationOnhold();
  assignedOfficerHistory = new entPermitApplicationAssignedOfficerHistory();

  @ViewChild('viewDocumentTemplate', { static: false })
  viewDocumentTemplate!: TemplateRef<any>;

  @ViewChild('viewDocumentDependentTemplate', { static: false })
  viewDocumentDependentTemplate!: TemplateRef<any>;

  @ViewChild('viewRequiredInfoDocumentTemplate', { static: false })
  viewRequiredInfoDocumentTemplate!: TemplateRef<any>;

  @ViewChild('assignedToTemplate', { static: false })
  assignedToTemplate!: TemplateRef<any>;

  @ViewChild('emailHistory') emailHistory!: any;

  @ViewChild(TabGroupComponent, { static: false }) TabGroupComponent: any;

  @ViewChild(VerticalTabGroupComponent, { static: false })
  VerticalTabGroupComponent: any;

  @ViewChild('DocumentsComponent', { static: false }) document!: DocumentsComponent;

  @ViewChild('paymentDetail') paymentDetail!: any;

  detailConfig:any = {};

  constructor(
    public initialData: InitialDataService,
    public appSettingService: AppSettingsService,
    public dialog: CoreService,
    public route: ActivatedRoute,
    public urlService: UrlService,
    public data: DataService,
    public apiService: ApplicationApiService,
    public router: Router,
    public appService: AppService,
    public dialogService: DialogAnimateService,
    public appSetting: AppSettingsService,
    public dialogBox: MatDialog,
    public permitDetailService: InvestorPermitDetailService
  ) {
    this.appService.helpFile = 'Investor%20Permit.pdf';
    this.route.paramMap.subscribe((params) => {
      this.init();
    });
  }

  ngAfterViewInit() {
  }

  async init() {
    await this.data.checkToken();
    this.nextUrl = '';
    this.previousUrl = '';
    let paramsId = this.route.snapshot.paramMap.get('id');
    let obj: any = await this.urlService.decode(paramsId);

    this.currentIndex = obj.currentIndex;
    this.array = obj.array;
    this.types = obj.type ? obj.type : [];
    this.categoryType = obj.type[obj.currentIndex] ? obj.type[obj.currentIndex] : '';
    console.log(this.type, obj);


    // if (this.currentIndex < this.array.length - 1) {
    //   let nextUrl = await this.urlService.encode({
    //     currentIndex: this.currentIndex + 1,
    //     array: this.array,
    //     type: this.types
    //   });
    //   if(this.type === 'WRKPR'){
    //     this.nextUrl = '/home/work-permit/common-permit-info/' + nextUrl
    //   }
    //   else{
    //     this.nextUrl = '/home/investor/investor-detail/' + nextUrl
    //   }
    // }
    // if (this.currentIndex > 0) {
    //   let previousUrl = await this.urlService.encode({
    //     currentIndex: this.currentIndex - 1,
    //     array: this.array,
    //     type: this.types
    //   });
    //   if(this.type === 'WRKPR'){
    //     this.previousUrl = '/home/work-permit/common-permit-info/' + previousUrl
    //   }
    //   else{
    //     this.previousUrl = '/home/investor/investor-detail/' + previousUrl
    //   }

    // }

    await this.initialData.getDDL('getInvestorPermitApplicationInitialData');
    this.openPermit(obj.array[obj.currentIndex]);
    this.doSwap(0, 0);
  }


  async moveNextUrl() {
    this.currentIndex = this.currentIndex + 1;
    this.categoryType = this.types[this.currentIndex]
    let nextUrl = await this.urlService.encode({
      currentIndex: this.currentIndex,
      array: this.array,
      type: this.types
    });
    if (this.categoryType === 'WRKPR') {
      this.router.navigateByUrl('/home/work-permit/common-permit-info/' + nextUrl)
    }
    else {
      this.router.navigateByUrl('/home/investor/investor-detail/' + nextUrl)
    }
  }

  async movePreviousUrl() {
    this.currentIndex = this.currentIndex - 1;
    this.categoryType = this.types[this.currentIndex]
    let previousUrl = await this.urlService.encode({
      currentIndex: this.currentIndex,
      array: this.array,
      type: this.types
    });
    if (this.categoryType === 'WRKPR') {
      this.router.navigateByUrl('/home/work-permit/common-permit-info/' + previousUrl)
    }
    else {
      this.router.navigateByUrl('/home/investor/investor-detail/' + previousUrl)
    }
  }

  getScreenType() {
    switch (this.type) {
      case 'NGOS':
        break;
      case 'MCFHV':
        break;
      case 'OSEAS':
        break;
      case 'WP3YA':
        break;
      case 'WPLT1':
        break;
      case 'APPEL':
        this.appService.helpFile = 'Investor%20Appeal%20.pdf';
        break;
    }
  }

  openPermit(permitId: any) {
    
    const obj = {
      data: permitId,
    };
    this.apiService
      .openInvestorPermitApplicationWithAllChilds(obj)
      .subscribe(async (success) => {
        this.investorParams = success;
        if (success.applicationCategoryValue === 'APPEL') {
          this.appealType = success.applicationCategoryValue;
          this.appealScreenName = success.applicationCategoryDescription;
          this.type = success.permitTypeValue;
          this.screenName = success.permitTypeDescription;
          // this.TabGroupComponent.changeTabByIndex(0)
          this.detailConfig = await this.permitDetailService.getHelpConfig(success.applicationCategoryValue);
          
          this.loadRequiredInfoDetail();
        } else {
          this.appealType = success.applicationCategoryValue;
          this.appealScreenName = success.applicationCategoryDescription;
          this.type = success.permitTypeValue;
          this.getScreenType();
          this.screenName = success.permitTypeDescription;
          this.detailConfig = await this.permitDetailService.getHelpConfig(success.permitTypeValue);
          console.log(this.detailConfig);
          await this.loadPrimaryApllicantDetail();
        }

        // }
        this.statusRecommendationValue = this.getStatus();
        if (
          this.investorParams.pentInvestorPermitApplication
            .pentInvestorPermitApplicationPrimaryApplicantDetail
            .plstentInvestorPermitApplicationPrimaryApplicantDependentsDetail
            .length > 0
        ) {
          this.dependantTabChanged(
            this.investorParams.pentInvestorPermitApplication
              .pentInvestorPermitApplicationPrimaryApplicantDetail
              .plstentInvestorPermitApplicationPrimaryApplicantDependentsDetail[0], 0
          );
        }
        this.data.successMessage(
          success.msg.infoMessage.msgDescription,
          'Success'
        );
      });
  }

  getStatus() {
    if (
      this.investorParams.recommendationValue === 'VERIF' ||
      this.investorParams.recommendationValue === 'MANRE'
    ) {
      return true;
    } else {
      return false;
    }
  }

  async onTabChange(event: any) {
    //
    if (this.investorParams.permitApplicationId > 0) {
      switch (event.tabTitle) {
        case 'Application':
          await this.loadPrimaryApllicantDetail();
          break;
        case 'Primary Applicant':
          this.loadPrimaryApllicantDetail();
          break;
        case 'Applicant Document':
          this.loadApplicantDocDetail();
          break;
        case 'Dependent':
          this.loadDependentDetail();
          break;
        case 'Employment':
          this.loadEmploymentDetail();
          break;
        case 'Employer':
          this.loadEmployerDetail();
          break;
        case 'Employer Document':
          this.loadEmployerDetail();
          break;
        case 'Declaration':
          this.loadEmployerDetail();
          break;
        case 'Recommendation':
          this.investorParams.plstentPermitApplicationRecommendation = [];
          this.loadRecommendationDetail();
          break;
        case 'Border Information':
          this.getControversialList();
          break;
        case 'History':
          this.loggedInHigherOfficer();
          this.historyTabChanged('assignedOfficerHistory');
          break;
        case 'Required Info':
          this.loadRequiredInfoDetail();
          break;
        case 'Previous Application':
          this.loadpreviousApplication();
          break
      }
    }
  }

  loadpreviousApplication() {
    this.previousApplication.applicationcategory = this.investorParams.applicationCategoryValue;
    this.previousApplication.dateOfBirth = this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.dateOfBirth;
    this.previousApplication.firstName = this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.givenNames;
    this.previousApplication.lastName = this.investorParams.pentWorkPermitApplication.pentWorkPermitApplicationPrimaryApplicantDetail.surname;
    this.previousApplication.nationality = this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.nationalityValue;
    this.previousApplication.passportNo = this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.passportNumber;
    this.apiService.loadPreviousPermitApplication(this.previousApplication).subscribe((success)=>{
      this.permitApplicationList = success.plstentPermitApplication;
    })
  }

  onVerticalTabChange(event: any) {
    if (this.investorParams.permitApplicationId > 0) {
      switch (event.tabTitle) {
        case 'Primary Applicant':
          this.loadPrimaryApllicantDetail();
          break;
        case 'Applicant Document':
          this.loadApplicantDocDetail();
          break;
        case 'Dependent':
          this.loadDependentDetail();
          break;
        case 'Company':
          this.loadEmployerDetail();
          break;
        case 'Company Document':
          this.loadEmployerDetail();
          break;
        case 'Declaration':
          this.loadEmployerDetail();
          break;
        case 'Assisting Person Declaration':
          this.loadEmployerDetail();
          break;
        case 'Additional Information':
          this.loadAdditionalInformationDetail();
      }
    }
  }


  applicationTabChanged(event: any) {
    switch (event) {
      case 'primaryApplicant':
        break;
      case 'applicantDoc':
        break;
      case 'dependant':
        break;
      case 'employer':
        break;
    }
  }

  historyTabChanged(event: any) {
    switch (event) {
      case 'assignedOfficerHistory':
        this.verticalSegment = event;
        break;
      case 'statusHistory':
        this.verticalSegment = event;
        break;
      case 'communicationHistory':
        this.verticalSegment = event;
        break;
    }
  }

  verticalTabChanged(event: any) {
    switch (event) {
      case 'primaryApplicant':
        this.verticalSegment = event;
        break;
      case 'assignedOfficerHistory':
        this.verticalSegment = event;
        break;
      case 'statusHistory':
        this.verticalSegment = event;
        break;
      case 'communicationHistory':
        this.verticalSegment = event;
        break;
    }
  }

  applicantTabChanged(event: any) {
    switch (event) {
      case 'applicantInfo':
        this.applicantSegmant = event;
        break;
      case 'documents':
        this.applicantSegmant = event;
        break;
    }
  }

  doSwap(val: any, item: any) {
    this.accordTab = val;
    this.recommendTabId = item.permitApplicationRecommendationId;
  }

  async viewDocument(val: any, index: any, type: any) {
    this.getDocType = type;
    this.docIndex = index;
    this.url = '';
    this.permitDocDetail.comments = '';
    this.openPermitDoc(val);
    let dialogResponse: any = await this.dialog.openDialog(
      this.viewDocumentTemplate,
      {
        disableClose: true,
        height: '620px',
        width: '95%',
        maxWidth: '1280px',
      }
    );
    if (dialogResponse) {
    }
  }


  openPermitDoc(val: any) {
    const obj = {
      data: val.investorPermitApplicationDocumentDetailId,
    };
    this.apiService
      .openInvestorPermitApplicationDocumentsDetail(obj)
      .subscribe((success) => {
        this.permitDocDetail = success;
        this.generateReceipt();
      });
  }

  generateReceipt() {
    const obj = {
      data: this.permitDocDetail.documentFileId
    }
    const options = {
      responseType: 'blob'
    }
    let fileName = this.permitDocDetail.pentDocumentFile.documentFileName;
    this.apiService.viewDocumentFile(obj, options).subscribe((success) => {
      const resp = new Blob([success.body], { type: success.body.type });
      const fileURL = URL.createObjectURL(resp);
      this.docType = success.body.type;
      if (success.body.type === 'application/pdf' || success.body.type.includes('image')) {
        this.url = fileURL;
      } else {
        const downloadLink = document.createElement('a');
        downloadLink.href = this.url;
        downloadLink.download = fileName;
        downloadLink.click();
      }
    })
  }

  checkReasonSelected(type: any) {
    this.rejectionIsChecked = false;
    if (type === 'REJEC') {
      this.permitDocDetail.plstentInvestorPermitApplicationDocumentDetailRejectionReason.forEach((val: any) => {
        if (val.isChecked === 'Y') {
          this.rejectionIsChecked = true
        }
      })
      if (!this.rejectionIsChecked) {
        this.data.errorMessageOnly('Please Select any Reject Reason');
      }
    }
  }

  savePermitDoc(l: any, val: any) {
    this.checkReasonSelected(val)
    if (!this.rejectionIsChecked && val === 'REJEC') {
      return
    }
    if (l.valid) {
      this.errorTrue = false;
      this.isApprvBtn = true;
      this.permitDocDetail.documentStatusValue = val;
      this.apiService
        .saveInvestorPermitApplicationDocumentsDetail(this.permitDocDetail)
        .subscribe((success) => {

          switch (this.getDocType) {
            case 'applicant':
              this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.plstentInvestorPermitApplicationDocuments[
                this.docIndex
              ].plstentInvestorPermitApplicationDocumentsDetail =
                success.plstentInvestorPermitApplicationDocumentsDetail;
              break;
            case 'employer':
              this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.
                pentInvestorPermitApplicationCompanyDetail.plstentInvestorPermitApplicationDocuments[
                this.docIndex
              ].plstentInvestorPermitApplicationDocumentsDetail =
                success.plstentInvestorPermitApplicationDocumentsDetail;
              break;
            case 'reqInfo':
              this.investorParams.pentAppealApplicationRequiredInformation.plstentInvestorAppealApplicationRequiredDocuments[
                this.docIndex
              ].plstentInvestorPermitApplicationDocumentsDetail = success.plstentInvestorPermitApplicationDocumentsDetail;
              break;
            case 'addInfo':
              this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationDocuments.plstentInvestorPermitApplicationDocumentsDetail = success.plstentInvestorPermitApplicationDocumentsDetail;
              break;
          }

          // if (this.investorParams.applicationCategoryValue === 'REGLR') {
          // if (this.getDocType === 'applicant') {
          //   this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.plstentInvestorPermitApplicationDocuments[
          //     this.docIndex
          //   ].plstentInvestorPermitApplicationDocumentsDetail =
          //     success.plstentInvestorPermitApplicationDocumentsDetail;
          // }
          // else if (this.getDocType === 'employer') {
          //   this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.
          //     pentInvestorPermitApplicationCompanyDetail.plstentInvestorPermitApplicationDocuments[
          //     this.docIndex
          //   ].plstentInvestorPermitApplicationDocumentsDetail =
          //     success.plstentInvestorPermitApplicationDocumentsDetail;
          // }
          // else {
          //   this.investorParams.pentAppealApplicationRequiredInformation.plstentInvestorAppealApplicationRequiredDocuments[
          //     this.docIndex
          //   ].plstentInvestorPermitApplicationDocumentsDetail = success.plstentInvestorPermitApplicationDocumentsDetail
          // }
          // } else {
          //   if (this.getDocType === 'applicant') {
          //     this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.plstentInvestorPermitApplicationDocuments[
          //       this.docIndex
          //     ].plstentInvestorPermitApplicationDocumentsDetail =
          //       success.plstentInvestorPermitApplicationDocumentsDetail;
          //   }
          //   else if (this.getDocType === 'employer') {
          //     this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.
          //       pentInvestorPermitApplicationCompanyDetail.plstentInvestorPermitApplicationDocuments[
          //       this.docIndex
          //     ].plstentInvestorPermitApplicationDocumentsDetail =
          //       success.plstentInvestorPermitApplicationDocumentsDetail;
          //   }
          //   else {
          //     this.investorParams.pentAppealApplicationRequiredInformation.plstentInvestorAppealApplicationRequiredDocuments[
          //       this.docIndex
          //     ].plstentInvestorPermitApplicationDocumentsDetail = success.plstentInvestorPermitApplicationDocumentsDetail

          //     // this.investorParams.pentAppealApplicationRequiredInformation.plstentAppealApplicationRequiredDocuments[
          //     //   this.docIndex
          //     // ].plstentWorkPermitApplicationDocumentsDetail =
          //     //   success.plstentWorkPermitApplicationDocumentsDetail;
          //   }
          // }
          this.data.successMessage(
            success.msg.infoMessage.msgDescription,
            'Success'
          );
          this.dialog.closeDialog();
          this.isApprvBtn = false;
        });
    } else {
      this.errorTrue = true;
      this.isApprvBtn = false;
    }
  }



  async viewDependentDocument(list: any, index: any) {

    this.docIndex = index;
    this.url = '';
    this.permitDocDetail.comments = '';
    this.openPermitDoc(list);
    let dialogResponse: any = await this.dialog.openDialog(
      this.viewDocumentDependentTemplate,
      {
        disableClose: true,
        height: '620px',
        width: '95%',
        maxWidth: '1280px',
      }
    );
  }

  savePermitDependentDoc(l: any, val: any) {
    this.checkReasonSelected(val)
    if (!this.rejectionIsChecked && val === 'REJEC') {
      return
    }
    if (l.valid) {
      this.errorTrue = false;
      this.isApprvBtn = true;

      this.permitDocDetail.documentStatusValue = val;
      this.apiService
        .saveInvestorPermitApplicationDocumentsDetail(this.permitDocDetail)
        .subscribe((success) => {
          this.dependentDocDetail.plstentInvestorPermitApplicationDocuments[this.docIndex].plstentInvestorPermitApplicationDocumentsDetail = success.plstentInvestorPermitApplicationDocumentsDetail;
          this.data.successMessage(
            success.msg.infoMessage.msgDescription,
            'Success'
          );
          this.dialog.closeDialog();
          this.isApprvBtn = false;
        });
    } else {
      this.errorTrue = true;
      this.isApprvBtn = false;
    }
  }

  dependantIndex = 0;
  dependent: any

  dependantTabChanged(val: any, index?: any) {
    if (index !== undefined || index !== null) {
      this.dependantIndex = index;
    }
    this.dependentType =
      val.investorPermitApplicationPrimaryApplicantDependentsDetailId;
    this.dependentDocDetail = val;

    if (this.dependentDocDetail.oldValue !== null && this.dependentDocDetail.oldValue !== '') {
      let getJsonValue = this.dependentDocDetail.oldValue;
      this.dependent = JSON.parse(getJsonValue)
      console.log(this.dependent);
    }
  }

  changeRecommendation(type: any) {
    this.investorParams.recommendationValue = type;
    this.apiService
      .changeWorkPermitApplicationRecommendation(this.investorParams)
      .subscribe((success) => {
        this.investorParams = success;
      });
  }

  recommendForEvent(event: any, val: any) {
    val.recommendedForValue = event.value;
    // console.log(val.recommendedForValue);

    //  if(event === 'REJEC'){
    //   item.plstentPermitApplicationRecommendationRejectReason.forEach((rejection:any)=>{
    //     if(rejection.)
    //   })
    //  }
  }

  createRecommendationOnHold(item: any) {
    // ;
    let isOnHoldAvail = 0;
    this.apiService
      .createNewPermitApplicationRecommendationOnhold(this.recommendationOnHold)
      .subscribe((success) => {
        if (item.plstentPermitApplicationRecommendationOnhold.length === 0) {
          item.plstentPermitApplicationRecommendationOnhold.push(success);
          this.onHoldBtnDisable = true;
        } else {
          item.plstentPermitApplicationRecommendationOnhold.forEach(
            (val: any) => {
              if (val.permitApplicationRecommendationOnholdId === 0) {
                isOnHoldAvail = 1;
              }
            }
          );
          if (isOnHoldAvail === 0) {
            item.plstentPermitApplicationRecommendationOnhold.push(success);
            this.onHoldBtnDisable = true;
          }
        }

        // this.recommendationOnHold = success;
      });
  }

  uploadRecommendationDocument(event: any, item: any) {
    item.pentPermitApplicationRecommendationDocument.pentDocumentFile.documentFileName =
      event.fileName;
    item.pentPermitApplicationRecommendationDocument.pentDocumentFile.documentSize =
      event.fileSize;
    item.pentPermitApplicationRecommendationDocument.pentDocumentFile.documentType =
      event.fileType;
    item.pentPermitApplicationRecommendationDocument.pentDocumentFile.fileContent =
      event.content;
    // item.pentPermitApplicationRecommendationDocument.pentDocumentFile.fileContent = event.content;
  }

  saveRecommendation(item: any) {
    let isCheckLstFilled = false;
    let checkReject = true;

    item.plstentPermitApplicationRecommendationCheckList.forEach(
      (checkList: any) => {
        if (checkList.isChecked === '') {
          isCheckLstFilled = true;
        }
      }
    );
    if (item.recommendedForValue === 'REJEC') {
      item.plstentPermitApplicationRecommendationRejectReason.forEach(
        (rejection: any) => {
          if (rejection.isChecked !== 'N') {
            checkReject = false;
          }
        }
      );
    } else {
      checkReject = false;
    }

    if (isCheckLstFilled) {
      this.data.errorMessageOnly('Please Select all the Checklist');
    } else if (checkReject && item.recommendedForValue === 'REJEC') {
      this.data.errorMessageOnly('Please Select any Rejection Reason');
    }
    if (!isCheckLstFilled && !checkReject) {
      this.apiService
        .savePermitApplicationRecommendation(item)
        .subscribe((success) => {
          this.investorParams = success;
          this.onHoldBtnDisable = false;
        });
    }
  }

  changeRejectionLst(event: any, reject: any) {
    // console.log(event);
    if (event.checked === true) reject.isChecked = 'Y';
    else {
      reject.isChecked = 'N';
    }
    //  if(event.)
  }

  async viewRequiredInfoDocument(val: any, index: any) {
    this.docIndex = index;
    this.openPermitDoc(val);
    let dialogResponse: any = await this.dialog.openDialog(
      this.viewDocumentTemplate,
      {
        disableClose: true,
        height: '620px',
        width: '95%',
        maxWidth: '1280px',
      }
    );
    if (dialogResponse) {
    }
  }

  // deleteBin(item: any) {
  //   item.pentPermitApplicationRecommendationDocument.pentDocumentFile.documentFileName =
  //     '';
  //   item.pentPermitApplicationRecommendationDocument.pentDocumentFile.fileContent =
  //     '';
  // }

  // passValues(event: any) {
  //   this.assignAddress('pentResidentialAddress', 'pentPostalAddress', event);
  // }

  // assignAddress(
  //   source: 'pentResidentialAddress' | 'pentIntendedResidentialAddress',
  //   destination: 'pentPostalAddress' | 'pentIntendedPostalAddress',
  //   event: any
  // ) {
  //   if (event === 'Y') {
  //     this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail[
  //       destination
  //     ] =
  //       this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail[
  //       source
  //       ];
  //   } else {
  //     this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail[
  //       destination
  //     ] = new entAddress();
  //   }
  // }

  async openEmailHistory(element: any) {
    this.permitEmailHistory = element;
    let dialogResponse: any = await this.dialogService.open(this.emailHistory, {
      disableClose: true,
      height: '100%',
      width: '100%',
      maxWidth: '560px',
      position: { right: '0px', bottom: '15px' },
      direction: 'ltr',
      animation: { to: 'left' },
    });
  }

  applicant: any;
  investor: any

  loadPrimaryApllicantDetail() {
    this.apiService
      .loadInvesterPermitApplicationPrimaryApplicantDetails(this.investorParams)
      .subscribe((success) => {
        this.investorParams = success;
        if (success.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.oldValue !== null && success.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.oldValue !== '') {
          let getJsonValue = success.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.oldValue;
          this.applicant = JSON.parse(getJsonValue)
          console.log(this.applicant);
        }

        if (success.pentInvestorPermitApplication.oldValue !== null && success.pentInvestorPermitApplication.oldValue !== '') {
          let getJsonValue = success.pentInvestorPermitApplication.oldValue;
          this.investor = JSON.parse(getJsonValue)
          console.log(this.investor);
        }
        this.VerticalTabGroupComponent.changeTabByIndex(0);
      });
  }

  loadAdditionalInformationDetail() {
    this.apiService.loadInvesterPermitApplicationAdditionalInfo(this.investorParams).subscribe((success) => {
      this.investorParams = success;
    })
  }

  loadDependentDetail() {
    this.apiService
      .loadInvestorPermitApplicationDependentDetails(this.investorParams)
      .subscribe((success) => {
        this.investorParams = success;
        
        if (this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.plstentInvestorPermitApplicationPrimaryApplicantDependentsDetail.length > 0) {
          this.isFamilyIncluded = 'Y'
          this.dependantTabChanged(
            this.investorParams.pentInvestorPermitApplication
              .pentInvestorPermitApplicationPrimaryApplicantDetail
              .plstentInvestorPermitApplicationPrimaryApplicantDependentsDetail[0], 0
          );
        }
        else{
          this.isFamilyIncluded = 'N'
        }
      });
  }

  // loadInvestorPermitApplicationDeclaration(){
  //   this.apiService
  //     .loadInvestorPermitApplicationDeclarationCommand(this.investorParams)
  //     .subscribe((success) => {
  //       this.investorParams = success;
  //     });
  // }

  // loadAssisgtingPersonDeclaration(){
  //   this.apiService
  //     .loadAssisgtingPersonDeclaration(this.investorParams)
  //     .subscribe((success) => {
  //       this.investorParams = success;
  //     });
  // }

  loadApplicantDocDetail() {
    this.apiService
      .loadInvesterPermitApplicationPrimaryApplicantDocuments(this.investorParams)
      .subscribe((success) => {
        this.investorParams = success;
      });
  }

  loadEmploymentDetail() {
    this.apiService.loadPermitApplicationEmploymentDetails
      (this.investorParams)
      .subscribe((success) => {
        this.investorParams = success;
      });
  }

  loadEmployerDetail() {
    this.apiService
      .loadInvestorPermitApplicationEmployerDetails(this.investorParams)
      .subscribe((success) => {
        this.investorParams = success;
      });
  }

  loadRecommendationDetail() {
    this.apiService
      .loadInvestorPermitApplicationRecommendationDetails(this.investorParams)
      .subscribe((success) => {
        this.investorParams = success;
        if (this.investorParams.plstentPermitApplicationRecommendation)
          if (
            this.investorParams.plstentPermitApplicationRecommendation.length > 0
          ) {
            // this.investorParams.plstentPermitApplicationRecommendation = success.plstentPermitApplicationRecommendation;
            this.investorParams.plstentPermitApplicationRecommendation.forEach(
              (val: any) => {
                this.getCheckLstCount(
                  val.plstentPermitApplicationRecommendationCheckList,
                  val
                );
              }
            );
          }
      });
  }

  getCheckLstCount(event: any, item: any) {
    item.checkedCount = 0;
    item.uncheckedCount = 0;
    event.forEach((elem: any) => {
      if (elem.isChecked === '') {
        item.uncheckedCount = item.uncheckedCount + 1;
      } else {
        item.checkedCount = item.checkedCount + 1;
      }
    });
    // console.log(item.checkedCount, item.uncheckedCount);
  }

  loadBorderInformationDetail() {
    // this.apiService.loadPermitApplicationBorderInformationDetails(this.investorParams).subscribe((success) => {
    //   this.investorParams = success;
    // })
  }

  loadRequiredInfoDetail() {
    this.apiService
      .loadInvestorPermitApplicationRequiredInfoAppealDetails(this.investorParams)
      .subscribe((success) => {
        this.investorParams = success;
        this.TabGroupComponent.changeTabByIndex(0);
      });
  }

  getParentData(event: any) {
    this.investorParams = event;
  }

  async OpenAssignTo() {
    let dialogResponse: any = await this.dialog.openDialog(
      this.assignedToTemplate,
      {
        disableClose: true,
        height: '500px',
        width: '40%',
        maxWidth: '1170px',
      }
    );
    if (dialogResponse) {
    }
  }


  loggedInHigherOfficer() {
    const obj = {
      data: this.investorParams.permitApplicationId,
    };
    this.apiService
      .checkWhetherLoggedinUserisHigherOfficer(obj)
      .subscribe((success) => {
        this.assignedOfficerHistory = success;
      });
  }

  getAssigedOfficer(val: any) {
    this.assignedOfficerHistory.assignedTo = val.userLoginId;
    this.apiService
      .savePermitApplicationHigherOfficerManualAssign(
        this.assignedOfficerHistory
      )
      .subscribe((success) => {
        this.investorParams = success;
        this.dialog.closeDialog();
      });
  }

  generateReceiptPDF(val: any) {
    const obj = {
      data: val.receiptId,
      // data1 : 'FINCY'
    }
    const options = {
      responseType: 'blob'
    }
    this.apiService.generatePaymentTransactionReceipt(obj, options).subscribe((success) => {
      const resp = new Blob([success.body], { type: success.body.type });
      const fileURL = URL.createObjectURL(resp);
      // console.log(success);
      // let fileName = 'file';
      let contentDisposition = success.headers.get('content-disposition');
      let filename = contentDisposition
        .split(';')[1]
        .split('filename')[1]
        .split('=')[1]
        .trim();
      // console.log(filename, fileURL);


      if (success.body.type === 'application/pdf') {
        // this.docURL = fileURL;
        // this.openDocumentTemplates1();
        this.document.openPDFViewer(fileURL);
      } else if (success.body.type.includes('image')) {
        this.document.imageView(fileURL, filename);
      } else {
        this.document.download();
      }
    })
  }

  saveInvestorPermitPrimaryApplicantDetail(l: any) {

    if (!l.valid) {
      this.errorTrue = true;
      return;
    }

    this.errorTrue = false;

    this.apiService.saveInvestorPermitPrimaryApplicantDetail(this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail).subscribe((success: any) => {
      this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail = success;
      this.data.successMessage(
        success.msg.infoMessage.msgDescription,
        'Success'
      );
    })
  }

  saveInvestorPermitApplicationPrimaryApplicantDependentsDetail(dependentDocDetail: any, l: any) {

    if (!l.valid) {
      this.errorTrue = true;
      return;
    }

    this.errorTrue = false;


    this.apiService.saveInvestorPermitApplicationPrimaryApplicantDependentsDetail(dependentDocDetail).subscribe((success: any) => {
      if (success.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.plstentInvestorPermitApplicationPrimaryApplicantDependentsDetail.length > 0) {
        this.dependentDocDetail = success.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.plstentInvestorPermitApplicationPrimaryApplicantDependentsDetail[this.dependantIndex];
      }

      this.data.successMessage(
        success.msg.infoMessage.msgDescription,
        'Success'
      );
    })
  }

  async loadAllProvincesAndIslands() {
    const provinceData = await this.apiService
      .loadAllMProvince({ data: 0 })
      .toPromise();
    this.initialData.DDLValues[provinceData.key] = provinceData.value;

    const islandData = await this.apiService
      .loadAllMIslandswithProvince({})
      .toPromise();
    this.initialData.getislandinfo.value = islandData.plistentIslanddetails;
  }

  resetAddressValues(
    type: 'pentIntendedResidentialAddress' | 'pentIntendedPostalAddress'
  ) {
    const address =
      this.investorParams.pentWorkPermitApplication
        .pentWorkPermitApplicationPrimaryApplicantDetail[type];
    address.mIslandId = 0;
    address.mTikinaId = 0;
    address.mVillageId = 0;
  }

  async LoadTikinaAddress(
    type: 'pentIntendedResidentialAddress' | 'pentIntendedPostalAddress',
    flag: any
  ) {
    if (!flag) {
      this.investorParams.pentWorkPermitApplication.pentWorkPermitApplicationPrimaryApplicantDetail[
        type
      ].mTikinaId = 0;
      this.investorParams.pentWorkPermitApplication.pentWorkPermitApplicationPrimaryApplicantDetail[
        type
      ].mVillageId = 0;
    }

    const address =
      this.investorParams.pentWorkPermitApplication
        .pentWorkPermitApplicationPrimaryApplicantDetail[type];
    const obj = { data1: address.mProvinceId, data2: address.mIslandId };

    const tikinaData = await this.apiService
      .loadTikinaDetailsbasedonProvinceIslandAddress(obj)
      .toPromise();
    const tikinaDetails = tikinaData.plistentTikinadetails;

    if (type === 'pentIntendedResidentialAddress') {
      this.initialData.getTikinainfo.value = tikinaDetails;
    } else if (type === 'pentIntendedPostalAddress') {
      this.initialData.getTikinainfo1.value = tikinaDetails;
    }

    if (tikinaDetails.length === 1) {
      address.mTikinaId = tikinaDetails[0].tikinaId;
      await this.loadAllMVillageAddress(type, flag);
    }
  }

  async loadAllMVillageAddress(
    type: 'pentIntendedResidentialAddress' | 'pentIntendedPostalAddress',
    flag?: any
  ) {
    if (!flag) {
      this.investorParams.pentWorkPermitApplication.pentWorkPermitApplicationPrimaryApplicantDetail[
        type
      ].mVillageId = 0;
    }

    const obj = {
      data: this.investorParams.pentWorkPermitApplication
        .pentWorkPermitApplicationPrimaryApplicantDetail[type].mTikinaId,
    };

    const villageData = await this.apiService
      .loadAllMVillageAddress(obj)
      .toPromise();

    if (type === 'pentIntendedResidentialAddress') {
      this.initialData.getvillageinfo.value = villageData.value;
    } else if (type === 'pentIntendedPostalAddress') {
      this.initialData.getvillageinfo1.value = villageData.value;
    }
  }
  selfAssign() {
    this.assignedOfficerHistory.permitApplicationId = this.investorParams.permitApplicationId;
    this.apiService.saveInvestorPermitApplicationAssignedOfficerSelfAssign(this.assignedOfficerHistory).subscribe((success) => {
      this.investorParams = success;
      this.data.successMessage(
        success.msg.infoMessage.msgDescription,
        'Success'
      );
    })
  }



  generateParmitLetter(id: any) {
    const obj = {
      data: id
    }

    const options = {
      responseType: 'blob'
    }

    this.apiService.printPermitLetter(obj, options).subscribe((success) => {
      const resp = new Blob([success.body], { type: success.body.type });
      const fileURL = URL.createObjectURL(resp);


      if (success.body.type === 'application/pdf') {
        this.document.openPDFViewer(fileURL);
      } else if (success.body.type.includes('image')) {
        this.document.imageView(fileURL, 'Permit Letter');
      } else {
        this.document.download();
      }
    })
  }


  makePayment() {
    this.screenType = 'paymentDetail';

    const dialogRef = this.dialogBox.open(OfflinePaymentComponent, {
      width: '100%',
      maxWidth: '1200px',
      data: this.investorParams,
      maxHeight: '90vh'
    });

    dialogRef.afterClosed().subscribe((result: any) => {

      if (result) {
        this.openPermit(this.investorParams.permitApplicationId)
        setTimeout(() => {
          this.data.successMessage('You have successfully submitted your payment transaction', 'Success');
        }, 900);
      }
    })
  }

  popupFlag = false;

  paymentDetailsValues = {
    appNo: '',
    applicationNo: '',
    totalAmount: '',
    permitApplicationID: 0

  }

  screenType = 'paymentDetail';

  pageChanged(event: any, type: any) {

    // console.log(event);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    this.screenType = type;
    if (type === 'bankingDetail') {
      this.paymentDetailsValues = event;

    } else if (type === 'offlinePayment') {
      this.paymentDetailsValues = event;
    } else if (type === 'end') {
      this.popupFlag = true;
      this.dialogBox.closeAll();

    }

  }

  borderTabChange(event: any) {
    if (this.investorParams.permitApplicationId > 0) {
      switch (event.tabTitle) {
        case 'Controversial':
          this.getControversialList();
          break;
        case 'Travel History':
          this.getTravelHistory();
          break;
        case 'Permit Details':
          this.getPermitDetils();
          break;
        case 'Passport List':
          this.getPassportDetail();
          break;
        case 'Assigned Officer History':
          break;
        case 'Status History':
          break;
      }
    }
  }

  getControversialList() {
    const obj = {
      firstname: this.investorParams.pentInvestorPermitApplication
        .pentInvestorPermitApplicationPrimaryApplicantDetail.givenNames,

      lastname: this.investorParams.pentInvestorPermitApplication
        .pentInvestorPermitApplicationPrimaryApplicantDetail.surname,

      dateofbirth: this.investorParams.pentInvestorPermitApplication
        .pentInvestorPermitApplicationPrimaryApplicantDetail.dateOfBirth,

      gender: this.investorParams.pentInvestorPermitApplication
        .pentInvestorPermitApplicationPrimaryApplicantDetail.genderValue,

      nationality: this.investorParams.pentInvestorPermitApplication
        .pentInvestorPermitApplicationPrimaryApplicantDetail.nationalityValue,

      passportno: this.investorParams.pentInvestorPermitApplication
        .pentInvestorPermitApplicationPrimaryApplicantDetail.passportNumber
    }

    this.apiService.getControversialList(obj).subscribe((success) => {
      this.controversialList = success
    })
  }

  getTravelHistory() {
    const obj = {
      firstname: this.investorParams.pentInvestorPermitApplication
        .pentInvestorPermitApplicationPrimaryApplicantDetail.givenNames,

      lastname: this.investorParams.pentInvestorPermitApplication
        .pentInvestorPermitApplicationPrimaryApplicantDetail.surname,

      dateofbirth: this.investorParams.pentInvestorPermitApplication
        .pentInvestorPermitApplicationPrimaryApplicantDetail.dateOfBirth,

      gender: this.investorParams.pentInvestorPermitApplication
        .pentInvestorPermitApplicationPrimaryApplicantDetail.genderValue,

      nationality: this.investorParams.pentInvestorPermitApplication
        .pentInvestorPermitApplicationPrimaryApplicantDetail.nationalityValue,

      passportno: this.investorParams.pentInvestorPermitApplication
        .pentInvestorPermitApplicationPrimaryApplicantDetail.passportNumber
    }

    this.apiService.getTravelHistory(obj).subscribe((success) => {
      this.travelHistory = success
    })
  }

  getPermitDetils() {
    this.permitDetail.dateOfBirth = this.investorParams.pentInvestorPermitApplication
      .pentInvestorPermitApplicationPrimaryApplicantDetail.dateOfBirth;
    this.permitDetail.firstName = this.investorParams.pentInvestorPermitApplication
      .pentInvestorPermitApplicationPrimaryApplicantDetail.givenNames;
    this.permitDetail.lastName = this.investorParams.pentInvestorPermitApplication
      .pentInvestorPermitApplicationPrimaryApplicantDetail.surname;
    this.permitDetail.passportNo = this.investorParams.pentInvestorPermitApplication
      .pentInvestorPermitApplicationPrimaryApplicantDetail.passportNumber;
    this.permitDetail.nationality = this.investorParams.pentInvestorPermitApplication
      .pentInvestorPermitApplicationPrimaryApplicantDetail.nationalityValue,
      this.apiService.getPermitDetails(this.permitDetail).subscribe((success) => {
        this.permitLst = success.permitList
      })
  }

  getPassportDetail() {
    this.passportDetail.dateofbirth = this.investorParams.pentInvestorPermitApplication
      .pentInvestorPermitApplicationPrimaryApplicantDetail.dateOfBirth;
    this.passportDetail.firstname = this.investorParams.pentInvestorPermitApplication
      .pentInvestorPermitApplicationPrimaryApplicantDetail.givenNames;
    this.passportDetail.lastname = this.investorParams.pentInvestorPermitApplication
      .pentInvestorPermitApplicationPrimaryApplicantDetail.surname;
    this.passportDetail.gender = this.investorParams.pentInvestorPermitApplication
      .pentInvestorPermitApplicationPrimaryApplicantDetail.genderValue;
    this.apiService.getPassportList(this.passportDetail).subscribe((success) => {
      this.passPortLst = success.permitList
    })
  }

  async openRejectedApplication() {
    let activeList: any = []
    activeList.push(this.investorParams.originalPermitApplicationId)
    const obj = {
      currentIndex: 0,
      array: activeList,
      type: ''
    }
    let urlJson = await this.urlService.encode(obj);
    this.router.navigateByUrl('/home/investor/investor-detail/' + urlJson);
  }
}
