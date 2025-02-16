import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { DataService } from '../../services/data/data.service';
import { ApiDataService } from "../../api-services/api-data.service";
import { AppSettingsService } from '../../services/app-settings/app-settings.service';

@Injectable({
  providedIn: "root",
})
export class ApplicationApiService {

  constructor(private data: DataService, private apiData: ApiDataService, private appSettings: AppSettingsService) { }
   
  getAgentInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Agent/GetAgentInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  createNewAgentSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Agent/CreateNewAgentSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchAgent (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Agent/SearchAgent', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openAgentWithChilds (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Agent/OpenAgentWithChilds', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveAgentStatus (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Agent/SaveAgentStatus', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadAgentWithChildsByRefNo (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Agent/LoadAgentWithChildsByRefNo', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openAgentContact (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Agent/OpenAgentContact', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    viewAgentDocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Agent/ViewAgentDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewAgentComments (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Agent/CreateNewAgentComments', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    saveAgentComments (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Agent/SaveAgentComments', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadViewAgentScreenResultData (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Agent/DownloadViewAgentScreenResultData', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createAgentPermitApplicationSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Agent/CreateNewPermitApplicationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchAgentPermitApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Agent/SearchPermitApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getagentregistrationsearchinitialdata (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'agentregistration/GetAgentRegistrationSearchInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  getagentregistrationsearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'agentregistration/GetAgentRegistrationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchagentregistration (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'agentregistration/SearchAgentRegistration', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadagentregistrationwithallchilds (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'agentregistration/LoadAgentRegistrationWithAllChilds', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveagentregistration (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'agentregistration/SaveAgentRegistration', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveagentregistrationdocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'agentregistration/Document/SaveAgentRegistrationDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    viewagentregistrationdocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'agentregistration/Document/ViewAgentRegistrationDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openAgentRegistrationDocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'agentregistration/Document/OpenAgentRegistrationDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createnewagentregistrationnotes (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'agentregistration/Notes/CreateNewAgentRegistrationNotes', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveagentregistrationnotes (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'agentregistration/Notes/SaveAgentRegistrationNotes', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createagentregistrationassignedofficerhistory (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'agentregistration/AssignedOfficer/CreateAgentRegistrationAssignedOfficerHistory', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveagentregistrationassignedofficermanualassign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'agentregistration/AssignedOfficer/SaveAgentRegistrationAssignedOfficerManualAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveagentregistrationassignedofficerselfassign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'agentregistration/AssignedOfficer/SaveAgentRegistrationAssignedOfficerSelfAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadagentregistrationemailhistorybyemailhistoryid (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'agentregistration/Email/LoadAgentRegistrationEmailHistoryByEmailHistoryId', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadAgentregistrationSearchScreenResultData (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'agentregistration/DownloadAgentregistrationSearchScreenResultData', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getappealapplicationsearchinitialdata (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/AppealApproval/GetAppealApplicationSearchInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  getappealapplicationsearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/AppealApproval/GetAppealApplicationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchappealapplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/AppealApproval/SearchAppealApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadappealapplicationwithallchilds (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/AppealApproval/LoadAppealApplicationWithAllChilds', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveappealapplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/AppealApproval/SaveAppealApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createnewappealapplicationnotes (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/AppealApproval/Notes/CreateNewAppealApplicationNotes', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveappealapplicationnotes (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/AppealApproval/Notes/SaveAppealApplicationNotes', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createappealapplicationassignedofficerhistory (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/AppealApproval/AssignedOfficer/CreateAppealApplicationAssignedOfficerHistory', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadappealapplicationemailhistorybyemailhistoryid (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/AppealApproval/Email/LoadAppealApplicationEmailHistoryByEmailHistoryId', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    getIslandndandTikinabyProvince (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/GetIslandndandTikinabyProvince', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    getCityorVillagebyTikina (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/GetCityorVillagebyTikina', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    getDataFromURLforOTPandPassword (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/GetDataFromURLforOTPandPassword', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    validateCaptcha (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/ValidateCaptcha', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    sentLoginResetPasswordLink (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/SentLoginResetPasswordLink', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    resendOTP (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/ResendOTP', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    resend2FACode (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/Resend2FACode', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    converttoMemoryStreamfromBase64 (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/ConverttoMemoryStreamfromBase64', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    commonViewDocumentFile (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/ViewDocumentFile', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    validateDocumentExpiryDate (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/ValidateDocumentExpiryDate', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    savePortalAddress (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/SavePortalAddress', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openPortalAddress (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/OpenPortalAddress', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadAllMProvince (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/Province/LoadAllMProvince', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadAllMIslandswithProvince (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/MIsland/LoadAllMIslandswithProvince', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadAllMVillageAddress (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/MVillage/LoadAllMVillageAddress', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadTikinaDetailsbasedonProvinceIslandAddress (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/Province/LoadTikinaDetailsbasedonProvinceIslandAddress', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  checkAPI (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/CheckAPI', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    checkDbConnectivity (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/CheckDbConnectivity', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  checkService (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/CheckService', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  openDocumentImage (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/images/{DocumentFileID}', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  getDivisioniInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/GetDivisioniInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  getProvinceInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/GetProvinceInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  getTikinaInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/GetTikinaInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  getcityInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/GetcityInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    computeTat (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Common/ComputeTat', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getEmbassyInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/GetEmbassyInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  createNewEmbassySearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/CreateNewEmbassySearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchEmbassy (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/SearchEmbassy', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openEmbassyWithChilds (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/OpenEmbassyWithChilds', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveEmbassyStatus (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/SaveEmbassyStatus', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadEmbassyWithChildsByRefNo (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/LoadEmbassyWithChildsByRefNo', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openEmbassyContact (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/OpenEmbassyContact', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    viewEmbassyDocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/ViewEmbassyDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewEmbassyComments (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/CreateNewEmbassyComments', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    saveEmbassyComments (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/SaveEmbassyComments', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewQualifiedEmbassys (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/CreateNewQualifiedEmbassy', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    saveQualifiedEmbassys (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/SaveQualifiedEmbassy', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openQualifiedEmbassys (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/OpenQualifiedEmbassy', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewQualifiedEmbassySearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/CreateNewQualifiedEmbassySearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchQualifiedEmbassy (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/SearchQualifiedEmbassy', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    deleteQualifiedEmbassy (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/DeleteQualifiedEmbassy', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadViewEmbassyScreenResultData (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/DownloadViewEmbassyScreenResultData', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewEmbassyAgentLinkSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/CreateNewEmbassyAgentLinkSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchEmbassyAgentLink (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/SearchEmbassyAgentLink', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createEmbassyPermitApplicationSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/CreateNewPermitApplicationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchEmbassyPermitApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Embassy/SearchPermitApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getembassyregistrationsearchinitialdata (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'embassyregistration/GetEmbassyRegistrationSearchInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  getembassyregistrationsearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'embassyregistration/GetEmbassyRegistrationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchembassyregistration (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'embassyregistration/SearchEmbassyRegistration', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadembassyregistrationwithallchilds (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'embassyregistration/LoadEmbassyRegistrationWithAllChilds', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveembassyregistration (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'embassyregistration/SaveEmbassyRegistration', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveembassyregistrationdocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'embassyregistration/Document/SaveEmbassyRegistrationDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    viewembassyregistrationdocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'embassyregistration/Document/ViewEmbassyRegistrationDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openEmbassyRegistrationDocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'embassyregistration/Document/OpenEmbassyRegistrationDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createnewembassyregistrationnotes (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'embassyregistration/Notes/CreateNewEmbassyRegistrationNotes', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveembassyregistrationnotes (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'embassyregistration/Notes/SaveEmbassyRegistrationNotes', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createembassyregistrationassignedofficerhistory (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'embassyregistration/AssignedOfficer/CreateEmbassyRegistrationAssignedOfficerHistory', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveembassyregistrationassignedofficermanualassign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'embassyregistration/AssignedOfficer/SaveEmbassyRegistrationAssignedOfficerManualAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveembassyregistrationassignedofficerselfassign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'embassyregistration/AssignedOfficer/SaveEmbassyRegistrationAssignedOfficerSelfAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadembassyregistrationemailhistorybyemailhistoryid (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'embassyregistration/Email/LoadEmbassyRegistrationEmailHistoryByEmailHistoryId', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadEmbassyregistrationSearchScreenResultData (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'embassyregistration/DownloadEmbassyregistrationSearchScreenResultData', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getEmployerInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/GetEmployerInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  createNewEmployerSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/CreateNewEmployerSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchEmployer (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/SearchEmployer', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openEmployerWithChilds (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/OpenEmployerWithChilds', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveEmployerStatus (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/SaveEmployerStatus', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadEmployerWithChildsByRefNo (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/LoadEmployerWithChildsByRefNo', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openEmployerContact (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/OpenEmployerContact', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    viewEmployerDocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/ViewEmployerDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewEmployerComments (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/CreateNewEmployerComments', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    saveEmployerComments (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/SaveEmployerComments', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewQualifiedEmployers (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/CreateNewQualifiedEmployer', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    saveQualifiedEmployers (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/SaveQualifiedEmployer', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openQualifiedEmployers (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/OpenQualifiedEmployer', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewQualifiedEmployerSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/CreateNewQualifiedEmployerSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchQualifiedEmployer (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/SearchQualifiedEmployer', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    deleteQualifiedEmployer (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/DeleteQualifiedEmployer', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadViewEmployerScreenResultData (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/DownloadViewEmployerScreenResultData', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewEmployerAgentLinkSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/CreateNewEmployerAgentLinkSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchEmployerAgentLink (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/SearchEmployerAgentLink', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createEmployerPermitApplicationSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/CreateNewPermitApplicationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchEmployerPermitApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Employer/SearchPermitApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    getJWTForUserAuthorization (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'employerregistration/getjwt', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getemployerregistrationsearchinitialdata (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'employerregistration/GetEmployerRegistrationSearchInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  getemployerregistrationsearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'employerregistration/GetEmployerRegistrationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchemployerregistration (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'employerregistration/SearchEmployerRegistration', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loademployerregistrationwithallchilds (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'employerregistration/LoadEmployerRegistrationWithAllChilds', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveemployerregistration (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'employerregistration/SaveEmployerRegistration', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveemployerregistrationdocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'employerregistration/Document/SaveEmployerRegistrationDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    viewemployerregistrationdocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'employerregistration/Document/ViewEmployerRegistrationDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openEmployerRegistrationDocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'employerregistration/Document/OpenEmployerRegistrationDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createnewemployerregistrationnotes (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'employerregistration/Notes/CreateNewEmployerRegistrationNotes', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveemployerregistrationnotes (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'employerregistration/Notes/SaveEmployerRegistrationNotes', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createemployerregistrationassignedofficerhistory (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'employerregistration/AssignedOfficer/CreateEmployerRegistrationAssignedOfficerHistory', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveemployerregistrationassignedofficermanualassign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'employerregistration/AssignedOfficer/SaveEmployerRegistrationAssignedOfficerManualAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveemployerregistrationassignedofficerselfassign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'employerregistration/AssignedOfficer/SaveEmployerRegistrationAssignedOfficerSelfAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loademployerregistrationemailhistorybyemailhistoryid (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'employerregistration/Email/LoadEmployerRegistrationEmailHistoryByEmailHistoryId', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadEmployerregistrationSearchScreenResultData (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'employerregistration/DownloadEmployerregistrationSearchScreenResultData', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getIndividualUserInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Individual/GetIndividualUserInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  createNewIndividualUserSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Individual/CreateNewIndividualUserSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchIndividualUser (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Individual/SearchIndividualUser', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openIndividualUserWithChilds (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Individual/OpenIndividualUserWithChilds', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadViewIndividualScreenResultData (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Individual/DownloadViewIndividualScreenResultData', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getInstitutionInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/GetInstitutionInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  createNewInstitutionSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/CreateNewInstitutionSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchInstitution (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/SearchInstitution', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openInstitutionWithChilds (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/OpenInstitutionWithChilds', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveInstitutionStatus (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/SaveInstitutionStatus', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadInstitutionWithChildsByRefNo (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/LoadInstitutionWithChildsByRefNo', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openInstitutionContact (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/OpenInstitutionContact', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    viewInstitutionDocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/ViewInstitutionDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewInstitutionComments (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/CreateNewInstitutionComments', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    saveInstitutionComments (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/SaveInstitutionComments', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewQualifiedInstitutions (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/CreateNewQualifiedInstitution', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    saveQualifiedInstitutions (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/SaveQualifiedInstitution', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openQualifiedInstitutions (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/OpenQualifiedInstitution', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewQualifiedInstitutionSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/CreateNewQualifiedInstitutionSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchQualifiedInstitution (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/SearchQualifiedInstitution', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    deleteQualifiedInstitution (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/DeleteQualifiedInstitution', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadViewInstitutionScreenResultData (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/DownloadViewInstitutionScreenResultData', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewInstitutionAgentLinkSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/CreateNewInstitutionAgentLinkSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchInstitutionAgentLink (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/SearchInstitutionAgentLink', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createInstitutionPermitApplicationSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/CreateNewPermitApplicationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchInstitutionPermitApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/Institution/SearchPermitApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getinstitutionregistrationsearchinitialdata (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'institutionregistration/GetInstitutionRegistrationSearchInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  getinstitutionregistrationsearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'institutionregistration/GetInstitutionRegistrationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchinstitutionregistration (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'institutionregistration/SearchInstitutionRegistration', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadinstitutionregistrationwithallchilds (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'institutionregistration/LoadInstitutionRegistrationWithAllChilds', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveinstitutionregistration (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'institutionregistration/SaveInstitutionRegistration', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveinstitutionregistrationdocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'institutionregistration/Document/SaveInstitutionRegistrationDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    viewinstitutionregistrationdocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'institutionregistration/Document/ViewInstitutionRegistrationDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openInstitutionRegistrationDocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'institutionregistration/Document/OpenInstitutionRegistrationDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createnewinstitutionregistrationnotes (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'institutionregistration/Notes/CreateNewInstitutionRegistrationNotes', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveinstitutionregistrationnotes (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'institutionregistration/Notes/SaveInstitutionRegistrationNotes', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createinstitutionregistrationassignedofficerhistory (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'institutionregistration/AssignedOfficer/CreateInstitutionRegistrationAssignedOfficerHistory', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveinstitutionregistrationassignedofficermanualassign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'institutionregistration/AssignedOfficer/SaveInstitutionRegistrationAssignedOfficerManualAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveinstitutionregistrationassignedofficerselfassign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'institutionregistration/AssignedOfficer/SaveInstitutionRegistrationAssignedOfficerSelfAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadinstitutionregistrationemailhistorybyemailhistoryid (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'institutionregistration/Email/LoadInstitutionRegistrationEmailHistoryByEmailHistoryId', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadInstitutionregistrationSearchScreenResultData (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'institutionregistration/DownloadInstitutionregistrationSearchScreenResultData', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    changeInvestorPermitApplicationRecommendation (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/ChangeInvestorPermitApplicationRecommendation', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openInvestorPermitApplicationWithAllChilds (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/OpenInvestorPermitApplicationWithAllChilds', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadInvesterPermitApplicationPrimaryApplicantDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/LoadInvesterPermitApplicationPrimaryApplicantDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadInvesterPermitApplicationPrimaryApplicantDocuments (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/LoadInvesterPermitApplicationPrimaryApplicantDocuments', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadInvestorPermitApplicationDependentDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/LoadInvestorPermitApplicationDependentDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openInvestorPermitApplicationDocumentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/OpenInvestorPermitApplicationDocumentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    viewWorkPermitApplicationDocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/ViewWorkPermitApplicationDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveInvestorPermitApplicationDocumentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/SaveInvestorPermitApplicationDocumentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createNewInvestorPermitApplicationRecommendation (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/CreateNewInvestorPermitApplicationRecommendation', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewInvestorPermitApplicationRecommendationOnhold (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/CreateNewInvestorPermitApplicationRecommendationOnhold', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    loadNextActionAndOfficerByInvestorRecommendationValue (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/LoadNextActionAndOfficerByInvestorRecommendationValue', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveInvestorPermitApplicationRecommendation (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/SaveInvestorPermitApplicationRecommendation', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    checkWhetherLoggedinUserisHigherOfficerforInvestor (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/CheckWhetherLoggedinUserisHigherOfficerforInvestor', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createInvestorPermitApplicationAssignedOfficerHistory (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/CreateInvestorPermitApplicationAssignedOfficerHistory', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveInvestorPermitApplicationHigherOfficerManualAssign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/SaveInvestorPermitApplicationHigherOfficerManualAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveInvestorPermitApplicationAssignedOfficerManualAssign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/SaveInvestorPermitApplicationAssignedOfficerManualAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveInvestorPermitApplicationAssignedOfficerSelfAssign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/SaveInvestorPermitApplicationAssignedOfficerSelfAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadInvestorPermitApplicationRequiredInfoAppealDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/LoadInvestorPermitApplicationRequiredInfoAppealDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewInvestorPermitApplicationSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/CreateNewInvestorPermitApplicationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchInvestorPermitApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/SearchInvestorPermitApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getInvestorPermitApplicationInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/GetInvestorPermitApplicationInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    loadInvestorPermitApplicationEmployerDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/LoadInvestorPermitApplicationEmployerDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadInvestorPermitApplicationRecommendationDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/LoadInvestorPermitApplicationRecommendationDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadInvestorPermitApplicationSearchScreenResultData (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/DownloadInvestorPermitApplicationSearchScreenResultData', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveInvestorPermitPrimaryApplicantDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/SaveInvestorPermitPrimaryApplicantDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveInvestorPermitApplicationPrimaryApplicantDependentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/SaveInvestorPermitApplicationPrimaryApplicantDependentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openInvestorPermitApplicationRecommendationCustomerResponseDocumentDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/OpenInvestorPermitApplicationRecommendationCustomerResponseDocumentDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveInvestorPermitApplicationRecommendationCustomerResponseDocumentDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/SaveInvestorPermitApplicationRecommendationCustomerResponseDocumentDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadInvesterPermitApplicationAdditionalInfo (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/InvestorPermitApplication/LoadInvesterPermitApplicationAdditionalInfo', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  test (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitController/Test', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  loadPermitInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitController/LoadPermitInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  createNewPermitSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitController/CreateNewPermitSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchPermit (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitController/SearchPermit', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openPermit (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitController/OpenPermit', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadPermitSearchResultAsExcel (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitController/DownloadPermitSearchResultAsExcel', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createNewPermitChangeRequest (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitController/CreateNewPermitChangeRequest', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    savePermitChangeRequest (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitController/SavePermitChangeRequest', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openPermitChangeRequest (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitController/OpenPermitChangeRequest', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    alertPopupForPermitStatusChanged (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitController/AlertPopupForPermitStatusChanged', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createGenerateReportRequest (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'api/report/CreateGenerateReportRequest', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    generateReport (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'api/report/GenerateReport', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getSummaryReportInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/GetSummaryReportInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    getSummaryReportDetailForTransactionAmount (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/GetSummaryReportDetailForTransactionAmount', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    getSummaryReportForTransactionAmount (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/GetSummaryReportForTransactionAmount', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadSummaryReportDetailForTransactionAmount (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/DownloadSummaryReportDetailForTransactionAmount', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadSummaryReportForTransactionAmount (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/DownloadSummaryReportForTransactionAmount', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createOfficerTaskReportDocumentSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/CreateOfficerTaskReportDocumentSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchOfficerTaskReportDocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/SearchOfficerTaskReportDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadOfficerTaskReportAsExcel (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/DownloadOfficerTaskReportAsExcel', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getInitialDataApplicationApprovedRejectedCountReport (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/GetInitialDataApplicationApprovedRejectedCountReport', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    getApplicationApprovedRejectedCountReport (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/GetApplicationApprovedRejectedCountReport', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadExcelApplicationApprovedRejectedCountReport (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/DownloadExcelApplicationApprovedRejectedCountReport', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createBiReportForApplicationApprovedRejectedCountReport (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/CreateBiReportForApplicationApprovedRejectedCountReport', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    generateBiReportForApplicationApprovedRejectedCountReport (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/GenerateBiReportForApplicationApprovedRejectedCountReport', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createReportforSummaryReport (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/CreateReportforSummaryReport', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    generateReportSummaryReport (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/GenerateReportSummaryReport', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createReportforSummaryDetailReport (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/CreateReportforSummaryDetailReport', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    generateReportSummaryDetailReport (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/GenerateReportSummaryDetailReport', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getInitialDataForReportFileFormat (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/GetInitialDataForReportFileFormat', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  getInitialDataForOfficerAssignedHistoryReport (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/GetInitialDataForOfficerAssignedHistoryReport', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    getOfficerAssignedHistoryReport (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/GetOfficerAssignedHistoryReport', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadExcelOfficerAssignedHistoryReport (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ReportController/DownloadExcelOfficerAssignedHistoryReport', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getResidentPermitApplicationInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/GetResidentPermitApplicationInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  createNewResidentPermitApplicationSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/CreateNewResidentPermitApplicationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchResidentPermitApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/SearchResidentPermitApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createNewPermitApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/CreateNewPermitApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    savePermitApplicationBasedOnStepNumber (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/SavePermitApplicationBasedOnStepNumber', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openResidentPermitApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/OpenResidentPermitApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openResidentPermitApplicationDocumentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/OpenResidentPermitApplicationDocumentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveResidentPermitApplicationDocumentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/SaveResidentPermitApplicationDocumentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadResidentPermitApplicantDocuments (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/LoadResidentPermitApplicantDocuments', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadResidentPermitApplicationSearch (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/DownloadResidentPermitApplicationSearch', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    checkWhetherLoggedinUserisHigherOfficerforResidentPermit (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/CheckWhetherLoggedinUserisHigherOfficerforResidentPermit', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadResidentNextActionAndOfficerByRecommendationValue (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/LoadResidentNextActionAndOfficerByRecommendationValue', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveResidentPermitApplicationAssignedOfficerSelfAssign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/SaveResidentPermitApplicationAssignedOfficerSelfAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveResidentPermitApplicationHigherOfficerManualAssign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/SaveResidentPermitApplicationHigherOfficerManualAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadResidentPermitApplicationRecommendationDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/LoadResidentPermitApplicationRecommendationDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveResidentPermitApplicationRecommendation (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/SaveResidentPermitApplicationRecommendation', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewResidentPermitPermitApplicationRecommendationOnhold (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/CreateNewResidentPermitPermitApplicationRecommendationOnhold', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    openResidentPermitRecommendationCustomerResponseDocumentDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/OpenResidentPermitRecommendationCustomerResponseDocumentDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveResidentPermitRecommendationCustomerResponseDocumentDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/SaveResidentPermitRecommendationCustomerResponseDocumentDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveResidentPermitApplicationPrimaryApplicantDependentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/SaveResidentPermitApplicationPrimaryApplicantDependentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openResidentPermitApplicationPrimaryApplicantDependentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/OpenResidentPermitApplicationPrimaryApplicantDependentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveResidentPemritApplicationPrimaryApplicantDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/SaveResidentPemritApplicationPrimaryApplicantDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadResidentPermitApplicationDependentDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/LoadResidentPermitApplicationDependentDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadResidentPermitApplicationPrimaryApplicantDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/ResidentPermitApproval/LoadResidentPermitApplicationPrimaryApplicantDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewStudyPermitApplicationSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/CreateNewStudyPermitApplicationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchStudyPermitApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/SearchStudyPermitApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openStudyPermitApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/OpenStudyPermitApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getStudyPermitApplicationInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/GetStudyPermitApplicationInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    openStudyPermitApplicationDocumentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/OpenStudyPermitApplicationDocumentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveStudyPermitApplicationDocumentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/SaveStudyPermitApplicationDocumentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadStudyPermitApplicationSearch (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/DownloadStudyPermitApplicationSearch', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    printPermitLetterForStudyPermit (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/PrintPermitLetterForStudyPermit', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    printRejectionStudyPermit (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/PrintRejectionStudyPermit', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openStudyPermitApplicationPrimaryApplicantDependentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/OpenStudyPermitApplicationPrimaryApplicantDependentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveStudyPermitApplicationPrimaryApplicantDependentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/SaveStudyPermitApplicationPrimaryApplicantDependentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveStudyPemritApplicationPrimaryApplicantDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/SaveStudyPemritApplicationPrimaryApplicantDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadStudyPermitApplicationRecommendationDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/LoadStudyPermitApplicationRecommendationDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveStudyPermitApplicationRecommendation (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/SaveStudyPermitApplicationRecommendation', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadStudyNextActionAndOfficerByRecommendationValue (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/LoadStudyNextActionAndOfficerByRecommendationValue', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewStudyPermitPermitApplicationRecommendationOnhold (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/CreateNewStudyPermitPermitApplicationRecommendationOnhold', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    checkWhetherLoggedinUserisHigherOfficerforStudyPermit (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/CheckWhetherLoggedinUserisHigherOfficerforStudyPermit', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveStudyPermitApplicationHigherOfficerManualAssign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/SaveStudyPermitApplicationHigherOfficerManualAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveStudyPermitApplicationAssignedOfficerSelfAssign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/SaveStudyPermitApplicationAssignedOfficerSelfAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveStudyPermitRecommendationCustomerResponseDocumentDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/SaveStudyPermitRecommendationCustomerResponseDocumentDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openStudyPermitRecommendationCustomerResponseDocumentDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/StudyPermitApproval/OpenStudyPermitRecommendationCustomerResponseDocumentDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewVisitorVisaApplicationSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/CreateNewVisitorVisaApplicationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchVisitorVisaApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/SearchVisitorVisaApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openVisitorVisaApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/OpenVisitorVisaApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadVisitorsVisaApplicationRecommendationDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/LoadVisitorsVisaApplicationRecommendationDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveVisitorsVisaApplicationRecommendation (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/SaveVisitorsVisaApplicationRecommendation', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewVisitorsPermitApplicationRecommendationOnhold (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/CreateNewVisitorsPermitApplicationRecommendationOnhold', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    checkWhetherLoggedinUserisHigherOfficerforVisitorsVisa (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/CheckWhetherLoggedinUserisHigherOfficerforVisitorsVisa', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveVisitorsApplicationHigherOfficerManualAssign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/SaveVisitorsApplicationHigherOfficerManualAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveVisitorsVisaPermitApplicationAssignedOfficerSelfAssign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/SaveVisitorsVisaPermitApplicationAssignedOfficerSelfAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openVisitorsVisaApplicationDocumentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/OpenVisitorsVisaApplicationDocumentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveVisitorsVisaApplicationDocumentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/SaveVisitorsVisaApplicationDocumentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getVisitorVisaApplicationInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/GetVisitorVisaApplicationInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    loadVisitorsNextActionAndOfficerByRecommendationValue (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/LoadVisitorsNextActionAndOfficerByRecommendationValue', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    printPermitLetterForVisitorsVisa (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/PrintPermitLetterForVisitorsVisa', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    printRejectionVisitorsVisa (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/PrintRejectionVisitorsVisa', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadVisitorsVisaApplicationSearch (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/DownloadVisitorsVisaApplicationSearch', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openVisitorsVisaApplicationPrimaryApplicantDependentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/OpenVisitorsVisaApplicationPrimaryApplicantDependentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveVisitorsVisaApplicationPrimaryApplicantDependentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/SaveVisitorsVisaApplicationPrimaryApplicantDependentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveVisitorsVisaApplicationPrimaryApplicantDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/SaveVisitorsVisaApplicationPrimaryApplicantDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewVisaSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/CreateNewVisaSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchVisa (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/SearchVisa', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openVisa (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/OpenVisa', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadVisaSearchResultAsExcel (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/DownloadVisaSearchResultAsExcel', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createNewVisaChangeRequest (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/CreateNewVisaChangeRequest', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveVisaChangeRequest (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/SaveVisaChangeRequest', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openVisaChangeRequest (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/OpenVisaChangeRequest', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveVisitorsVisaApplicationRecommendationCustomerResponseDocumentDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/SaveVisitorsVisaApplicationRecommendationCustomerResponseDocumentDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openVisitorsVisaApplicationRecommendationCustomerResponseDocumentDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/OpenVisitorsVisaApplicationRecommendationCustomerResponseDocumentDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    printPermitLetterForVisitorsVisaChangeInDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/PrintPermitLetterForVisitorsVisaChangeInDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    printRejectedLetterForVisitorsVisaChangeInDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/VisitorsVisaApplication/PrintRejectedLetterForVisitorsVisaChangeInDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    searchWorkFlowForApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SearchWorkFlowForApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    searchWorkFlow (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SearchWorkFlow', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getPermitApplicationInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/GetPermitApplicationInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  createNewPermitApplicationSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/CreateNewPermitApplicationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchPermitApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SearchPermitApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveWorkPermitApplicationDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SaveWorkPermitApplicationDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    changeWorkPermitApplicationRecommendation (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/ChangeWorkPermitApplicationRecommendation', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openPermitApplicationWithAllChilds (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/OpenPermitApplicationWithAllChilds', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadPermitApplicationPrimaryApplicantDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/LoadPermitApplicationPrimaryApplicantDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadPermitApplicationPrimaryApplicantDocuments (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/LoadPermitApplicationPrimaryApplicantDocuments', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadPermitApplicationDependentDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/LoadPermitApplicationDependentDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadPermitApplicationEmploymentDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/LoadPermitApplicationEmploymentDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadPermitApplicationEmployerDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/LoadPermitApplicationEmployerDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadPermitApplicationOverSeasEmployerDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/LoadPermitApplicationOverSeasEmployerDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadPermitApplicationRecommendationDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/LoadPermitApplicationRecommendationDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadPermitApplicationBorderInformationDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/LoadPermitApplicationBorderInformationDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadPermitApplicationRequiredInfoAppealDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/LoadPermitApplicationRequiredInfoAppealDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    printPermitLetter (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/PrintPermitLetter', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    printRejectionLetter (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/PrintRejectionLetter', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    updateStatusForPermitDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/UpdateStatusForPermitDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createNewPermitApplicationRecommendation (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/CreateNewPermitApplicationRecommendation', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewPermitApplicationRecommendationOnhold (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/CreateNewPermitApplicationRecommendationOnhold', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    loadNextActionAndOfficerByRecommendationValue (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/LoadNextActionAndOfficerByRecommendationValue', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    savePermitApplicationRecommendation (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SavePermitApplicationRecommendation', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    deletePermitApplicationRecommendationDocument (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/DeletePermitApplicationRecommendationDocument', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    checkWhetherLoggedinUserisHigherOfficer (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/CheckWhetherLoggedinUserisHigherOfficer', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createNewPermitApplicationAssignedOfficerHistory (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/CreateNewPermitApplicationAssignedOfficerHistory', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    savePermitApplicationHigherOfficerManualAssign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SavePermitApplicationHigherOfficerManualAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    savePermitApplicationAssignedOfficerHistoryManualAssign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SavePermitApplicationAssignedOfficerHistoryManualAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    savePermitApplicationAssignedOfficerHistorySelfAssign (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SavePermitApplicationAssignedOfficerHistorySelfAssign', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openPermitApplicationRecommendationCustomerResponseDocumentDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/OpenPermitApplicationRecommendationCustomerResponseDocumentDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    savePermitApplicationRecommendationCustomerResponseDocumentDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SavePermitApplicationRecommendationCustomerResponseDocumentDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openWorkPermitApplicationDocumentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/OpenWorkPermitApplicationDocumentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveWorkPermitApplicationDocumentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SaveWorkPermitApplicationDocumentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveWorkPermitPrimaryApplicantDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SaveWorkPermitPrimaryApplicantDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveWorkPermitApplicationPrimaryApplicantDependentsDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SaveWorkPermitApplicationPrimaryApplicantDependentsDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveWorkPermitPrimaryApplicantPositionDetail (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SaveWorkPermitPrimaryApplicantPositionDetail', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createPaymentVerificationSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/CreatePaymentVerificationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchPaymentVerification (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SearchPaymentVerification', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveOfflinePaymentTransaction (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SaveOfflinePaymentTransaction', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openOfflinePaymentTransaction (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/OpenOfflinePaymentTransaction', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    generatePaymentTransactionReceipt (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/GeneratePaymentTransactionReceipt', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getPaymentInitialData (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/GetPaymentInitialData', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  createPermitApplicationPaymentReceiptSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/CreatePermitApplicationPaymentReceiptSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchPermitApplicationPaymentReceipt (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SearchPermitApplicationPaymentReceipt', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    viewDocumentFile (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/ViewDocumentFile', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadPaymentReceiptForAlter (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/LoadPaymentReceiptForAlter', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getListOfPermitApplicationNo (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/GetListOfPermitApplicationNo', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    alterPermitApplicationPaymentReceipt (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/AlterPermitApplicationPaymentReceipt', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createOfflinePaymentTransaction (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/CreateOfflinePaymentTransaction', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    loadPermitApplicationPaymentDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/LoadPermitApplicationPaymentDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  createNewOnlinePaymentVerificationSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/CreateNewOnlinePaymentVerificationSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchOnlinePaymentVerification (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SearchOnlinePaymentVerification', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    verifyOnlinePaymentTransaction (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/VerifyOnlinePaymentTransaction', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    getControversialList (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/GetControversialList', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    getTravelHistory (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/GetTravelHistory', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    getPermitDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/GetPermitDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    getPassportList (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/GetPassportList', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    checkifPersonLeftCountry (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/CheckifPersonLeftCountry', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadWorkPermitSearchScreenResultData (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/DownloadWorkPermitSearchScreenResultData', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadWorkPermitApplicationSearchScreenResultData (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/DownloadWorkPermitApplicationSearchScreenResultData', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    searchScreenPermitApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/SearchScreenPermitApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    deletePermitApplicationWithAllChilds (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/DeletePermitApplicationWithAllChilds', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    downloadPermitApplicationSearchScreenResultData (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/DownloadPermitApplicationSearchScreenResultData', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadPermitApplicationAdditonalInfoDetails (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/LoadPermitApplicationAdditonalInfoDetails', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    loadPreviousPermitApplication (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.applicationPath + 'InternalPortal/PermitApplication/LoadPreviousPermitApplication', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
 
}
