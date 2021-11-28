import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainSiteRoutingModule } from './main-site-routing.module';
import { MainSiteComponent } from './main-site.component';
import { UtilsModule } from '../utils/utils.module';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [MainSiteComponent],
  imports: [
    CommonModule,
    MainSiteRoutingModule,
    UtilsModule,
    MatToolbarModule
  ]
})
export class MainSiteModule { }
