import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    public service: CommonService
  ) { }

  getIssues(): Observable<any> {
    this.service.serviceStarted();
    return this.service.getData('https://dummyapi.online/api/movies').pipe(
      finalize(() => this.service.serviceCompleted()),
      catchError((err) => {
        this.service.errorMethod(err);
        return throwError(err);
      })
    );
}
  
getIssueDetail(body: any): Observable<any> {
    this.service.serviceStarted();
    return this.service
      .postData('', body)
      .pipe(
        finalize(() => this.service.serviceCompleted()),
        catchError((err) => {
          this.service.errorMethod(err);
          return throwError(err);
        })
      );
}

}
