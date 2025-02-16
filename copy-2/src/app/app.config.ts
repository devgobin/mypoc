import { APP_INITIALIZER, ApplicationConfig, ApplicationRef, importProvidersFrom } from '@angular/core';
import { provideRouter, RouteReuseStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { firstValueFrom } from 'rxjs';
import { AppSettingsService } from './common/services/app-settings/app-settings.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouteReuseService } from './common/services/route-reuse/route-reuse.service';
import { FullSpinnerInterceptor } from './common/full-spinner/full-spinner.interceptor';

export const appSettingFactory = (configService: AppSettingsService, appRef: ApplicationRef) => {
  return () => {
    return firstValueFrom(configService.loadConfig()).then(
      (config: any) => {
        configService.environment = config;
      },
      (error: any) => {
        console.error('Error loading config:', error);
        // appRef.tick(); // Manually trigger change detection to stop the app
        throw error; // Re-throw the error to prevent app startup
      }
    );
  };
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(
      HttpClientModule,
    ),
    { provide: RouteReuseStrategy, useClass: RouteReuseService },
    {
      provide: APP_INITIALIZER,
      useFactory: appSettingFactory,
      deps: [AppSettingsService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FullSpinnerInterceptor,
      multi: true
    },
  ]
};

