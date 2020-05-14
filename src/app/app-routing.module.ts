import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom Components
import { HomePageComponent } from './feature/home-page/home-page.component';
import { RoleListComponent } from './feature/role-list/role-list.component';
import { LoginComponent } from './feature/login/login.component';
import { RequestsComponent } from './feature/requests/requests.component';
import { ContactComponent } from './feature/contact/contact.component';
import { ComingSoonComponent } from './feature/coming-soon/coming-soon.component';
import { AboutComponent } from './feature/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'role',
    component: RoleListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'requests',
    component: RequestsComponent
  },
  {
    path: 'contactus',
    component: ContactComponent
  },
  {
    path: 'soon',
    component: ComingSoonComponent
  },
  {
    path: 'aboutus',
    component: AboutComponent
  }
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent } // Future use of wild card route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
