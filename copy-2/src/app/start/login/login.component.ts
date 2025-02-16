import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FromInputControl } from '../../app-core/form-input/form-input-control';
import { InputControlComponent } from '../../app-core/form-input/input-control/input-control.component';
import { AppButton } from '../../app-core/core-component/core-directives.directive';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  entCredential,
  entUser,
} from '../../common/api-services/admin-api/admin-api.classes';
import { AdminApiService } from '../../common/api-services/admin-api/admin-api.service';
import { DataService } from '../../common/services/data/data.service';
import { StorageService } from '../../common/services/storage/storage.service';
import { AesService } from '../../common/services/aes/aes.service';
import { AppService } from '../../app.service';
import { AppSettingsService } from '../../common/services/app-settings/app-settings.service';
import { UrlService } from '../../common/services/url/url.service';
import { AppSafePipe } from '../../common/pipes/app-safe/app-safe.pipe';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputControlComponent, AppButton, FormsModule,AppSafePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent {
  errorTrue = false;
  login = new entCredential();
  loadingTrue = false;
  loginData = new entUser();

  options = {
    type: 'adminPath',
  };

  passwordRequired = false;

  constructor(
    public router: Router,
    public data: DataService,
    public adminService: AdminApiService,
    public storage: StorageService,
    public aes: AesService,
    public appService: AppService,
    public appSetting: AppSettingsService,
    public urlService: UrlService
  ) {}


  ngOnInit() {
    this.init();
  }
  init() {
    this.getToken();
  }

  getToken() {
    this.loadingTrue = true;
    this.adminService.gettoken(this.options).subscribe(async (success: any) => {
      this.storage.set('encryptkey', success.data);
    });
  }

  async onSubmit(l: any) {
    
    this.passwordRequired = await this.passwordValidate(true);
    if (this.passwordRequired) {
      await this.submit(l);
    }
  }

  async submit(l: any) {
    if (l.valid && this.login.password !== '') {
      this.errorTrue = false;

      const obj: any = {
        password: '',
        token: [],
        clientcode: this.appSetting.environment.clientCode,
        mPin: '',
        emailId: this.login.emailId || '',
        newPassword: '',
        confirmPassword: '',
        urlDate: '',
        confirmMPin: 0,
        userLoginId: '',
        userSerialId: 0,
        pin: '',
        isPinValidation: '',
        isPasswordValidation: 'Y',
        languagePreference: '',
        screenName: '',
      };

      obj.userLoginId = await this.aes.encrypt(this.login.userLoginId);
      obj.password = await this.aes.encrypt(this.login.password);

      obj.token = (await this.storage.get('encryptkey')) || [];

      this.adminService.authenticateuser(obj, this.options).subscribe(
        async (success: any) => {
          this.appService.userData = success;
          this.login.userLoginId = success.userLoginId;
          this.appService.userLoginId = success.userLoginId;
          await this.storage.set('userData', success);
          await this.storage.set('token', success.keyToken);

          const storedUserData = await this.storage.get('userData');
          // console.log(storedUserData);

          this.data.token = success.keyToken;
          this.router.navigateByUrl('/home/my_task-workflow_list');
        },
        (error: any) => {
          if (error.status === 400) {
            // Handle 400 error
          } else {
            this.data.errorMethod(error);
          }
        }
      );
    } else {
      this.errorTrue = true;
    }
  }

  passwordValidate(isRequired: boolean): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(isRequired);
    });
  }

  async forgotPassword(l: any) {
    this.passwordRequired = !!(await this.passwordValidate(false)); // Ensure boolean cast
    if (!this.passwordRequired) {
      if (l.valid) {
        this.errorTrue = false;
        this.login.clientcode = this.appSetting.environment.clientCode;
        this.login.applicationEmailUrl = this.appSetting.environment.resetURL;

        this.adminService
          .forgotuserpassword(this.login, this.options)
          .subscribe(
            async (success) => {
              this.loginData = success;

              const idJson = await this.urlService.encode(
                this.loginData.userLoginId
              );
              const emailJson = await this.urlService.encode(
                this.loginData.emailId
              );
              const clientCode = await this.urlService.encode(
                this.loginData.clientCode
              );

              let message =
                'OTP and Password Reset link has been sent to your registered email ID';
              this.data.successMessage(message, 'Success');
            },
            (error) => {
              console.error('Error during forgot password process:', error);
            }
          );
      } else {
        this.errorTrue = true;
      }
    }
  }
}

// openErrorMessage(val: any) {
//   const dialogRef = this.dialog.open(LoginErrorComponent, {
//     width: '400px',
//     height: '300px',
//     disableClose: true,
//     data: {
//       message: val.error,
//     },
//   });
//   dialogRef.afterClosed().subscribe((result:any) => {
//     if (result) {
//     }
//   });
// }
