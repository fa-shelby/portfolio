import { NgModule } from '@angular/core';
import { BrowserModule, Title, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Template2Component} from "./template2/template2.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent} from "./works/works.component";
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { UpComponent } from './shared/up/up.component';
import { ServerImgDirective } from './shared/directive/server-img.directive';
import { ServerLinkDirective } from './shared/directive/server-link.directive';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IntroComponent } from './shared/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    Template2Component,
    HomeComponent,
    AboutComponent,
    WorksComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    UpComponent,
    ServerImgDirective,
    ServerLinkDirective,
    IntroComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    Title,
    Meta
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
