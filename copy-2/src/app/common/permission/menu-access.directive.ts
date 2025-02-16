import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AppSettingsService } from '../services/app-settings/app-settings.service';
import { StorageService } from '../services/storage/storage.service';

@Directive({
  selector: '[appMenuAccess]',
  standalone: true
})
export class MenuAccessDirective implements OnInit {
  @Input('appMenuAccess') elemId = '';
  constructor(private el: ElementRef, public storage: StorageService,
    public appSettings: AppSettingsService
  ) { 
    // console.log('MenuAccessDirective');
    
  }

  async ngOnInit() {

    // g('ok');
    let userData: any = {};
    await this.storage.get("userData").then((val) => {
      if (val) {
        userData = val;
        // 
      } else {
        return;
      }
    });
    // g(userData);
    // const userData = JSON.parse(sessionStorage.getItem("FNPFPortalUserData"));
    if (userData.userRights) {
      const rights = userData.userRights;

      const checkFullAccessIndex = rights
        .map((e: any) => e.iViewName)
        .indexOf("fullaccess");

      if (checkFullAccessIndex === -1) {
        // g(userData);
        const index = rights.map((e: any) => e.iViewName).indexOf("PRTDV");
        if (index !== -1) {
          const permissions = rights[index].resourcePermission;
          const isAvailableIndex = permissions
            .map((e: any) => e.iResourceName)
            .indexOf(this.elemId);
          if (isAvailableIndex === -1) {
            this.el.nativeElement.remove();
          } else {
            if (permissions[isAvailableIndex].iPermission !== "1") {
              this.el.nativeElement.remove();
            }
          }
        } else {
          this.el.nativeElement.remove();
        }
      }
    } else {
      //this.el.nativeElement.remove();
    }
  }
}
