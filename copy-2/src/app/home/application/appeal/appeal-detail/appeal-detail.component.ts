import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InnerScroll, Row } from '../../../../app-core/core-component/core-component.component';
import { AppButton } from '../../../../app-core/core-component/core-directives.directive';
import { InputControlComponent } from '../../../../app-core/form-input/input-control/input-control.component';
import { AppTableComponent, CellDefDirective, CellHeaderDefDirective } from '../../../../app-core/template/app-table/app-table.component';
import { AppDatePipe } from '../../../../common/pipes/app-date/app-date.pipe';
import { AppCheckBoxComponent } from '../../../../common/templates/app-check-box';
import { LabelTemplates, StatusTextComponent } from '../../../../common/templates/label-templates';
import { CircleProgress } from '../../../../common/templates/cirle-progress';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentsComponent } from '../../../../app-core/template/documents/documents.component';
import { ApplicationApiService } from '../../../../common/api-services/application-api/application-api.service';
import { CoreService } from '../../../../common/services/core/core.service';
import { DataService } from '../../../../common/services/data/data.service';
import { DialogAnimateService } from '../../../../common/services/dialog-animated/dialog-animate.service';
import { UrlService } from '../../../../common/services/url/url.service';
import { TabComponent, TabGroupComponent, VerticalTabComponent, VerticalTabGroupComponent } from '../../../../common/templates/tabs';
import { AppSettingsService } from '../../../../common/services/app-settings/app-settings.service';
import { AccordionModule } from '../../../../common/templates/accordion/accordion.module';
import { PdfViewerComponent } from '../../../../app-core/template/pdf-viewer/pdf-viewer.component';
import { entPermitApplication } from '../../../../common/api-services/application-api/application-api.classes';
import { InitialDataService } from '../../../../common/services/initialData/initial-data.service';

@Component({
  selector: 'app-appeal-detail',
  standalone: true,
  imports: [InnerScroll, Row, LabelTemplates, CommonModule, AppButton, AppTableComponent, InnerScroll, CellDefDirective, CellHeaderDefDirective, StatusTextComponent, FormsModule, InputControlComponent, AppDatePipe, AppCheckBoxComponent, MatCheckboxModule, CircleProgress, TabGroupComponent, TabComponent, DocumentsComponent, AccordionModule, VerticalTabGroupComponent, VerticalTabComponent, PdfViewerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './appeal-detail.component.html',
  styleUrl: './appeal-detail.component.scss'
})
export class AppealDetailComponent implements OnInit {

  uploadUrl = 'blob:https://gms.itgalax.in/6c006710-e1f6-4dcf-9fe6-ed911fb8b1db';
  permitParams = new entPermitApplication()
  currentIndex = 0;
  detailType: any = '';
  nextUrl: any = "";
  previousUrl: any = "";
  array: any = [];
  activeList: any = []
  verticalSegment = ''
  historySegment = ''
  borderInfoSegment = ''
  swap = true;
  blnShowSelfAssignBtn = 'true'
  blnShowReAssignBtn = 'true'
  errorTrue = false;
  id: any = 0;

  permitId = 0;
  type = '';
  screenName = '';


  @ViewChild('emailHistory') emailHistory!: any;
  loadingTrue = false;

  documentColumn: any = ["documentType", "dependentName", "uploadFileName", "documentNo", "expiryDate", "action"]
  documentColumnName: any = ["Document Type", "Dependant Name", "Uploaded File Name", "Document Number", "Expiry Date", "Action"]

  applicantDocumentColumns: any = ["documentType", "documentNo", "fileName", "uploadedDateTime", "status", "action"];
  applicantDocumentColumnsName: any = ["Document Type", "Uploaded File Name", "Document Number", "Expiry Date ", "Actions", ""]

  dependentColumn: any = ["fullName", "gender", "dateOfBirth", "passportNo", "relationShip"]
  dependentColumnName: any = ["FullName", "Gender", "Date Of Birth", "Passport No", "Relationship"]

  assignedOfficerColumn: any = ["assignedToFullName", "assignedByFullName", "assignedDate", "statusDescription", "tat"];
  assignedOfficerColumnName: any = ["Assigned To", "Assigned By", "Assigned Date  / Time", "status", "Turn Around Time"];

  statusHistoryColumn: any = ["statusDescription", "changedBy", "changedDate", "tatInHours"];
  statusHistoryColumnName: any = ["Status", "Changed By", "Changed Date / Time", "Total Turn Around Time"];

  emailHistoryColumn: any = ["fromEmailId", "toEmailId", "sentDate", "sentStatusDescription", "action"];
  emailHistoryColumnName: any = ["From Email ID", "To Email ID", "Date Sent / Time", "Email Status", "Action"];

  dependentColumns: any = ["name", "fullName", "Gender", "dob", "passportNumber", "relationship"];
  dependentColumnsName: any = ["#", "Full Name", "Gender", "Date Of Birth", "Passport No", 'Relationship']

  dependentDocumentColumns: any = ["documentType", "dependent", "fileName", "documentNo", "uploadedDateTime", "status", "action"];
  dependentDocumentColumnsName: any = ["Document Type", "Dependent Name", "Uploaded File Name", "Document Number", "Expiry Date ", "Actions", ""]

  employerDocumentColumns: any = ["documentType", "fileName", "documentNo", "uploadedDateTime", "status", "action"];
  employerDocumentColumnsName: any = ["Document Type", "Uploaded File Name", "Document Number", "Expiry Date ", "Actions", ""]

  dpoColunm: any = ["assignedTo", "assignedBy", "assignedDateTime", "statusValue", "tat"]
  dpoColunmName: any = ["Lorem ", "Lorem Ipsum", "Ipsum", "Lorem Ipsum", "Lorem"]

  controversialColunm: any = ["assignedTo", "assignedBy", "assignedDateTime", "statusValue", "tat"]
  controversialColunmName: any = ["Lorem ", "Lorem Ipsum", "Ipsum", "Lorem Ipsum", "Lorem"]

  travelHistoryColunm: any = ["assignedTo", "assignedBy", "assignedDateTime", "statusValue", "tat"]
  travelColunmName: any = ["Lorem ", "Lorem Ipsum", "Ipsum", "Lorem Ipsum", "Lorem"]

  statusColumn: any = ["assignedTo", "assignedBy", "assignedDateTime", "statusValue", "tat"]
  statusColumnName: any = ["Lorem ", "Lorem Ipsum", "Ipsum", "Lorem Ipsum", "Lorem"]

  assignedOfficerColunm: any = ["assignedTo", "assignedBy", "assignedDate", "statusDescription", "tatInHours"]
  assignedOfficerColunmName: any = ["Assigned To", "Assigned By", "Assigned Date/ Time", "Status", "Turn Around Time"]

  statusHistoryColunm: any = ["statusDescription", "changedBy", "changedDate", "tatInHours"]
  statusHistoryColunmName: any = ["Status ", "Changed By", "Changed Date/Time", "Total Turn Around Time"]

  communicationColunm: any = ["fromEmailId", "toEmailId", "sentDate", "sentStatusDescription", "action"]
  communicationColunmName: any = ["From Email ID ", "To Email ID", "Date Sent/Time", "Email Status", "Action"]

  recommendationData = []
  communicationTabledata: any = []
  documentResult = {
    resultSet: [],
    resultSet1: [],
  }

  applicantTable: any = []
  dependentTable: any = []
  dependentDocumentTable: any = []
  employerDocumentTable: any = []
  assignedOfficerTabledata: any = []
  statusHistoryTabledata: any = []
  listOfDeclaration: any = [
    "We agree to comply with all the requirements in this form and to submit all the Documents requested, therein.",
    "We agree to comply fully with the terms and conditions of the permit to employ that may be issued as a result of this application.",
    "We fully indemnify the Government of the Fiji Islands against any expense in connection with the presence in or removal from the Fiji Islands of (employee’s name) …………………………………………………………………………………… and all members of his/her family who may be issued with permits by virtue of their relationship to the applicant.",
    "We will provide an Immigration Security Bond in respect of the repatriation of this employee and his/her family from the Fiji Islands when the permits are approved.",
    "We certify that all the above information is true to the best of our knowledge and belief."
  ]

  constructor(
    public route: ActivatedRoute,
    public url: UrlService,
    public apiService: ApplicationApiService,
    public data: DataService,
    public dialog: CoreService,
    public router: Router,
    public dialogService: DialogAnimateService,
    public appSettingService: AppSettingsService,
    public initialData: InitialDataService,
    public appSetting : AppSettingsService
  ) {
    // this.route.paramMap.subscribe((params: any) => {
    //   this.init();
    // });
  }

  ngOnInit() {

  }

  async init() {
    await this.data.checkToken();
    let id = this.route.snapshot.paramMap.get('id');
    let params: any = await this.url.decode(id);
    this.permitId = params.parentId;    
    this.type = params.type;
    await this.getScreenType();
    this.openAppealDetail()
  }

  getScreenType() {
    switch (this.type) {
      case 'NGOS':
        this.screenName = 'Non-Government Organisation (NGO - Not for profit organisation)';
        break;
      case 'MCFHV':
        this.screenName = 'Maritime and Fishing';
        break;
      case 'OSEAS':
        this.screenName = 'Secondments';
        break;
      case 'WP3YA':
        this.screenName = 'Long-term (3 years)';
        break;
      case 'WPLT1':
        this.screenName = 'One year or less';
        break;
    }
  }

  openAppealDetail() {
    const obj = {
      data: this.id
    }
    this.apiService.loadappealapplicationwithallchilds(obj).subscribe((success) => {
      this.permitParams = success;

      this.recommendationData = success.pentAppealApplicationRequiredInformation.plstentAppealApplicationRequiredDocuments;

      this.assignedOfficerTabledata = success.plstentPermitApplicationAssignedOfficerHistory

      this.statusHistoryTabledata = success.plstentPermitApplicationStatusHistory

      this.communicationTabledata = success.plstentPermitApplicationEmailHistory

      this.applicantTable = success.pentWorkPermitApplicationInformation.pentWorkPermitApplicationPrimaryApplicantDetail.plstentWorkPermitApplicationDocuments

      this.dependentTable = success.pentWorkPermitApplicationInformation.pentWorkPermitApplicationPrimaryApplicantDetail.plstentWorkPermitApplicationPrimaryApplicantDependentsDetail.plstentWorkPermitApplicationDocuments

      this.dependentDocumentTable = success.pentWorkPermitApplicationInformation.pentWorkPermitApplicationPrimaryApplicantDetail.plstentWorkPermitApplicationDocuments

      this.employerDocumentTable = success.pentWorkPermitApplicationInformation.pentWorkPermitApplicationPrimaryApplicantDetail.plstentWorkPermitApplicationDocuments


    })
  }
  onTabChange(event: any) {

    switch (event.tabTitle) {
      case 'Required Info':
        break;
      case 'Application':
        this.verticalTabChanged('primaryApplicant');
        break;
      case 'Recommendation':
        break;
      case 'Border Information':
        break;
      case 'History':
        this.historyTabChanged('assignedOfficerHistory')
        break;

    }
  }

  verticalTabChanged(event: any) {

    switch (event) {
      case 'primaryApplicant':
        this.verticalSegment = event;
        break;
      case 'applicantDocument':
        this.verticalSegment = event;
        break;
      case 'dependent':
        this.verticalSegment = event;
        break;
      case 'dependentDocument':
        this.verticalSegment = event;
        break;
      case 'employer':
        this.verticalSegment = event;
        break;
      case 'employerDocument':
        this.verticalSegment = event;
        break;
      case 'employerApplication':
        this.verticalSegment = event;
        break;

    }
  }

  historyTabChanged(event: any) {
    switch (event) {
      case 'assignedOfficerHistory':
        this.historySegment = event;
        break;
      case 'statusHistory':
        this.historySegment = event;
        break;
      case 'communicationHistory':
        this.historySegment = event;
        break;
    }
  }

  borderInfoTab(event: any) {
    switch (event) {
      case 'controversial':
        this.borderInfoSegment = event;
        break;
      case 'travelHistory':
        this.borderInfoSegment = event;
        break;
      case 'upliftStatus':
        this.borderInfoSegment = event;
        break;
      case 'dpo':
        this.borderInfoSegment = event;
        break;
    }
  }
  doSwap(val: any) {

    if (val === 'cmnt') {
      this.swap = true;
    } else {
      this.swap = false;
    }
  }



  async openEmailHistory(element: any) {
    // this.agentEmailHistory = element;
    let dialogResponse: any = await this.dialogService.open(this.emailHistory, {
      disableClose: true,
      height: '100%',
      width: '100%',
      maxWidth: '560px',
      position: { right: '0px', bottom: '15px' },
      direction: 'ltr',
      animation: { to: "left" },
    })
  }
  onSelected(event: any) {
    this.activeList = event.array;
  }
  isCurrentResident(event: any) {
    // console.log(event);
    if (event.checked === true) {

    }
  }

}
