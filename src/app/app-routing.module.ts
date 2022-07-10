import { CookiesPolicyComponent } from './pages/cookies-policy/cookies-policy.component';
import { NoticeOfPrivacyComponent } from './pages/notice-of-privacy/notice-of-privacy.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'terms-and-conditions',
    component:TermsAndConditionsComponent
  },
  {
    path:'notice-of-privacy',
    component:NoticeOfPrivacyComponent
  },
  {
    path:'cookies-policy',
    component:CookiesPolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
