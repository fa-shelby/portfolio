import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { WorksComponent } from "./works/works.component";
import { ServicesComponent } from "./services/services.component";
import { ContactComponent } from "./contact/contact.component";
import { Template2Component } from "./template2/template2.component";

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
},
  {
    path:'page',
    component: Template2Component,
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path:'about',
        component: AboutComponent
      },
      {
        path:'works',
        component: WorksComponent
      },
      {
        path:'services',
        component: ServicesComponent
      },
      {
        path:'contact',
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
