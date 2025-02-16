import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { DataService } from '../../services/data/data.service';
import { ApiDataService } from "../../api-services/api-data.service";
import { AppSettingsService } from '../../services/app-settings/app-settings.service';

@Injectable({
  providedIn: "root",
})
export class PaymentGatewayApiService {

  constructor(private data: DataService, private apiData: ApiDataService, private appSettings: AppSettingsService) { }
   
    getConfigValuesByConfigId (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.paymentGateWay + 'admin/getConfigValuesByConfigId', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    getListOfConfigMetaDataByConfigIdAndConstant (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.paymentGateWay + 'admin/getListOfConfigMetaDataByConfigIdAndConstant', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    saveProcessLogForPaymentBatch (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.paymentGateWay + 'admin/saveProcessLogForPaymentBatch', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createEncryptedPaymentTransactionRequest (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.paymentGateWay + 'PaymentTransaction/createEncryptedPaymentTransactionRequest', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    initiatePayment (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.paymentGateWay + 'PaymentTransaction/initiatePayment', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    calculatePaymentTransactionFees (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.paymentGateWay + 'PaymentTransaction/calculatePaymentTransactionFees', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    createPaymentTransaction (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.paymentGateWay + 'PaymentTransaction/createPaymentTransaction', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    checkProviderTransactionStatus (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.paymentGateWay + 'PaymentTransaction/checkProviderTransactionStatus', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    cancelPaymentTransaction (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.paymentGateWay + 'PaymentTransaction/cancelPaymentTransaction', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    openPaymentTransactionByURL (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.paymentGateWay + 'PaymentTransaction/openPaymentTransactionByURL', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getmpaisaresponse (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.paymentGateWay + 'PaymentTransaction/getmpaisaresponse', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    getmycashreponse (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.paymentGateWay + 'PaymentTransaction/getmycashreponse', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    getbspreponse (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.paymentGateWay + 'PaymentTransaction/getbspresponse/{id}', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
  getInProgressPaymentTransaction (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.paymentGateWay + 'PaymentTransaction/getInProgressPaymentTransaction', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
  createImmiPaymentTransactionSearch (options ?: any): Observable < any > {
    this.data.serviceStarted();
    options === undefined
    ? (options = this.apiData.defaultOptions)
    : (options = this.apiData.setOptions(options));
  return this.apiData.getData(this.appSettings.environment.paymentGateWay + 'PaymentTransaction/createImmiPaymentTransactionSearch', options).pipe(
    finalize(() => this.data.serviceCompleted()),
    catchError((err) => {
      options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
      return throwError(() => new Error(err));
    })
  );
}
    
    searchImmiPaymentTransactionSearch (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.paymentGateWay + 'PaymentTransaction/searchImmiPaymentTransactionSearch', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    checkImmiPaymentTransactionStatus (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.paymentGateWay + 'PaymentTransaction/checkImmiPaymentTransactionStatusByManual', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
  
    initiatePaymentReceiptIfPaymentSuccessFromProvider (body: any, options ?: any): Observable < any > {
      this.data.serviceStarted();
      options === undefined
      ? (options = this.apiData.defaultOptions)
      : (options = this.apiData.setOptions(options));
  return this.apiData
    .postData(this.appSettings.environment.paymentGateWay + 'PaymentTransaction/initiatePaymentReceiptIfPaymentSuccessFromProvider', body, options)
    .pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
        return throwError(() => new Error(err));
      })
    );
}
 
}
