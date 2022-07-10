import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { NoticeOfPrivacyComponent } from './pages/notice-of-privacy/notice-of-privacy.component';
import { CookiesPolicyComponent } from './pages/cookies-policy/cookies-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TermsAndConditionsComponent,
    NoticeOfPrivacyComponent,
    CookiesPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
