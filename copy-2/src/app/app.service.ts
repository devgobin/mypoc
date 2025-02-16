import { Injectable, OnInit } from '@angular/core';
import { format, addYears  } from 'date-fns';
import { entUser } from './common/api-services/admin-api/admin-api.classes';
import { AppSettingsService } from './common/services/app-settings/app-settings.service';
import { StorageService } from './common/services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit {
  navigateURL = '';
  userLoginId: any = '';
  userData = new entUser();
  helpFile = '';

  constructor(public storage: StorageService,public appSetting: AppSettingsService) { }

  ngOnInit(): void {
    this.init();
  }

  async init() {
    await this.storage.get('userData').then((val: any) => {
      this.userData = val;
    })
  }

  replaceErrorMessage(text: string, replacements: { [key: string]: string }): string {

    for (const key in replacements) {
      if (replacements.hasOwnProperty(key)) {
        const escapedKey = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(escapedKey, 'g');
        text = text.replace(regex, replacements[key]);
      }
    }
    return text;
  }

  getCurrentDate() {
    let currentDate: any = new Date();
    currentDate = format(
      currentDate,
      this.appSetting.environment.serverDateFormatWithTime
    );
    return currentDate;
  }

  getNextYearDate() {
    const currentDate = new Date();
    const nextYearDate = addYears(currentDate, 1); // Add 1 year to the current date
    let nextyear = format(nextYearDate, this.appSetting.environment.serverDateFormatWithTime);
    return nextyear
  }

  getThreeYearDate() {
    const currentDate = new Date();
    const nextThreeYearDate = addYears(currentDate, 3); // Add 1 year to the current date
    let nextThreeYear = format(nextThreeYearDate, this.appSetting.environment.serverDateFormatWithTime);
    
    return nextThreeYear
    
  }

  // getThreeYearDate1(date:any) {
  //   
  //   // const currentDate = new Date();
  //   const nextThreeYearDate = addYears(date, 3); // Add 1 year to the current date
  //   let nextThreeYear = format(nextThreeYearDate, this.appSetting.environment.serverDateFormatWithTime);

  //   return nextThreeYear
    
  // }

  getCurrentYear() {
    let currentDate: any = new Date();
    currentDate = format(
      currentDate,
      'yyyy'
    );
    return currentDate;
  }
}
