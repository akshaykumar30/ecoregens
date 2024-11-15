import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageServices1Component } from '../../pages/services/page-services1/page-services1.component';
import { PageServices2Component } from '../../pages/services/page-services2/page-services2.component';
import { PageServiceDetailComponent } from '../../pages/services/page-service-detail/page-service-detail.component';

const routes: Routes = [
  { path: '', component: PageServices1Component},
  { path: 'services1', component: PageServices1Component},
  { path: 'services2', component: PageServices2Component},
  { path: 'service-detail', component: PageServiceDetailComponent},
  { path: 's-agricultural', component: PageServiceDetailComponent},
  { path: 's-automotive', component: PageServiceDetailComponent},
  { path: 's-chemical', component: PageServiceDetailComponent},
  { path: 's-civil', component: PageServiceDetailComponent},
  { path: 's-mechanical', component: PageServiceDetailComponent},
  { path: 's-oilgas', component: PageServiceDetailComponent},
  { path: 's-power-energy', component: PageServiceDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
