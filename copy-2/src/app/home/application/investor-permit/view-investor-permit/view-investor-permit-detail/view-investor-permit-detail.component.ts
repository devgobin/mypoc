import { Component, CUSTOM_ELEMENTS_SCHEMA, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppService } from '../../../../../app.service';
import { entPermitApplication, entWorkPermitApplicationPrimaryApplicantDependentsDetail, entWorkPermitApplicationDocumentsDetail, entPermitApplicationEmailHistory, entPermitApplicationRecommendationOnhold, entPermitApplicationAssignedOfficerHistory, entAddress, entInvestorPermitApplicationDocumentsDetail, entInvestorPermitApplicationPrimaryApplicantDependentsDetail } from '../../../../../common/api-services/application-api/application-api.classes';
import { ApplicationApiService } from '../../../../../common/api-services/application-api/application-api.service';
import { AppSettingsService } from '../../../../../common/services/app-settings/app-settings.service';
import { CoreService } from '../../../../../common/services/core/core.service';
import { DataService } from '../../../../../common/services/data/data.service';
import { DialogAnimateService } from '../../../../../common/services/dialog-animated/dialog-animate.service';
import { InitialDataService } from '../../../../../common/services/initialData/initial-data.service';
import { UrlService } from '../../../../../common/services/url/url.service';
import { TabComponent, TabGroupComponent, VerticalTabComponent, VerticalTabGroupComponent } from '../../../../../common/templates/tabs';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { Row, InnerScroll } from '../../../../../app-core/core-component/core-component.component';
import { AppButton } from '../../../../../app-core/core-component/core-directives.directive';
import { InputControlComponent } from '../../../../../app-core/form-input/input-control/input-control.component';
import { FilterAndSortPipe } from '../../../../../app-core/form-input/pipes/filter-and-sort/filter-and-sort.pipe';
import { AppTableComponent, CellDefDirective, CellHeaderDefDirective } from '../../../../../app-core/template/app-table/app-table.component';
import { DocumentsComponent } from '../../../../../app-core/template/documents/documents.component';
import { PdfViewerComponent } from '../../../../../app-core/template/pdf-viewer/pdf-viewer.component';
import { AppAccessDirective } from '../../../../../common/permission/app-access.directive';
import { ButtonAccessDirective } from '../../../../../common/permission/button-access.directive';
import { AppDatePipe } from '../../../../../common/pipes/app-date/app-date.pipe';
import { AppSafePipe } from '../../../../../common/pipes/app-safe/app-safe.pipe';
import { ByteToMbPipe } from '../../../../../common/pipes/byte-to-mb/byte-to-mb.pipe';
import { AccordionModule } from '../../../../../common/templates/accordion/accordion.module';
import { AppCheckBoxComponent } from '../../../../../common/templates/app-check-box';
import { CircleProgress } from '../../../../../common/templates/cirle-progress';
import { LabelTemplates, StatusTextComponent } from '../../../../../common/templates/label-templates';
import { PermitRecommendationTabComponent } from '../../../work-permit/permit-common-info/permit-recommendation-tab/permit-recommendation-tab.component';
import { InputPlacerComponent } from '../../../../../app-core/form-input/input-placer/input-placer.component';
import { TatPipe } from '../../../../../common/pipes/app-tat/tat.pipe';

@Component({
  selector: 'app-view-investor-permit-detail',
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
    PdfViewerComponent,
    AppDatePipe,
    AppSafePipe,
    FormsModule,
    MatRadioModule,
    RouterModule,
    ByteToMbPipe,
    PermitRecommendationTabComponent,
    AppAccessDirective,
    ButtonAccessDirective,
    InputPlacerComponent,
    TatPipe
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './view-investor-permit-detail.component.html',
  styleUrl: './view-investor-permit-detail.component.scss'
})
export class ViewInvestorPermitDetailComponent {
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

  investorParams = new entPermitApplication();
  dependentDocDetail = new entInvestorPermitApplicationPrimaryApplicantDependentsDetail();
  permitDocDetail = new entInvestorPermitApplicationDocumentsDetail();
  permitEmailHistory = new entPermitApplicationEmailHistory();

  tabGroup: any;
  detail: any = {
    data: '',
  };
  objArray: any = [
    { label: 'Yes', trueValue: 'Y', falseValue: '' },
    { label: 'No', trueValue: 'N', falseValue: '' },
  ];
  
  @ViewChild('viewDocumentTemplate', { static: false })
  viewDocumentTemplate!: TemplateRef<any>;

  @ViewChild('viewDocumentDependentTemplate', { static: false })
  viewDocumentDependentTemplate!: TemplateRef<any>;

  @ViewChild('viewRequiredInfoDocumentTemplate', { static: false })
  viewRequiredInfoDocumentTemplate!: TemplateRef<any>;


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
  empTabIndex = 0;
  array = [];
  nextUrl: any = '';
  previousUrl: any = '';
  appealType = '';
  appealScreenName = '';
  reAssignSearch = '';
  currentDate = '';
  pageId = 'PRTDV';

  tabIndex = 0;

  uploadLimit = 2;
  fileType = 'pdf';
  accept = 'application/pdf';

  recommendationOnHold = new entPermitApplicationRecommendationOnhold();
  assignedOfficerHistory = new entPermitApplicationAssignedOfficerHistory();

  @ViewChild('assignedToTemplate', { static: false })
  assignedToTemplate!: TemplateRef<any>;

  @ViewChild('emailHistory') emailHistory!: any;

  @ViewChild(TabGroupComponent, { static: false }) TabGroupComponent: any;

  @ViewChild(VerticalTabGroupComponent, { static: false })
  VerticalTabGroupComponent: any;

  primaryDocLst = [{ tabTitle: 'Applicant Info' }, { tabTitle: 'Declaration' }];
  empDocLst = [{ tabTitle: 'Company Info' }, { tabTitle: 'Document' }];

  // @ViewChild('tabGroup') tabGroup1!: TabGroupComponent;

  @ViewChild('DocumentsComponent', { static: false }) document!: DocumentsComponent;

  detailType: any = '';

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
  ) {
    this.route.paramMap.subscribe((params) => {
      this.init();
    });
  }

  ngAfterViewInit() {
    // Access tabGroup here, it should be defined now
    // console.log('Tab Group:', this.TabGroupComponent);
  }


  async init() {
    
    await this.data.checkToken();

    this.nextUrl = "";
    this.previousUrl = "";
    const paramsId = this.route.snapshot.paramMap.get('id');


    const obj: any = await this.urlService.decode(paramsId);
    this.array = obj.array || [];
    this.currentIndex = obj.currentIndex || 0;

    // Determine detailType based on the object's array length and index
    this.detailType = (this.currentIndex === 0 && this.array.length === 0) ? 'new' : 'edit';


    if (this.array.length > 0) {
      this.nextUrl = this.currentIndex < this.array.length - 1
        ? await this.urlService.encode({ currentIndex: this.currentIndex + 1, array: this.array })
        : "";

      this.previousUrl = this.currentIndex > 0
        ? await this.urlService.encode({ currentIndex: this.currentIndex - 1, array: this.array })
        : "";
    }

    this.openPermit(obj.array[obj.currentIndex]);
    this.doSwap(0);
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
        this.appService.helpFile =
          'Work%20Permit%20Category%20_%20One%20Year%20or%20less%20Detail%20.pdf';
        break;
      case 'APPEL':
        this.appService.helpFile = 'Appeal%20Detail%20.pdf';
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
          this.loadRequiredInfoDetail();
        } else {
          this.appealType = success.applicationCategoryValue;
          this.appealScreenName = success.applicationCategoryDescription;
          this.type = success.permitTypeValue;
          this.getScreenType();
          this.screenName = success.permitTypeDescription;
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
              .plstentInvestorPermitApplicationPrimaryApplicantDependentsDetail[0]
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
          this.loadBorderInformationDetail();
          break;
        case 'History':
          this.loggedInHigherOfficer();
          this.historyTabChanged('assignedOfficerHistory');
          break;
        case 'Required Info':
            this.loadRequiredInfoDetail();
            break;
      }
    }
  }

  onVerticalTabChange(event: any) {
    if (this.investorParams.permitApplicationId > 0) {
      switch (event.tabTitle) {
        case 'Primary Applicant':
          this.loadPrimaryApllicantDetail();
          this.doSwap(0);
          break;
        case 'Applicant Document':
          this.loadApplicantDocDetail();
          break;
        case 'Dependent':
          this.loadDependentDetail();
          break;
        case 'Company':
          this.loadEmployerDetail();
          this.doEmpSwap(0)
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


  async viewDocument(val: any, index: any) {
    // this.getDocType = type;
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

  savePermitDoc(val: any) {
    if (this.permitDocDetail.comments != '') {
      this.errorTrue = false;
      this.isApprvBtn = true;
      this.permitDocDetail.documentStatusValue = val;
      this.apiService
        .saveInvestorPermitApplicationDocumentsDetail(this.permitDocDetail)
        .subscribe((success) => {
          if (this.investorParams.applicationCategoryValue === 'REGLR') {
            if (this.getDocType === 'applicant') {
              this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.plstentInvestorPermitApplicationDocuments[
                this.docIndex
              ].plstentInvestorPermitApplicationDocumentsDetail =
                success.plstentInvestorPermitApplicationDocumentsDetail;
            }
            else if (this.getDocType === 'employer') {
              this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.
              pentInvestorPermitApplicationCompanyDetail.plstentInvestorPermitApplicationDocuments[
                this.docIndex
              ].plstentInvestorPermitApplicationDocumentsDetail =
                success.plstentInvestorPermitApplicationDocumentsDetail;
            }
            else {
              this.investorParams.pentAppealApplicationRequiredInformation.plstentAppealApplicationRequiredDocuments[
                this.docIndex
              ].plstentWorkPermitApplicationDocumentsDetail =
                success.plstentWorkPermitApplicationDocumentsDetail;
            }
          } else {
            if (this.getDocType === 'applicant') {
              this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.plstentInvestorPermitApplicationDocuments[
                this.docIndex
              ].plstentInvestorPermitApplicationDocumentsDetail =
                success.plstentInvestorPermitApplicationDocumentsDetail;
            }
            else if (this.getDocType === 'employer') {
              this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.
              pentInvestorPermitApplicationCompanyDetail.plstentInvestorPermitApplicationDocuments[
                this.docIndex
              ].plstentInvestorPermitApplicationDocumentsDetail =
                success.plstentInvestorPermitApplicationDocumentsDetail;
            }
            else {
              this.investorParams.pentAppealApplicationRequiredInformation.plstentAppealApplicationRequiredDocuments[
                this.docIndex
              ].plstentWorkPermitApplicationDocumentsDetail =
                success.plstentWorkPermitApplicationDocumentsDetail;
            }
          }
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

  savePermitDependentDoc(val: any) {
    if (this.permitDocDetail.comments != '') {
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

  dependantTabChanged(val: any) {
    // console.log(val);
    this.dependentType =
      val.investorPermitApplicationPrimaryApplicantDependentsDetailId;
    this.dependentDocDetail = val;
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

  loadPrimaryApllicantDetail() {
    this.apiService
      .loadInvesterPermitApplicationPrimaryApplicantDetails(this.investorParams)
      .subscribe((success) => {
        this.investorParams = success;
        this.VerticalTabGroupComponent.changeTabByIndex(0);
      });
  }

  loadDependentDetail() {
    this.apiService
      .loadInvestorPermitApplicationDependentDetails(this.investorParams)
      .subscribe((success) => {
        this.investorParams = success;
        this.dependantTabChanged(
          this.investorParams.pentInvestorPermitApplication
            .pentInvestorPermitApplicationPrimaryApplicantDetail
            .plstentInvestorPermitApplicationPrimaryApplicantDependentsDetail[0]
        );
        if (this.investorParams.pentInvestorPermitApplication.pentInvestorPermitApplicationPrimaryApplicantDetail.plstentInvestorPermitApplicationPrimaryApplicantDependentsDetail.length > 0) {
          this.isFamilyIncluded = 'Y'
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

  doEmpSwap(val: any) {
    this.empTabIndex = val;
  }

  doSwap(val: any) {
    this.tabIndex = val;
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
 
}
