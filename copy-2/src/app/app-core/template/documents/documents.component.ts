import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Row } from '../../core-component/core-component.component';
import { ViewPdfComponent } from '../view-pdf/view-pdf.component';
import { CoreService } from '../../../common/services/core/core.service';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../../common/services/storage/storage.service';
import { OverlayRef } from '@angular/cdk/overlay';
import {
  entEmployerRegistrationDocument,
  entIEMessage,
} from '../../../common/api-services/application-api/application-api.classes';
import { AppService } from '../../../app.service';
import { DataService } from '../../../common/services/data/data.service';
import { ByteToMbPipe } from '../../../common/pipes/byte-to-mb/byte-to-mb.pipe';
import { AppSettingsService } from '../../../common/services/app-settings/app-settings.service';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [MatTooltipModule, Row, CommonModule, ByteToMbPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent {
  fileName = '';
  isSupport = false;
  fileSize: any;
  fileFormat = '';
  tempFile: any = {
    fileName: '',
    fileSize: 0,
    fileSizeKb: 0,
    fileType: '',
    uploading: false,
    completed: false,
    content: '',
  };

  private dropzone!: ElementRef;
  @ViewChild('dropzone', { static: false }) set content(content: ElementRef) {
    this.dropzone = content;
  }

  @Input() src = '';
  @Input() icon = '';
  @Input() type = '';
  @Input() label = '';
  @Input() sizeLabel = '';
  @Input() typeLabel = '';
  @Input() public fileSizeLimit = 2;

  @Input() public accept =
    'image/png, image/jpg, image/jpeg , image/webp, image/tiff, image/gif, image/tif, image/*,application/pdf';
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  @ViewChild('nativeFileUpload', { static: false })
  nativeFileUpload!: ElementRef;

  __document: any;
  @Input() set document(document: any) {
    this.__document = document;
    this.fileName = this.__document.ientFile.fileName;
    this.fileSize = this.__document.ientFile.fileSize;
    this.fileFormat = this.__document.ientFile.fileExtension;
  }
  get document() {
    return this.__document;
  }
  __documentList: any;
  @Input() set documentList(documentList: any) {
    this.__documentList = documentList;
  }
  get documentList() {
    return this.__documentList;
  }

  __btnCondition: any = true;
  @Input() set btnCondition(btnCondition: any) {
    this.__btnCondition = btnCondition;
  }
  get btnCondition() {
    return this.__btnCondition;
  }
  __isMultiple: any = false;
  @Input() set isMultiple(isMultiple: any) {
    this.__isMultiple = isMultiple;
  }
  get isMultiple() {
    return this.__isMultiple;
  }

  __documentValue: any = new entEmployerRegistrationDocument();
  @Input() set documentValue(documentValue: any) {
    this.__documentValue = documentValue;
    
  }
  get documentValue() {
    return this.__documentValue;
  }

  @Input() public fileSizeError = '';
  @Input() public fileTypeError = '';
  sizeErrorFlag = false;
  @Input() public deleteId = 0;
  @Input() public pageAccess = '';
  @Input() public docViewAccess = '';
  @Input() public docDeleteAccess = '';
  @Input() public docDownloadAccess = '';
  @Input() public docUploadAccess = '';
  @Input() public ErrorMsg = '';
  @Input() public disabled = false;

  pageId = this.pageAccess;
  filePath: any;

  @ViewChild('Template', { static: false }) Templates!: TemplateRef<any>;

  @Output('onUpload') onUpload: EventEmitter<any> = new EventEmitter();
  @Output('onDelete') onDelete: EventEmitter<any> = new EventEmitter();

  uploadDisabled = false;
  files: Array<any> = [];

  constructor(
    public dialog: CoreService,
    public storage: StorageService,
    public renderer: Renderer2,
    public appService: AppService,
    public data: DataService,
    public appSetting: AppSettingsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.setDropZone();
    this.updateFileSizeErrorMessage();
  }

  private async updateFileSizeErrorMessage() {
    const originalObject = this.appSetting.environment.fileSizeErrorMsg;
    const replacements = {
      '{0}': `${this.fileSizeLimit}MB`,
      '{1}': `${this.tempFile.fileName}`,
    };
    this.fileSizeError = await this.appService.replaceErrorMessage(
      originalObject,
      replacements
    );
  }

  public initializeTempFile(documentValue: any) 
  {
    
    const documentFile = documentValue.ientDocumentFile;
    this.tempFile = {
      fileName: documentFile.documentFileName,
      content: documentFile.fileContent,
      fileType: documentFile.documentType,
      fileSize: documentFile.documentSize,
    };
  }

  setDropZone() {
    if (this.dropzone) {
      this.setupDropzoneListeners();
    } else {
      setTimeout(() => this.setDropZone(), 400); // Retry after 400ms if dropzone is not initialized
    }
  }

  private setupDropzoneListeners() {
    const dropzoneElement = this.dropzone.nativeElement;

    ['dragenter', 'dragleave', 'dragover'].forEach((eventType) => {
      this.renderer.listen(dropzoneElement, eventType, (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (eventType === 'dragenter' || eventType === 'dragover') {
          this.renderer.addClass(dropzoneElement, 'entered');
        } else {
          this.renderer.removeClass(dropzoneElement, 'entered');
        }
      });
    });

    this.renderer.listen(dropzoneElement, 'drop', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (this.__isMultiple) {
        this.dropFileUploadMulti(event);
      } else {
        this.dropFileUpload(event);
      }
    });
  }

  // Single File Upload
  async dropFileUpload(event: any) {
    const file = event.dataTransfer.files[0];
    this.processSingleFile(file);
  }

  async loadImageFromDevice(event: any) {
    const file = event.target?.files[0];
    this.processSingleFile(file);
  }

  private processSingleFile(file: File) {
    this.tempFile = {
      fileName: '',
      fileSize: 0,
      fileSizeKb: 0,
      fileType: '',
      uploading: false,
      completed: false,
      content: '',
    };
    this.fileName = '';
    this.fileSize = '';
    this.sizeErrorFlag = false;
    if (file) {
      
      if (
        file.type === 'application/pdf' ||
        file.type === 'image/png' ||
        file.type === 'image/jpeg' ||
        file.type === 'image/jpg' ||
        file.type === 'image/jpeg' ||
        file.type === 'image/webp' ||
        file.type === 'image/tiff' ||
        file.type === 'image/gif' ||
        file.type === 'image/tif' ||
        file.type === 'application/pdf' ||
        file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.type === 'application/vnd.ms-excel' ||
        file.type === 'application/msword' ||
        file.type === 'application/ppt' ||
        file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation' ||
        file.type === 'application/vnd.ms-powerpoint'  ||
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

      ) {
        this.tempFile = {
          fileName: file.name,
          fileSize: file.size,
          fileSizeKb: Math.round(file.size / 1024), // Calculate file size in KB
          fileType: file.type,
          uploading: false,
          completed: false,
          content: '',
        };
        this.fileName = file.name;
        this.fileSize = file.size;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          if (this.fileSizeLimit > this.tempFile.fileSize / 1024 / 1024) {
            const img: any = reader.result;
            this.tempFile.content = img;
            this.uploadDisabled = false;
            if (this.tempFile.fileName !== '') {
              this.fileInput.nativeElement.value = '';
              this.onUpload.emit(this.tempFile);
            }
          } else {
            this.updateFileSizeErrorMessage();
            this.fileInput.nativeElement.value = '';

            if (this.__isMultiple === true) {
              this.data.singleErrorMsgOnly(this.fileSizeError);
            } else {
              this.sizeErrorFlag = true;
            }
          }
        };
        reader.onerror = (error) => {};
      } else {
        this.fileInput.nativeElement.value = '';
        this.data.singleErrorMsgOnly(
          this.appSetting.environment.fileFormatErrorMsg
        );
      }
    }
  }

  // Multiple File Upload
  async dropFileUploadMulti(event: any) {
    this.processMultipleFiles(event.dataTransfer.files);
  }

  async loadImageFromDeviceMulti(event: any) {
    this.processMultipleFiles(event.target.files);
  }

  getAcceptedFiles(fileType:any){
     this.isSupport = this.accept.includes(fileType);
  }

  // || file.type.startsWith('image/')

  private async processMultipleFiles(files: FileList) {
    this.files = [];
    const filePromises = Array.from(files).map((file) => {
      return new Promise<void>((resolve, reject) => {
        this.getAcceptedFiles(file.type)
        if (this.isSupport) {
          if (file.size / 1024 / 1024 <= this.fileSizeLimit) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              const tempFile = {
                fileName: file.name,
                fileSize: file.size,
                fileSizeKb: Math.round(file.size / 1024),
                fileType: file.type,
                uploading: false,
                completed: false,
                content: reader.result as string,
              };
              this.fileInput.nativeElement.value = '';
              this.files.push(tempFile);
              // this.onUpload.emit(this.tempFile);
              resolve();
            };
            reader.onerror = (error) => {
              console.error('File read error: ', error);
              reject(error);
            };
          } else {
            this.updateFileSizeErrorMessage();
            if (this.__isMultiple) {
              this.data.singleErrorMsgOnly(this.fileSizeError);
            }
            console.error('File size exceeds limit');
            resolve(); // Resolve to continue processing other files
          }
        } else {
          console.error('Unsupported file type');
          this.fileInput.nativeElement.value = '';
          this.data.singleErrorMsgOnly(
            this.appSetting.environment.fileFormatErrorMsg
          );
          resolve(); // Resolve to continue processing other files
        }
      });
    });

    await Promise.all(filePromises);
    this.fileInput.nativeElement.value = '';
    this.onUpload.emit(this.files);
  }

  deleteDocument() {
    this.sizeErrorFlag = false;
    this.fileInput.nativeElement.value = '';
    this.tempFile = {
      fileName: '',
      fileSize: 0,
      fileSizeKb: 0,
      fileType: '',
      uploading: false,
      completed: false,
      content: '',
    };
    this.onDelete.emit(this.tempFile);
  }

  triggerClick() {
    this.nativeFileUpload.nativeElement.click();
  }

  doUpload() {
    if (this.tempFile.fileName && this.tempFile.fileName !== '') {
      this.onUpload.emit(this.tempFile);
    }
  }

  doClearUpload() {
    this.fileInput.nativeElement.value = '';
    this.fileName = '';
    this.fileSize = '';
    this.fileFormat = '';
  }

  openPDFViewer(xurl: any) {
    const dialogRef = this.dialog.openDialog(ViewPdfComponent, {
      width: '90%',
      height: '85%',
      data: {
        url: xurl,
      },
    });
  }

  download() {
    const downloadLink = document.createElement('a');
    downloadLink.href = this.filePath;
    downloadLink.download = this.fileName;
    downloadLink.click();
  }

  imageView(path: any, filename: any) {
    this.filePath = path;
    this.fileName = filename;
    this.dialog.openDialog(this.Templates, {
      width: '600px',
      height: 'auto',
    });
  }

  close() {
    this.dialog.closeDialog();
  }
}
