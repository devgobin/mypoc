import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { DataService } from '../../services/data/data.service';
import { ApiDataService } from "../../api-services/api-data.service";
import { AppSettingsService } from '../../services/app-settings/app-settings.service';

@Injectable({
  providedIn: "root",
})
export class WorkflowApiService {

  constructor(private data: DataService, private apiData: ApiDataService, private appSettings: AppSettingsService) { }
   
    getJWTForUserAuthorization (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.workflowPath + 'workflow/getjwt', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  loadAllDDLDataForWorkflowSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.workflowPath + 'workflow/search/getworkflowstepsearchinitialdata', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  createInstanceForWorkflowSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.workflowPath + 'workflow/search/createworkflowstepsearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchAllWorkflowBasedOnSearchCriteria (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.workflowPath + 'workflow/search/searchworkflowstep', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
 
}
