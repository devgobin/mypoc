import { CommonModule, NgClass } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Row, InnerScroll } from '../../../../../../app-core/core-component/core-component.component';
import { AppButton } from '../../../../../../app-core/core-component/core-directives.directive';
import { InputControlComponent } from '../../../../../../app-core/form-input/input-control/input-control.component';
import { InputPlacerComponent } from '../../../../../../app-core/form-input/input-placer/input-placer.component';
import { AppTableComponent, CellDefDirective, CellHeaderDefDirective } from '../../../../../../app-core/template/app-table/app-table.component';
import { DocumentsComponent } from '../../../../../../app-core/template/documents/documents.component';
import { PdfViewerComponent } from '../../../../../../app-core/template/pdf-viewer/pdf-viewer.component';
import { AppDatePipe } from '../../../../../../common/pipes/app-date/app-date.pipe';
import { AppSafePipe } from '../../../../../../common/pipes/app-safe/app-safe.pipe';
import { ByteToMbPipe } from '../../../../../../common/pipes/byte-to-mb/byte-to-mb.pipe';
import { AccordionModule } from '../../../../../../common/templates/accordion/accordion.module';
import { AppCheckBoxComponent } from '../../../../../../common/templates/app-check-box';
import { CircleProgress } from '../../../../../../common/templates/cirle-progress';
import { LabelTemplates, StatusTextComponent } from '../../../../../../common/templates/label-templates';
import { TabComponent, TabGroupComponent, VerticalTabComponent, VerticalTabGroupComponent } from '../../../../../../common/templates/tabs';
import { AppService } from '../../../../../../app.service';
import { entPermitApplication, entPermitApplicationRecommendationCustomerResponseDocumentDetail, entPermitApplicationRecommendationDocument, entPermitApplicationRecommendationOnhold, entWorkPermitApplicationDocumentsDetail } from '../../../../../../common/api-services/application-api/application-api.classes';
import { ApplicationApiService } from '../../../../../../common/api-services/application-api/application-api.service';
import { AppSettingsService } from '../../../../../../common/services/app-settings/app-settings.service';
import { CoreService } from '../../../../../../common/services/core/core.service';
import { DataService } from '../../../../../../common/services/data/data.service';
import { InitialDataService } from '../../../../../../common/services/initialData/initial-data.service';
import { UrlService } from '../../../../../../common/services/url/url.service';
import { format } from 'date-fns';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAlertComponent } from '../../../../../../app-core/delete-alert/delete-alert.component';

@Component({
  selector: 'app-investor-recommendation-content',
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
    NgClass,
    PdfViewerComponent,
    AppDatePipe,
    AppSafePipe,
    FormsModule,
    MatRadioModule,
    RouterModule,
    ByteToMbPipe,
    InputPlacerComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './investor-recommendation-content.component.html',
  styleUrl: './investor-recommendation-content.component.scss'
})
export class InvestorRecommendationContentComponent {
  @Input() index = 0;
  @Input() item: any;
  @Input() parentObj = new entPermitApplication();
  @Output('parentData') parentData: EventEmitter<any> = new EventEmitter();
  @Output('checkLstCount') checkLstCount: EventEmitter<any> = new EventEmitter();
  @Output('getRecommend') getRecommend: EventEmitter<any> = new EventEmitter();
  today = format(new Date(), this.appSettingService.environment.serverDateFormat);
  rejectChecked = false;
  getRejectVal = false;
  recommendTabId = 0;
  errorTrue = false;
  onHoldBtnDisable = false;
  isReasonAvail = true;
  isReasonOther = false;
  otherReason = '';
  showOnHoldBtn = false;
  isRecommendForAvail = false;
  isRecommendMand = false;
  rejectionIsChecked = false;
  getDateRange: any;
  url = '';
  rangeLabelLst = [
    { label: 'Date Range', trueValue: 'DATRN', falseValue: '' },
    { label: 'Fixed Period', trueValue: 'FIXPR', falseValue: '' },
    { label: 'Until Date', trueValue: 'UNTDT', falseValue: '' },
  ];

  recommendForLst = [
    { label: 'Approval', trueValue: 'APPRV', falseValue: '' },
    { label: 'Rejection', trueValue: 'REJEC', falseValue: '' },
  ]

  docIndex = 0;
  docName = '';
  docType = '';
  accordionTabList = [{ tabTitle: 'Comments' }, { tabTitle: 'Checklist' }];
  tabIndex = 0;
  currentDate = '';
  isValidatityAvail: any = false;

  uploadLimit = 2;
  // fileType = 'pdf';
  // accept = 'application/pdf';

  fileType = 'xlsx, doc, pdf, docx, ppt, png, jpg, jpeg , webp, tiff, gif, tif';
  accept = 'image/png, image/jpg, image/jpeg , image/webp, image/tiff, image/gif, image/tif, image/*,application/pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, application/pdf, application/msword,application/ppt,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.ms-powerpoint';

  recommendationOnHold = new entPermitApplicationRecommendationOnhold();
  // permitDocDetail = new entWorkPermitApplicationDocumentsDetail();
  permitDocDetail = new entPermitApplicationRecommendationCustomerResponseDocumentDetail();


  @ViewChild('viewDocumentTemplate', { static: false })
  viewDocumentTemplate!: TemplateRef<any>;

  @ViewChild('viewTemplate', { static: false })
  viewTemplate!: TemplateRef<any>;

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
    public appSetting: AppSettingsService,
    public dialogBox: MatDialog,
  ) {
    // console.log(this.index);
    this.currentDate = this.appService.getCurrentDate();
  }

  ngOnInit(): void {
    this.hideFuncAddOnHold(this.parentObj);
  }

  // uploadRecommendationDocument(event: any, item: any) {
  //   item.pentPermitApplicationRecommendationDocument.pentDocumentFile.documentFileName =
  //     event.fileName;
  //   item.pentPermitApplicationRecommendationDocument.pentDocumentFile.documentSize =
  //     event.fileSize;
  //   item.pentPermitApplicationRecommendationDocument.pentDocumentFile.documentType =
  //     event.fileType;
  //   item.pentPermitApplicationRecommendationDocument.pentDocumentFile.fileContent =
  //     event.content;
  //   // item.pentPermitApplicationRecommendationDocument.pentDocumentFile.fileContent = event.content;
  // }

  uploadRecommendationDocument(event: any, item: any) {
    event.forEach((val:any)=>{
      let docFile = new entPermitApplicationRecommendationDocument()
      docFile.pentDocumentFile.documentFileName = val.fileName;
      docFile.pentDocumentFile.documentSize = val.fileSize;
      docFile.pentDocumentFile.documentType = val.fileType;
      docFile.pentDocumentFile.fileContent = val.content;
      item.plstentPermitApplicationRecommendationDocument.push(docFile)
      console.log(item.plstentPermitApplicationRecommendationDocument, 'list');
    })
  }

  deleteDoc(files: any, index:any) {
    const dialogRef = this.dialogBox.open(DeleteAlertComponent, {
      width: '630px',
      data: {
        msg: `Are you Sure, You want to delete ${files.pentDocumentFile.documentFileName}`,
        type: 'submitAlert',
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
     if(files.permitApplicationRecommendationDocumentId === 0){
        this.item.plstentPermitApplicationRecommendationDocument.splice(index,1)
     }
     else{
      const obj = {
        data: files.permitApplicationRecommendationDocumentId
      }
      this.apiService.deletePermitApplicationRecommendationDocument(obj).subscribe((success)=>{
        this.item.plstentPermitApplicationRecommendationDocument = success.plstentPermitApplicationRecommendationDocument
      })
     }
    })
    // item.pentPermitApplicationRecommendationDocument.pentDocumentFile.documentFileName =
    //   '';
    // item.pentPermitApplicationRecommendationDocument.pentDocumentFile.fileContent =
    //   '';
  }

  loadNextAction(val: any) {
    this.getMoveToConditions(val);
    const obj = {
      data: val.recommendationValue,
    };
    this.apiService
      .loadNextActionAndOfficerByInvestorRecommendationValue(obj)
      .subscribe((success) => {
        val.nextActionValue = success.strData1;
        val.nextOfficer = success.strData2;
        val.nextActionDescription = success.strData3;
        this.onHoldBtnDisable = false;
        // if (val.recommendationValue === 'ONHLD') {
          val.recommendedForValue = '';
        // }
        if (val.plstentPermitApplicationRecommendationOnhold.length > 0) {
          val.plstentPermitApplicationRecommendationOnhold.forEach(
            (reason: any) => {
              if (reason.permitApplicationRecommendationOnholdId === 0) {
                let index =
                  val.plstentPermitApplicationRecommendationOnhold.indexOf(
                    reason
                  );
                val.plstentPermitApplicationRecommendationOnhold.splice(
                  index,
                  1
                );
              }
            }
          );
        }
        if (val.plstentPermitApplicationRecommendationOnhold.length === 0) {
          this.isReasonAvail = false;
        }
      });
  }

  getMoveToConditions(val: any) {
    this.item.recommendationValue = val.recommendationValue;
    this.item.parentRecommendationValue = val.parentRecommendationValue;

    this.getRecommendForCondition(val);
    if (
      val.recommendationValue === 'REFCC' ||
      val.recommendationValue === 'REFIN' ||
      val.recommendationValue === 'SECAS' ||
      val.parentRecommendationValue === 'REFCC' ||
      val.parentRecommendationValue === 'REFIN' ||
      val.parentRecommendationValue === 'SECAS'
    ) {
      this.isValidatityAvail = true;
    } else {
      this.isValidatityAvail = false;
    }
  }

  getRecommendForCondition(val: any){
    if (
      val.recommendationValue === 'REFCC' ||
      val.recommendationValue === 'REFIN' ||
      val.recommendationValue === 'SECAS' 
    ) {
      this.isRecommendForAvail = true;
    } else {
      this.isRecommendForAvail = false;
    }
  }

  recommendForEvent(event: any, val: any) {
    val.recommendedForValue = event.value;
    // console.log(val.recommendedForValue);
    if(val.recommendedForValue === 'APPRV'){
      this.item.plstentPermitApplicationRecommendationRejectReason.forEach((val:any)=>{
        val.isChecked = 'N';
        this.isReasonOther = false;
      })
    }
  }

  getRejectReasonforMandatory(){
    this.item.plstentPermitApplicationRecommendationRejectReason.forEach((checkLst:any)=>{
      if(checkLst.reasonValue === 'ACPIS'){
         if(checkLst.isChecked === 'Y' && (checkLst.sectionSuffix1 === '' || checkLst.sectionSuffix2 === '')){
               this.errorTrue = true
         } 
      }
    })
  }

  isRemarkChecked = false

  getIsRemark(){
    this.item.plstentPermitApplicationRecommendationRemark.forEach((remark:any)=>{
      if(remark.isChecked === 'Y'){
        this.isRemarkChecked = true
      }
    })
    if(!this.isRemarkChecked){
      this.errorTrue = true
      this.data.errorMessageOnly('Please select any remark');
    }
    else{
      this.errorTrue = false
    }
}

  async saveRecommendation(item: any, l: any) {
    this.getRecommIsMandatory(item);
    this.getRejectReasonforMandatory();
    if(this.item.recommendedForValue === 'APPRV' && this.item.recommendationValue === 'APPRV' && this.item.isRemarkToBeInLetter === 'Y'){
      await this.getIsRemark()
    }
    if(!this.errorTrue){
      if (l.valid) {
        this.errorTrue = false;
        if (
          item.plstRecommendation !== '' &&
          item.comments !== '' &&
          (item.tillDate !== '' ||
            (item.numberOfYears !== '' &&
              item.numberOfMonths !== '' &&
              item.numberOfDays !== ''))
        ) {
          this.errorTrue = false;
          let isCheckLstFilled = false;
          let checkReject = true;
          let isOnHold = false;
          if (
            item.recommendationValue !== 'ONHLD' && item.recommendationValue !== 'ONHFC' && 
            item.parentRecommendationValue !== item.recommendationValue &&
            item.recommendationValue !== 'REFCC' &&
    item.recommendationValue !== 'REFIN' &&
    item.recommendationValue !== 'SECAS'
          ) {
            item.plstentPermitApplicationRecommendationCheckList.forEach(
              (checkList: any) => {
                if (checkList.isChecked === '') {
                  isCheckLstFilled = true;
                }
              }
            );
          }
  
          if (item.recommendedForValue === 'REJEC' && item.parentRecommendationValue !== 'REFCC' &&
            item.parentRecommendationValue !== 'REFIN' &&
            item.parentRecommendationValue !== 'SECAS' && item.parentRecommendationValue !== item.recommendationValue) {
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
          if(item.recommendedForValue === 'REJEC' && this.getRejectVal && item.parentRecommendationValue !== item.recommendationValue){
            this.data.errorMessageOnly('Please fill all the field');
          }
  
          if (isCheckLstFilled) {
            this.data.errorMessageOnly('Please Select all the Checklist');
          } else if (checkReject && item.recommendedForValue === 'REJEC' && item.parentRecommendationValue !== item.recommendationValue) {
            this.data.errorMessageOnly('Please Select any Rejection Reason');
          }
  
          // if (
          //   item.recommendationValue !== 'ONHLD' &&
          //   item.parentRecommendationValue !== item.recommendationValue
          // ) {
          //   if (item.recommendedForValue === '') {
          //     this.data.errorMessageOnly(
          //       'Please Select any Recommend For Option'
          //     );
          //     isOnHold = true;
          //   }
          // }
          if (!isCheckLstFilled && !checkReject && !this.getRejectVal) {
            //item.plstentPermitApplicationRecommendationRejectReason[
              //item.plstentPermitApplicationRecommendationRejectReason.length - 1
            //].otherReason = this.otherReason;
  
            this.getRecommend.emit(item);
            // this.apiService
            //   .savePermitApplicationRecommendation(item)
            //   .subscribe((success) => {
  
            //     this.item = success.plstentPermitApplicationRecommendation
            //     this.hideFuncAddOnHold(success);
            //     this.parentData.emit(success);
            //     this.onHoldBtnDisable = false;
            //   });
          }
        } else {
          this.errorTrue = true;
          this.data.errorMessageOnly('Please Fill All Mandatory Field');
        }
      } else {
        this.errorTrue = true;
      }
    }
  }

  getRecommIsMandatory(item:any){
    if(item.recommendationValue !== ''){
      if(item.recommendationValue !== 'ONHLD' && item.parentRecommendationValue !== item.recommendationValue && item.recommendationValue !== 'ONHFC' && 
        (item.recommendationValue !== 'REFCC' &&
        item.recommendationValue !== 'REFIN' &&
        item.recommendationValue !== 'SECAS')&&
        (item.parentRecommendationValue !== 'REFCC' &&
       item.parentRecommendationValue !== 'REFIN' &&
       item.parentRecommendationValue !== 'SECAS')){
           if(item.recommendedForValue === ''){
              this.errorTrue = true;
           }
           else{
            this.errorTrue = false;
           }
      }
      else{
        this.errorTrue = false;
      }
    }
  }

  hideFuncAddOnHold(item: any) {
    if (
      item.plstentPermitApplicationRecommendation[0]
        .plstentPermitApplicationRecommendationOnhold.length > 0
    ) {
      item.plstentPermitApplicationRecommendation[0].plstentPermitApplicationRecommendationOnhold.forEach(
        (val: any) => {
          if (val.isResponded === 'N') {
            this.showOnHoldBtn = false;
          }
        }
      );
    } else {
      this.showOnHoldBtn = true;
    }
  }

  createRecommendationOnHold(item: any) {
    // ;
    let isOnHoldAvail = 0;
    this.apiService
      .createNewInvestorPermitApplicationRecommendationOnhold(this.recommendationOnHold)
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
      });
  }

  // changeRejectionLst(event: any, reject: any, index: any) {
  //   console.log(event, reject);
  //   // this.isReasonOther = false;
  //   if(reject.reasonValue === 'ACPIS'){
  //      this.rejectChecked = true;
  //   }
  //   else{
  //     this.rejectChecked = false;
  //   }
  //   if (reject.reasonValue === 'OTHER') {
  //     if (this.isReasonOther === false) {
  //       this.isReasonOther = true;
  //     } else {
  //       this.isReasonOther = false;
  //     }
  //   }
  //   if(event.checked){
  //     if (event.checked === true){ reject.isChecked = 'Y'; } 
  //     else {
  //       reject.isChecked = 'N';
  //     }  
  //   }                       
  // }


  changeRejectionLst(event: any, reject: any, index: any) {
    // console.log(event, reject);
    // this.isReasonOther = false;
    if(reject.reasonValue === 'ACPIS'){
       this.rejectChecked = true;
    }
    else{
      this.rejectChecked = false;
    }
    if (reject.reasonValue === 'OTHER') {
      if (this.isReasonOther === false) {
        this.isReasonOther = true;
      } else {
        this.isReasonOther = false;
      }
    }
    // if(event.checked){
    
      if (event.checked === true){ 
        reject.isChecked = 'Y'; } 
      else {
        reject.isChecked = 'N';
      }  
    // } 
    // this.item.plstentPermitApplicationRecommendationRejectReason[index] = reject;
                          
  }

  async viewDocument() {
    // this.openPermitDoc(val);
    this.generateReceipt(this.permitDocDetail);

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


  generateReceipt(val: any) {
    const obj = {
      data: val.documentFileId
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

  openPermitDoc(val: any) {
    const obj = {
      data: val.workPermitApplicationDocumentDetailId,
    };
    this.apiService
      .openWorkPermitApplicationDocumentsDetail(obj)
      .subscribe((success) => {
        this.permitDocDetail = success;
        let getDataTpye: any =
          this.permitDocDetail.pentDocumentFile.fileContent.split(';');
        let getdocType = getDataTpye[0].split(':');
        this.docType = getdocType[1];
        // console.log(this.docType);
      });
  }

  getChecked(event: any, index: any) {
    // 
    if (event.checked === true) {
      this.item.plstentPermitApplicationRecommendationCheckList[
        index
      ].isChecked = 'Y';
    } else {
      this.item.plstentPermitApplicationRecommendationCheckList[
        index
      ].isChecked = 'N';
    }
    // console.log(this.item.plstentPermitApplicationRecommendationCheckList);

    this.checkLstCount.emit(
      this.item.plstentPermitApplicationRecommendationCheckList
    );
  }

  getSetToZero(item: any, type: any) {
    ;
    if (type === 'numberOfDays' && item.numberOfDays === '') {
      item.numberOfDays = 0;
    } else if (type === 'numberOfYears' && item.numberOfYears === '') {
      item.numberOfYears = 0;
    } else if (type === 'numberOfMonths' && item.numberOfMonths === '') {
      item.numberOfMonths = 0;
    }
  }

  getPermitValidityType(event:any,item:any){
    
   if(item.permitValidityTypeValue === 'DATRN'){
     item.numberOfYears = 0;
     item.numberOfMonths = 0;
     item.numberOfDays = 0;
     item.startDate = '';
     item.endDate = '';
     item.tillDate = ''
   }
   else if(item.permitValidityTypeValue === 'FIXPR'){
    item.startDate = '';
    item.endDate = '';
    item.tillDate = ''
   }
   else if(item.permitValidityTypeValue === 'UNTDT'){
    item.numberOfYears = 0;
    item.numberOfMonths = 0;
    item.numberOfDays = 0;
    item.startDate = '';
    item.endDate = '';
   }
  }

  getInputData(event:any){
    
    if(this.rejectChecked && (event.sectionSuffix1 === '' || event.sectionSuffix2 === '')){
      this.getRejectVal = true
    }
    else{
      this.getRejectVal = false
    }
    // console.log(this.getRejectVal);
  }

  async viewPdf(val:any){
    if(val.documentFileId > 0){
      const obj = {
        data: val.documentFileId
      }
      const options = {
        responseType: 'blob'
      }
      this.docType = val.pentDocumentFile.documentType;
      this.docName = val.pentDocumentFile.documentFileName;
      this.apiService.viewDocumentFile(obj, options).subscribe((success) => {
        const resp = new Blob([success.body], { type: success.body.type });
        // const fileURL = URL.createObjectURL(resp);
        this.openPdf(resp, val)
      })
    }
    else{
      let base64Data = val.pentDocumentFile.fileContent.split(';base64,').pop();
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: val.pentDocumentFile.documentType });
      this.docType = val.pentDocumentFile.documentType;
      this.docName = val.pentDocumentFile.documentFileName ;
      this.openPdf(blob, val)
    }
}

  async openPdf(blob:any,val:any){
  const url = URL.createObjectURL(blob);
  if (val.pentDocumentFile.documentType === 'application/pdf' || val.pentDocumentFile.documentType.includes('image') ) {
    this.url = url;
    // console.log(this.url);
    
    let dialogResponse: any = await this.dialog.openDialog(
      this.viewTemplate,
      {
        disableClose: true,
        height: '620px',
        width: '95%',
        maxWidth: '1280px',
      }
    );
    if (dialogResponse) {
    }
  }else {
    const downloadLink = document.createElement('a');
    downloadLink.href = this.url;
    downloadLink.download = this.docName;
    downloadLink.click();
  }
}

getClearEndDate(val:any){
  if(val.startDate === ''){
    val.endDate = '';
  }  
}

getCheckedRejectionReason(event:any, reason:any){
  // this.reasonType = this.reasonType === '' ? reason.reasonValue : '';
  if (event.checked === true) {;
    reason.isChecked = 'Y';
  } else {
    reason.isChecked = 'N';
  } 
}


openCustomerResponseDoc(val:any, index:any){
  this.docIndex = index;
  const obj = {
    data: val.permitApplicationRecommendationCustomerResponseDocumentDetailId
  }
  this.apiService.openInvestorPermitApplicationRecommendationCustomerResponseDocumentDetail(obj).subscribe((success)=>{
    this.permitDocDetail = success;
    this.viewDocument()
  })
}

checkReasonSelected(type:any){
  this.rejectionIsChecked = false;
  if(type === 'REJEC'){
    this.permitDocDetail.plstentPermitApplicationRecommendationCustomerResponseDocumentDetailRejectionReason.forEach((val:any)=>{
      if(val.isChecked === 'Y'){
        this.rejectionIsChecked = true
      }
    })
    if(!this.rejectionIsChecked){
      this.data.errorMessageOnly('Please Select any Reject Reason');
    }
  }
}

saveResponsePermitDoc(l:any, type:any){
  this.checkReasonSelected(type)
  if(!this.rejectionIsChecked && type === 'REJEC' ){
    return
  }
  if(l.valid){
    this.errorTrue = false;
    this.permitDocDetail.documentStatusValue = type;
    this.apiService.saveInvestorPermitApplicationRecommendationCustomerResponseDocumentDetail(this.permitDocDetail).subscribe((success)=>{
      this.item.plstentPermitApplicationRecommendationOnhold[this.docIndex].pentPermitApplicationRecommendationCustomerResponse.pentPermitApplicationRecommendationCustomerResponseDocument.plstentPermitApplicationRecommendationCustomerResponseDocumentDetail =
        success.plstentPermitApplicationRecommendationCustomerResponseDocumentDetail;
        this.data.successMessage(
          success.msg.infoMessage.msgDescription,
          'Success'
        );
        this.dialog.closeDialog();
    })
  }
  else{
    this.errorTrue = true;
  }
}

isRemarkEvent(event: any, val: any){
  val.isRemarkToBeInLetter = event.value;
}

getRemarkEvent(event:any, val:any){
  //  console.log(event, val);
   
   this.item.plstentPermitApplicationRecommendationRemark.forEach((elem:any) => {
     if(val.remarkValue !== elem.remarkValue){
      elem.isChecked = 'N'
     }
   });  
} 



}
