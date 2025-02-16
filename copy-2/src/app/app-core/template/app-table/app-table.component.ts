import {
  AfterContentInit,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ContentChildren,
  Directive,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { PaginationPipe } from './paginator/pagination.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { CommonModule, NgClass, NgTemplateOutlet } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InnerScroll } from '../../core-component/core-component.component';
import { EmptyStateComponent } from '../../../common/templates/empty-state';

@Directive({
  selector: '[cellDef]',
  standalone: true,
})
export class CellDefDirective {
  @Input() cellDef!: string;
  constructor(public template: TemplateRef<any>) { }
}

@Directive({
  selector: '[cellHeaderDef]',
  standalone: true,
})
export class CellHeaderDefDirective {
  @Input() cellHeaderDef!: string;
  constructor(public template: TemplateRef<any>) { }
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    PaginationPipe,
    CellDefDirective,
    PaginatorComponent,
    MatCheckboxModule,
    InnerScroll,
    NgClass,
    EmptyStateComponent,
  ],
  templateUrl: './app-table.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './app-table.component.scss',
})
export class AppTableComponent
  implements OnInit, AfterViewInit, AfterContentInit {
  showSortIcon = false;
  __columns: any = [];
  __columnsName: any = [];
  __sortColumnsName: any = [];
  __isQualifiedOfficer: any = [];
  __columnID = '';
  __dataSource: any = [];
  __sort = false;
  __hidePaginator = false;
  __verticalLineRemove = false;

  __pagination = {
    pageNumber: 1,
    pageSize: 25,
    totalCount: 0,
  };
  __sortItem = {
    columnName: '',
    sortOrder: true,
  };
  __hasPagination = false;
  __tableClass = '';
  __tableFlexClass = '';
  __selectedData: any = {
    currentIndex: 0,
    array: [],
  };
  __hideSelectAll = false;

  @Input() set tableClass(tableClass: string) {
    this.__tableClass = tableClass || '';
  }
  get tableClass(): any {
    return this.__tableClass;
  }

  __panelClass = '';

  @Input() set panelClass(panelClass: string) {
    this.__panelClass = panelClass || '';
  }
  get panelClass(): any {
    return this.__panelClass;
  }

  @Input() set hasPagination(hasPagination: boolean) {
    this.__hasPagination = hasPagination || false;
  }
  get hasPagination(): any {
    return this.__hasPagination;
  }

  @Input() set pagination(pagination: any) {
    this.__pagination = pagination || {
      pageNumber: 1,
      pageSize: 25,
      totalCount: 0,
    };
  }
  get pagination(): any {
    return this.__pagination;
  }

  @Input() set sortItem(sortItem: any) {
    this.__sortItem = sortItem || {
      columnName: '',
      sortOrder: true,
    };
  }
  get sortItem(): any {
    return this.__sortItem;
  }

  @Input() set columns(column: any) {
    this.__columns = column || [];
  }
  get columns(): any {
    return this.__columns;
  }
  
  @Input() set isQualifiedOfficer(isQualifiedOfficer: any) {
    this.__isQualifiedOfficer = isQualifiedOfficer || [];
  }
  get isQualifiedOfficer(): any {
    return this.__isQualifiedOfficer;
  }

  @Input() set columnsName(columnsName: any) {
    this.__columnsName = columnsName || [];
  }
  get columnsName(): any {
    return this.__columnsName;
  }

  @Input() set sortColumnsName(sortColumnsName: any) {
    this.__sortColumnsName = sortColumnsName || [];
  }
  get sortColumnsName(): any {
    return this.__sortColumnsName;
  }

  @Input() set columnID(columnID: any) {
    this.__columnID = columnID || '';
  }
  get columnID(): any {
    return this.__columnID;
  }

  @Input() set dataSource(dataSource: any) {
    this.__dataSource = dataSource || [];

    if (this.__hasPagination) {
      this.__pagination = {
        pageNumber: 1,
        pageSize: 25,
        totalCount: this.__dataSource.length,
      };
    }
  }
  get dataSource(): any {
    return this.__dataSource;
  }

  @Input() set hidePaginator(hidePaginator: boolean) {
    this.__hidePaginator = hidePaginator || false;
  }
  get hidePaginator(): boolean {
    return this.__hidePaginator;
  }
  
  @Input() set verticalLineRemove(verticalLineRemove: boolean) {
    this.__verticalLineRemove = verticalLineRemove || false;
  }
  get verticalLineRemove(): boolean {
    return this.__verticalLineRemove;
  }

  @Input() set sort(sort: boolean) {
    this.__sort = sort || false;
  }
  get sort(): boolean {
    return this.__sort;
  }

  @Input() set hideSelectAll(hideSelectAll: boolean) {
    this.__hideSelectAll = hideSelectAll || false;
  }
  get hideSelectAll(): boolean {
    return this.__hideSelectAll;
  }

  @ViewChild('tableData') tableData!: any;

  @ContentChildren(CellDefDirective)
  cellDefs!: QueryList<CellDefDirective>;

  @ContentChildren(CellHeaderDefDirective)
  cellHeaderDefs!: QueryList<CellHeaderDefDirective>;

  @ContentChildren('slotRight')
  slotRight!: QueryList<any>;

  @ContentChildren('slotLeft')
  slotLeft!: QueryList<any>;

  @Input() set tableFlexClass(tableFlexClass: string) {
    this.__tableFlexClass = tableFlexClass || '';
  }
  get tableFlexClass(): any {
    return this.__tableFlexClass;
  }

  cellTemplates: { [key: string]: TemplateRef<any> } = {};
  cellHeaderTemplates: { [key: string]: TemplateRef<any> } = {};

  slotRightTemplate!: TemplateRef<any>;
  slotLeftTemplate!: TemplateRef<any>;
  @Output('pageChanged') pageChanged: EventEmitter<any> = new EventEmitter();
  @Output('sortChanged') sortChanged: EventEmitter<any> = new EventEmitter();
  @Output('onSelect') onSelect: EventEmitter<any> = new EventEmitter();
  constructor() {

  }

  ngOnInit() {
    // console.log(this.__dataSource, 'A');

    // console.log(workFlowColorCode);
  }

  ngAfterViewInit() { }

  ngAfterContentInit() {
    this.cellDefs.forEach((cellDef: CellDefDirective) => {
      this.cellTemplates[cellDef.cellDef] = cellDef.template;
    });
    this.cellHeaderDefs.forEach((cellHeaderDef: CellHeaderDefDirective) => {
      this.cellHeaderTemplates[cellHeaderDef.cellHeaderDef] =
        cellHeaderDef.template;
    });
    this.slotRight.forEach((slotRight: any) => {
      this.slotRightTemplate = slotRight;
    });
    this.slotLeft.forEach((slotLeft: any) => {
      this.slotLeftTemplate = slotLeft;
    });
  }

  onPageChanged(event: any) {
  
    this.__pagination.pageNumber = event.pageNumber;
    this.__pagination.pageSize = event.pageSize;
    this.pageChanged.emit(event);
  }

  selectedAllClicked(event: any) {
    this.__selectedData.array = [];
    if (event.checked) {
      this.__dataSource.forEach((element: any) => {
        this.__selectedData.array.push(element[this.columnID]);
      });
    }
    this.__selectedData.currentIndex = 0;
    this.onSelect.emit(this.__selectedData);
  }

  selectedSingleClicked(event: any, data: any) {
    if (event.checked) {
      this.__selectedData.array.push(data[this.columnID]);
    } else {
      let index = this.__selectedData.array.indexOf(data[this.columnID]);
      if (index > -1) {
        this.__selectedData.array.splice(index, 1);
      }
    }
    this.__selectedData.currentIndex = 0;
    this.onSelect.emit(this.__selectedData);
  }

  hasSelected(data: any) {
    let index = this.__selectedData.array.indexOf(data[this.columnID]);
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  }

  doSort(columnsName: any) {
    if (this.__sortColumnsName.includes(columnsName)) {
      this.__sortItem = {
        columnName: columnsName,
        sortOrder: this.__sortItem.sortOrder ? false : true,
      };
      this.sortChanged.emit(this.__sortItem);
    }
  }

  getDynamicClasses(data: any, column: string): { [key: string]: boolean } {
    const dynamicClasses: any = {
      Blue: data.isQualifiedEmployer === 'Y' && column === 'sourceName',
      lineRemove: this.verticalLineRemove, // Assuming verticalLineRemove is defined in your component
    };
  
    if (['sourceName', 'stepName'].includes(column) && data.colorForTAT) {
      dynamicClasses[data.colorForTAT] = true; // Add dynamic class
    }
  
    return dynamicClasses;
  }

}
