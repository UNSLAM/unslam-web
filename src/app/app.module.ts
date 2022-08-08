import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { BannerComponent } from './banner/banner.component';
import { MembersComponent } from './members/members.component';
import { ContactComponent } from './contact/contact.component';
import { ReposComponent } from './technicals-details/repos/repos.component';
import { TechnicalsDetailsComponent } from './technicals-details/technicals-details.component';
import { TechnologiesComponent } from './technicals-details/technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    BannerComponent,
    MembersComponent,
    ContactComponent,
    ReposComponent,
    TechnicalsDetailsComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
