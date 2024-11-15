import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageProjectGridComponent } from '../../pages/project/page-project-grid/page-project-grid.component';
import { PageProjectMasonryComponent } from '../../pages/project/page-project-masonry/page-project-masonry.component';
import { PageProjectCarouselComponent } from '../../pages/project/page-project-carousel/page-project-carousel.component';
import { PageProjectDetailComponent } from '../../pages/project/page-project-detail/page-project-detail.component';

const routes: Routes = [
  { path: '', component: PageProjectGridComponent},
  { path: 'project-grid', component: PageProjectGridComponent},
  { path: 'project-masonry', component: PageProjectMasonryComponent},
  { path: 'project-carousel', component: PageProjectCarouselComponent},
  { path: 'project-detail', component: PageProjectDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
