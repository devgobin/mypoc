import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { StorageService } from './common/services/storage/storage.service';
import { AppSettingsService } from './common/services/app-settings/app-settings.service';
import { MaintenanceComponent } from './start/maintenance/maintenance.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaintenanceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'fid-internal';

  constructor(private storage: StorageService, public setting: AppSettingsService, public router: Router) {

  }

  ngOnInit(): void {

    // this.setting.settingsChanges.subscribe(newSettings => {
    //   if (newSettings !== null) {

    //     this.setting.environment = newSettings;
    //     if (newSettings.showMaintenance) {
    //       this.storage.clear();
    //       this.router.navigateByUrl('/');
    //     }
    //     if (this.setting.environment.showMaintenance) {
    //     }
    //   }
    // });
  }



}
