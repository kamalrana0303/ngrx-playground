import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { StoreModule } from '@ngrx/store';
import {  logInReducer, metaReducer, reducers } from 'src/store/reducers/access.reducer';
import { AccessManagerService } from '../zservice/access-manager.service';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from 'src/store/effects/login.effect';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatButtonModule, MatFormFieldModule, MatSidenavModule } from '@angular/material';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserLayoutComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    UserLayoutRoutingModule,
    StoreModule.forFeature("reducers",reducers),
    EffectsModule.forFeature([LoginEffect]),
    StoreDevtoolsModule.instrument({maxAge:25,logOnly:environment.production})
  ],
  exports:[
    UserLayoutRoutingModule
  ],
  providers:[
    AccessManagerService
  ]
})
export class UserLayoutModule { }
