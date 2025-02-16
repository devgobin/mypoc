import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AppButton } from '../../app-core/core-component/core-directives.directive';
import { InputControlComponent } from '../../app-core/form-input/input-control/input-control.component';
import { EmailMaskPipe } from '../../common/pipes/email-mask/email-mask.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import {
  entCredential,
  entUser,
  entUserURLDetail,
} from '../../common/api-services/admin-api/admin-api.classes';
import { AdminApiService } from '../../common/api-services/admin-api/admin-api.service';
import { DataService } from '../../common/services/data/data.service';
import { UrlService } from '../../common/services/url/url.service';
import { PinControlComponent } from '../../app-core/form-input/pin-control/pin-control.component';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [
    InputControlComponent,
    AppButton,
    FormsModule,
    EmailMaskPipe,
    PinControlComponent,
  ],
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.scss',
})
export class VerifyOtpComponent implements OnInit {
  id: any = '';
  emailId: any = '';
  errorTrue = false;
  otp: any = 0;
  clientCode: any = '';
  login = new entCredential();
  @ViewChild('form') form!: NgForm;
  loginData = new entUser();
  UserURLDetail = new entUserURLDetail();
  isreset: any = false;
  obj = {
    clientCode: '',
    urlDate: '',
    encryptedUserId: '',
    screenName: '',
  };
  url: any;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public adminService: AdminApiService,
    public data: DataService,
    public urlService: UrlService
  ) {
  }

  ngOnInit(): void {
    this.GetResetpasswordFromURl();
  }

  public async GetResetpasswordFromURl() {
    
    var search = [];
    this.url = window.location.origin + window.location.pathname;

    search[0] = window.location.search
      .split(/[&||?]/)
      .filter(function (x) {
        return x.indexOf('=') > -1;
      })
      .map(function (x) {
        return x.split(/=/);
      })
      .map(function (x) {
        x[1] = x[1].replace(/\+/g, ' ');
        return x;
      })
      .reduce(function (acc: any, current) {
        acc[current[0]] = current[1];
        return acc;
      }, {});

    this.UserURLDetail.iUserLoginId = search[0].LoginId;
    this.UserURLDetail.iClientCode = search[0].Code;
    this.UserURLDetail.iOtp = search[0].OTP;
    this.UserURLDetail.screenName = search[0].ScreenName;
    this.GetDataFromURL();
  }

  async init() {
    let id: any = this.route.snapshot.paramMap.get('id');
    let email: any = this.route.snapshot.paramMap.get('emailId');
    let clientCode: any = this.route.snapshot.paramMap.get('clientCode');
    this.id = await this.urlService.decode(id);
    this.emailId = await this.urlService.decode(email);
    this.clientCode = await this.urlService.decode(clientCode);
  }
  GetDataFromURL() {
    
    //this.login.userLoginId = this.id;
    // this.login.mPin = this.otp;
    this.errorTrue = false;
    this.adminService
      .getUserDetailsFromURlNewUser(this.UserURLDetail)
      .subscribe(async (success) => {
        if (success.isPasswordResetted === 'Y') {
          this.isreset = true;
          //this.router.navigateByUrl('/login');
        } else {
          this.loginData = success;
          // this.init();
          this.login.clientcode = success.clientCode;
          this.login.userLoginId = success.userLoginId;
        }
        // this.loginData = success;
        // const applicationCode = await this.urlService.encode(this.clientCode);
        // const userId  = await this.urlService.encode(this.loginData.userLoginId);
        // this.router.navigateByUrl('/reset_password/' + applicationCode + '/' + userId);
      });
  }

  onSubmit(l: any) {
    
    if (l.valid) {
      //this.login.userLoginId = this.id;
      // this.login.mPin = this.otp;
      this.errorTrue = false;
      this.adminService
        .checkOTPexpiryandvalidate(this.login)
        .subscribe(async (success) => {
          this.loginData = success;
          const applicationCode = await this.urlService.encode(
            this.loginData.clientCode
          );
          const userId = await this.urlService.encode(
            this.loginData.userLoginId
          );
          this.router.navigateByUrl(
            '/reset_password/' + applicationCode + '/' + userId
          );
        });
    } else {
      this.errorTrue = true;
    }
  }

  getOtp(event: any) {
    // const otpString = String(event);
    // console.log('OTP string length: ', otpString.length);
    // this.otp = otpString;

    // this.login.mPin = this.otp;
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
