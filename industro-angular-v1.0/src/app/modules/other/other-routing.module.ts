import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagePricingComponent } from '../../pages/others/page-pricing/page-pricing.component';
import { PageIconFontsComponent } from '../../pages/others/page-icon-fonts/page-icon-fonts.component';
import { PageTeamComponent } from '../../pages/others/page-team/page-team.component';
import { PageTeamSingleComponent } from '../../pages/others/page-team-single/page-team-single.component';
import { PageFaqComponent } from '../../pages/others/page-faq/page-faq.component';
import { PageError403Component } from '../../pages/others/page-error403/page-error403.component';
import { PageError404Component } from '../../pages/others/page-error404/page-error404.component';
import { PageError405Component } from '../../pages/others/page-error405/page-error405.component';
import { PageContactUsComponent } from '../../pages/others/page-contact-us/page-contact-us.component';

const routes: Routes = [
  { path: '', component: PageContactUsComponent},
  { path: 'our-prices', component: PagePricingComponent},
  { path: 'icon-font', component: PageIconFontsComponent},
  { path: 'team', component: PageTeamComponent},
  { path: 'team-single', component: PageTeamSingleComponent},
  { path: 'faq', component: PageFaqComponent},
  { path: 'error-403', component: PageError403Component},
  { path: 'error-404', component: PageError404Component},
  { path: 'error-405', component: PageError405Component},
  { path: 'contact1', component: PageContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
