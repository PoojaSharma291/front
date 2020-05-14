import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// Components
import { HomePageComponent } from './home-page/home-page.component';
import { RoleListComponent } from './role-list/role-list.component';

// Prime Ng Modules
import {CardModule} from 'primeng/card';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api'
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

// Import modules 
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { RequestsComponent } from './requests/requests.component';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';


@NgModule({
  declarations: [HomePageComponent, RoleListComponent, LoginComponent, RequestsComponent, ContactComponent, AboutComponent, ComingSoonComponent],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CardModule,
    AutoCompleteModule,
    CoreModule,
    SharedModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    PanelModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ConfirmDialogModule
  ],
  providers: [MessageService, ConfirmationService],
  exports: [HomePageComponent, RoleListComponent]
})
export class FeatureModule { }
