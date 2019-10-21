import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../../core/core.module';
import { LayoutModule } from '../../layout/layout.module';
import { InitialPageComponent } from './components/initial-page.component';
import { InitialPageRoutingModule } from './initial-page-routing.module';

/* @export
 * @class HomeModule
 */
@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    LayoutModule,
    TranslateModule,
    InitialPageRoutingModule,
  ],
  providers: [],
  declarations: [InitialPageComponent],
  exports: [InitialPageComponent],
})
export class InitialPageModule {}
