import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  entCredential,
  entUser,
} from '../../common/api-services/admin-api/admin-api.classes';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminApiService } from '../../common/api-services/admin-api/admin-api.service';
import { DataService } from '../../common/services/data/data.service';
import { UrlService } from '../../common/services/url/url.service';
import { AppButton } from '../../app-core/core-component/core-directives.directive';
import { InputControlComponent } from '../../app-core/form-input/input-control/input-control.component';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [InputControlComponent, AppButton, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent implements OnInit {
  errorTrue = false;
  login = new entCredential();
  loginData = new entUser();
  clientCode: any = '';
  userId: any = '';
  successMsg = false;
  @ViewChild('form') form!: NgForm;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public adminService: AdminApiService,
    public data: DataService,
    public urlService: UrlService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.init();
    });
  }
  ngOnInit(): void {}

  async init() {
    let clientCode: any = this.route.snapshot.paramMap.get('clientCode');
    let userId: any = this.route.snapshot.paramMap.get('userId');
    this.clientCode = await this.urlService.decode(clientCode);
    this.userId = await this.urlService.decode(userId);
    this.login.clientcode = this.clientCode;
    this.login.userLoginId = this.userId;
  }

  onSubmit(l: any) {
    if (l.valid) {
      if (
        this.login.newPassword ===
        this.login.confirmPassword
      ) {
        this.errorTrue = false;
        this.adminService.resetuserpassword(this.login).subscribe((success) => {
          this.loginData = success;
          this.successMsg = true;
        });
      } else {
        this.data.singleErrorMsgOnly(
          "New Password and Confirm Password doesn't match."
        );
      }
    } else {
      this.errorTrue = true;
    }
  }
  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
