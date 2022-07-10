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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
