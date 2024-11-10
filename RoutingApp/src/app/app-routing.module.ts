import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
    component: AboutComponent,
    path: 'about',
    children: [
      {
        component: AboutCompanyComponent,
        path:'company'
      },
      {
        component: AboutMeComponent,
        path:'me'
      }
    ]
  },
  {
    component: UserComponent,
    path: 'user/:id'
  },
  {
    component: HomeComponent,
    path: ''
  },
  {
    // component that will be called when there is 404 error
    component: NoPageComponent,
    path: '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
