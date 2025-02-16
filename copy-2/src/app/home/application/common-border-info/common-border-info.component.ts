import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppService } from '../../../app.service';
import { ApplicationApiService } from '../../../common/api-services/application-api/application-api.service';
import { AppSettingsService } from '../../../common/services/app-settings/app-settings.service';
import { CoreService } from '../../../common/services/core/core.service';
import { DataService } from '../../../common/services/data/data.service';
import { DialogAnimateService } from '../../../common/services/dialog-animated/dialog-animate.service';
import { InitialDataService } from '../../../common/services/initialData/initial-data.service';
import { UrlService } from '../../../common/services/url/url.service';
import { entGetActiveControversiallist, entGetListOfPassportInfoInput, entPermitApplication, entPermitInfoInput, entTravelhistory } from '../../../common/api-services/application-api/application-api.classes';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Row, InnerScroll } from '../../../app-core/core-component/core-component.component';
import { AppButton } from '../../../app-core/core-component/core-directives.directive';
import { InputControlComponent } from '../../../app-core/form-input/input-control/input-control.component';
import { AppTableComponent, CellDefDirective, CellHeaderDefDirective } from '../../../app-core/template/app-table/app-table.component';
import { DocumentsComponent } from '../../../app-core/template/documents/documents.component';
import { AppAccessDirective } from '../../../common/permission/app-access.directive';
import { ButtonAccessDirective } from '../../../common/permission/button-access.directive';
import { ChunkPipe } from '../../../common/pipes/address-format/address-format.pipe';
import { AppDatePipe } from '../../../common/pipes/app-date/app-date.pipe';
import { TatPipe } from '../../../common/pipes/app-tat/tat.pipe';
import { AccordionModule } from '../../../common/templates/accordion/accordion.module';
import { AppCheckBoxComponent } from '../../../common/templates/app-check-box';
import { LabelTemplates, StatusTextComponent } from '../../../common/templates/label-templates';
import { VerticalTabComponent, VerticalTabGroupComponent } from '../../../common/templates/tabs';

@Component({
  selector: 'app-common-border-info',
  standalone: true,
  imports: [
    Row,
    LabelTemplates,
    CommonModule,
    InnerScroll,
    AppTableComponent,
    CellDefDirective,
    TatPipe,
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
    NgClass,
    AppDatePipe,
    FormsModule,
    RouterModule,
    AppAccessDirective,
    ButtonAccessDirective,
    ChunkPipe
  ],
  templateUrl: './common-border-info.component.html',
  styleUrl: './common-border-info.component.scss'
})
export class CommonBorderInfoComponent {
  genderVal = ''
  permitLst: any = [];
  passPortLst: any = [];
  __permitParams = new entPermitApplication();
  __controversialList = new entGetActiveControversiallist();
  __travelHistory = new entTravelhistory();
  __permitDetail = new entPermitInfoInput();
  __passportDetail = new entGetListOfPassportInfoInput()


  @Input()
  set permitParamsLST(permitValue: any) {
    this.__permitParams = permitValue || new entPermitApplication();
  }
  get permitParamsLST() {
    return this.__permitParams;
  }

  constructor(
    public initialData: InitialDataService,
    public appSettingService: AppSettingsService,
    public dialog: CoreService,
    public urlService: UrlService,
    public data: DataService,
    public apiService: ApplicationApiService,
    public route: ActivatedRoute,
    public appService: AppService,
    public dialogService: DialogAnimateService,
    public appSetting: AppSettingsService,
    public dialogBox: MatDialog
  ) {
    this.route.paramMap.subscribe((params) => {
      this.init();
    });
  }

  async init() {
  }

  borderTabChange(event: any) {
    if (this.__permitParams.permitApplicationId > 0) {
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
    if (this.__permitParams.pentVisitorsVisaApplication
      .pentVisitorsVisaApplicationPrimaryApplicantDetail.genderValue === 'FEMAL') {
      this.genderVal = 'F'
    }
    if (this.__permitParams.pentVisitorsVisaApplication
      .pentVisitorsVisaApplicationPrimaryApplicantDetail.genderValue === 'MALE') {
      this.genderVal = 'M'
    }
    const obj = {
      firstname: this.__permitParams.pentVisitorsVisaApplication
        .pentVisitorsVisaApplicationPrimaryApplicantDetail.givenNames,

      lastname: this.__permitParams.pentVisitorsVisaApplication
        .pentVisitorsVisaApplicationPrimaryApplicantDetail.surname,

      dateofbirth: this.__permitParams.pentVisitorsVisaApplication
        .pentVisitorsVisaApplicationPrimaryApplicantDetail.dateOfBirth,

      gender: this.genderVal,

      nationality: this.__permitParams.pentVisitorsVisaApplication
        .pentVisitorsVisaApplicationPrimaryApplicantDetail.nationalityValue,

      passportno: this.__permitParams.pentVisitorsVisaApplication
        .pentVisitorsVisaApplicationPrimaryApplicantDetail.passportNumber
    }

    this.apiService.getControversialList(obj).subscribe((success) => {
      this.__controversialList = success
    })
  }

  getTravelHistory() {

    if (this.__permitParams.pentVisitorsVisaApplication
      .pentVisitorsVisaApplicationPrimaryApplicantDetail.genderValue === 'FEMAL') {
      this.genderVal = 'F'
    }
    if (this.__permitParams.pentVisitorsVisaApplication
      .pentVisitorsVisaApplicationPrimaryApplicantDetail.genderValue === 'MALE') {
      this.genderVal = 'M'
    }
    const obj = {
      firstname: this.__permitParams.pentVisitorsVisaApplication
        .pentVisitorsVisaApplicationPrimaryApplicantDetail.givenNames,

      lastname: this.__permitParams.pentVisitorsVisaApplication
        .pentVisitorsVisaApplicationPrimaryApplicantDetail.surname,

      dateofbirth: this.__permitParams.pentVisitorsVisaApplication
        .pentVisitorsVisaApplicationPrimaryApplicantDetail.dateOfBirth,

      gender: this.genderVal,

      nationality: this.__permitParams.pentVisitorsVisaApplication
        .pentVisitorsVisaApplicationPrimaryApplicantDetail.nationalityValue,

      passportno: this.__permitParams.pentVisitorsVisaApplication
        .pentVisitorsVisaApplicationPrimaryApplicantDetail.passportNumber
    }

    this.apiService.getTravelHistory(obj).subscribe((success) => {
      this.__travelHistory = success
    })
  }

  getPermitDetils() {
    this.__permitDetail.dateOfBirth = this.__permitParams.pentVisitorsVisaApplication
      .pentVisitorsVisaApplicationPrimaryApplicantDetail.dateOfBirth;
    this.__permitDetail.firstName = this.__permitParams.pentVisitorsVisaApplication
      .pentVisitorsVisaApplicationPrimaryApplicantDetail.givenNames;
    this.__permitDetail.lastName = this.__permitParams.pentVisitorsVisaApplication
      .pentVisitorsVisaApplicationPrimaryApplicantDetail.surname;
    this.__permitDetail.passportNo = this.__permitParams.pentVisitorsVisaApplication
      .pentVisitorsVisaApplicationPrimaryApplicantDetail.passportNumber;
    this.__permitDetail.nationality = this.__permitParams.pentVisitorsVisaApplication
      .pentVisitorsVisaApplicationPrimaryApplicantDetail.nationalityValue,
      this.apiService.getPermitDetails(this.__permitDetail).subscribe((success) => {
        this.permitLst = success.permitList
      })
  }


  getPassportDetail() {

    if (this.__permitParams.pentVisitorsVisaApplication
      .pentVisitorsVisaApplicationPrimaryApplicantDetail.genderValue === 'FEMAL') {
      this.genderVal = 'F'
    }
    if (this.__permitParams.pentVisitorsVisaApplication
      .pentVisitorsVisaApplicationPrimaryApplicantDetail.genderValue === 'MALE') {
      this.genderVal = 'M'
    }
    this.__passportDetail.dateofbirth = this.__permitParams.pentVisitorsVisaApplication
      .pentVisitorsVisaApplicationPrimaryApplicantDetail.dateOfBirth;
    this.__passportDetail.firstname = this.__permitParams.pentVisitorsVisaApplication
      .pentVisitorsVisaApplicationPrimaryApplicantDetail.givenNames;
    this.__passportDetail.lastname = this.__permitParams.pentVisitorsVisaApplication
      .pentVisitorsVisaApplicationPrimaryApplicantDetail.surname;
    this.__passportDetail.gender = this.genderVal
    this.apiService.getPassportList(this.__passportDetail).subscribe((success) => {
      this.passPortLst = success.permitList
    })

  }


}
