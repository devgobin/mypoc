import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  title: string = 'Dashboard';
  primaryColor: any = 'red';
  secondaryColor: any = 'red';
  basePath = '';
  token = ''; //**********************if needed */
  readonly defaultOptions = {
    hideErrorMethod: false,
    hideFullSpinner: false,
  };
  loadingTrue = false;
  successAlert = false;
  dangerAlert = false;
  msg = '';
  constructor(
    public http: HttpClient,
    public snackBar: MatSnackBar
  ) { }

  serviceStarted() {
    this.loadingTrue = true;
  }

  serviceCompleted() {
    this.loadingTrue = false;
  }

  getData(path: any): Observable<any> {
    return this.http.get(this.basePath + path);
  }

  postData(path: any, body: any) {
    return this.http.post(this.basePath + path, body);
  }

  errorMethod(err: any){
    this.openSnackBar('Failed to load !')
  }

  openSnackBar(message: string,) {
    this.snackBar.open(message, 'x', {
      duration: 3000,
    });
  }

}
