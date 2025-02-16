import { CommonModule, NgClass } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
import { entPermitApplication, entPermitApplicationAssignedOfficerHistory, entPermitApplicationEmailHistory } from '../../../common/api-services/application-api/application-api.classes';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from '../../../app.service';
import { ApplicationApiService } from '../../../common/api-services/application-api/application-api.service';
import { AppSettingsService } from '../../../common/services/app-settings/app-settings.service';
import { CoreService } from '../../../common/services/core/core.service';
import { DataService } from '../../../common/services/data/data.service';
import { DialogAnimateService } from '../../../common/services/dialog-animated/dialog-animate.service';
import { InitialDataService } from '../../../common/services/initialData/initial-data.service';
import { UrlService } from '../../../common/services/url/url.service';
import { FilterAndSortPipe } from '../../../app-core/form-input/pipes/filter-and-sort/filter-and-sort.pipe';

@Component({
  selector: 'app-common-history',
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
    InputControlComponent,
    AppDatePipe,
    FormsModule,
    RouterModule,
    FilterAndSortPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './common-history.component.html',
  styleUrl: './common-history.component.scss'
})
export class CommonHistoryComponent {

  verticalSegment = '';
  __permitParams = new entPermitApplication();
  __assignedOfficerHistory = new entPermitApplicationAssignedOfficerHistory();
  __permitEmailHistory = new entPermitApplicationEmailHistory();
  reAssignSearch = '';

  @ViewChild('assignedToTemplate', { static: false })
  assignedToTemplate!: TemplateRef<any>;

  @ViewChild('emailHistory') emailHistory!: any;

  @Output() valueChanged = new EventEmitter<any>();


  isLoading = true;

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

  @Input()
  set permitParamsLST(permitValue: any) {
    this.__permitParams = permitValue || new entPermitApplication();
  }
  get permitParamsLST() {
    return this.__permitParams;
  }

  __permitApplicationAssignedOfficerHistory = new entPermitApplicationAssignedOfficerHistory();

  @Input()
  set permitApplicationAssignedOfficerHistory(permitApplicationAssignedOfficerHistory: any) {
    this.__assignedOfficerHistory = permitApplicationAssignedOfficerHistory || new entPermitApplicationAssignedOfficerHistory();
  }
  get permitApplicationAssignedOfficerHistory() {
    return this.__assignedOfficerHistory;
  }

  async init() {

    // this.verticalSegment = 'statusHistory';
    await this.data.checkToken();

    
  }

  loggedInHigherOfficer() {
    this.isLoading = false;
    const obj = {
      data: this.__permitParams.permitApplicationId,
    };
    this.apiService
      .checkWhetherLoggedinUserisHigherOfficerforResidentPermit(obj)
      .subscribe((success) => {
        this.__assignedOfficerHistory = success;
        this.isLoading = true;
      });
  }


  selfAssign() {
    this.__assignedOfficerHistory.permitApplicationId = this.__permitParams.permitApplicationId;
    this.apiService.saveResidentPermitApplicationAssignedOfficerSelfAssign(this.__assignedOfficerHistory).subscribe((success) => {
      this.__permitParams = success;
      this.valueChanged.emit(this.__permitParams);
      this.data.successMessage(
        success.msg.infoMessage.msgDescription,
        'Success'
      );
    })
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
  async openEmailHistory(element: any) {
    this.__permitEmailHistory = element;
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

  getAssigedOfficer(val: any) {
    this.__assignedOfficerHistory.assignedTo = val.userLoginId;
    this.apiService
      .saveResidentPermitApplicationAssignedOfficerSelfAssign(
        this.__assignedOfficerHistory
      )
      .subscribe((success) => {
        this.__permitParams = success;
        this.valueChanged.emit(this.__permitParams);
        this.dialog.closeDialog();
      });
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

}
