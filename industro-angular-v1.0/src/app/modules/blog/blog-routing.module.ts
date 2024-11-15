import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageBlogGridComponent } from '../../pages/blog/page-blog-grid/page-blog-grid.component';
import { PageBlogListComponent } from '../../pages/blog/page-blog-list/page-blog-list.component';
import { PageBlogPostComponent } from '../../pages/blog/page-blog-post/page-blog-post.component';

const routes: Routes = [
  { path: '', component: PageBlogGridComponent},
  { path: 'blog-grid', component: PageBlogGridComponent},
  { path: 'blog-list-sidebar', component: PageBlogListComponent},
  { path: 'blog-post-right-sidebar', component: PageBlogPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
