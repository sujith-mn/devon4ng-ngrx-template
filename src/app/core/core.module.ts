import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  HttpClientModule,
  HttpClientXsrfModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import 'hammerjs';

import { HttpRequestInterceptorService } from './security/httpRequestInterceptor.service';
import { AuthGuard } from './security/auth-guard.service';
import { AuthService } from './security/auth.service';
import { BusinessOperationsService } from './shared/business-operations.service';
import { LoginService } from './security/login.service';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule,
    CdkTableModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [CommonModule, FormsModule, MaterialModule, CdkTableModule],
  declarations: [],
  providers: [
    AuthGuard,
    LoginService,
    AuthService,
    BusinessOperationsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
