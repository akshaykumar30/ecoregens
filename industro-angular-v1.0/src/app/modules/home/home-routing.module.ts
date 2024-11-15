import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageHome1Component } from '../../pages/home/page-home1/page-home1.component';
import { PageHome2Component } from '../../pages/home/page-home2/page-home2.component';
import { PageHome3Component } from '../../pages/home/page-home3/page-home3.component';
import { PageHome4Component } from '../../pages/home/page-home4/page-home4.component';
import { PageHome5Component } from '../../pages/home/page-home5/page-home5.component';
import { PageHome6Component } from '../../pages/home/page-home6/page-home6.component';
import { PageHome7Component } from '../../pages/home/page-home7/page-home7.component';
import { PageHome8Component } from '../../pages/home/page-home8/page-home8.component';
import { PageHome9Component } from '../../pages/home/page-home9/page-home9.component';
import { PageHome10Component } from '../../pages/home/page-home10/page-home10.component';
import { PageHome11Component } from '../../pages/home/page-home11/page-home11.component';
import { PageHome12Component } from '../../pages/home/page-home12/page-home12.component';

const routes: Routes = [
  { path: '', component: PageHome1Component},
  { path: 'index', component: PageHome1Component},
  { path: 'index2', component: PageHome2Component},
  { path: 'index3', component: PageHome3Component},
  { path: 'index4', component: PageHome4Component},
  { path: 'index5', component: PageHome5Component},
  { path: 'index6', component: PageHome6Component},
  { path: 'index7', component: PageHome7Component},
  { path: 'index8', component: PageHome8Component},
  { path: 'index9', component: PageHome9Component},
  { path: 'index10', component: PageHome10Component},
  { path: 'index11', component: PageHome11Component},
  { path: 'index12', component: PageHome12Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
