import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHome1Component } from './pages/home/page-home1/page-home1.component';
import { PageHome2Component } from './pages/home/page-home2/page-home2.component';
import { PageHome3Component } from './pages/home/page-home3/page-home3.component';
import { PageHome4Component } from './pages/home/page-home4/page-home4.component';
import { PageHome5Component } from './pages/home/page-home5/page-home5.component';
import { PageHome6Component } from './pages/home/page-home6/page-home6.component';
import { PageHome7Component } from './pages/home/page-home7/page-home7.component';
import { PageHome8Component } from './pages/home/page-home8/page-home8.component';
import { PageHome9Component } from './pages/home/page-home9/page-home9.component';
import { PageHome10Component } from './pages/home/page-home10/page-home10.component';
import { PageHome11Component } from './pages/home/page-home11/page-home11.component';
import { PageHome12Component } from './pages/home/page-home12/page-home12.component';
import { SectionHeader1Component } from './sections/header/section-header1/section-header1.component';
import { SectionFooter1Component } from './sections/footer/section-footer1/section-footer1.component';
import { SectionSlider1Component } from './sections/home/home1/section-slider1/section-slider1.component';
import { SectionAbout1Component } from './sections/home/home1/section-about1/section-about1.component';
import { SectionServices1Component } from './sections/home/home1/section-services1/section-services1.component';
import { SectionWhatWeDo1Component } from './sections/home/home1/section-what-we-do1/section-what-we-do1.component';
import { SectionVideo1Component } from './sections/home/home1/section-video1/section-video1.component';
import { SectionProjects1Component } from './sections/home/home1/section-projects1/section-projects1.component';
import { SectionTeam1Component } from './sections/home/home1/section-team1/section-team1.component';
import { SectionTestimonials1Component } from './sections/home/home1/section-testimonials1/section-testimonials1.component';
import { SectionBlogs1Component } from './sections/home/home1/section-blogs1/section-blogs1.component';
import { SectionClients1Component } from './sections/home/home1/section-clients1/section-clients1.component';
import { SectionGetInTouchComponent } from './sections/header/section-get-in-touch/section-get-in-touch.component';
import { SectionHeader2Component } from './sections/header/section-header2/section-header2.component';
import { SectionSlider2Component } from './sections/home/home2/section-slider2/section-slider2.component';
import { SectionSpecifications1Component } from './sections/home/home2/section-specifications1/section-specifications1.component';
import { SectionProjects2Component } from './sections/home/home2/section-projects2/section-projects2.component';
import { SectionAbout2Component } from './sections/home/home2/section-about2/section-about2.component';
import { SectionVideo2Component } from './sections/home/home2/section-video2/section-video2.component';
import { SectionTestimonials2Component } from './sections/home/home2/section-testimonials2/section-testimonials2.component';
import { SectionTeam2Component } from './sections/home/home2/section-team2/section-team2.component';
import { SectionSelfIntro1Component } from './sections/home/home2/section-self-intro1/section-self-intro1.component';
import { SectionBlogs2Component } from './sections/home/home2/section-blogs2/section-blogs2.component';
import { SectionHeader3Component } from './sections/header/section-header3/section-header3.component';
import { SectionSlider3Component } from './sections/home/home3/section-slider3/section-slider3.component';
import { SectionProjects3Component } from './sections/home/home3/section-projects3/section-projects3.component';
import { SectionSpecifications2Component } from './sections/home/home3/section-specifications2/section-specifications2.component';
import { SectionVideo3Component } from './sections/home/home3/section-video3/section-video3.component';
import { SectionPlans1Component } from './sections/home/home3/section-plans1/section-plans1.component';
import { SectionCounter1Component } from './sections/home/home3/section-counter1/section-counter1.component';
import { SectionTestimonials3Component } from './sections/home/home3/section-testimonials3/section-testimonials3.component';
import { SectionHeader4Component } from './sections/header/section-header4/section-header4.component';
import { SectionSlider4Component } from './sections/home/home4/section-slider4/section-slider4.component';
import { SectionWhatWeDo2Component } from './sections/home/home4/section-what-we-do2/section-what-we-do2.component';
import { SectionServices2Component } from './sections/home/home4/section-services2/section-services2.component';
import { SectionCounter2Component } from './sections/home/home4/section-counter2/section-counter2.component';
import { SectionVision1Component } from './sections/home/home4/section-vision1/section-vision1.component';
import { SectionBlogs3Component } from './sections/home/home4/section-blogs3/section-blogs3.component';
import { SectionGallery1Component } from './sections/home/home4/section-gallery1/section-gallery1.component';
import { SectionHeader5Component } from './sections/header/section-header5/section-header5.component';
import { SectionSlider5Component } from './sections/home/home5/section-slider5/section-slider5.component';
import { SectionServices3Component } from './sections/home/home5/section-services3/section-services3.component';
import { SectionProjects4Component } from './sections/home/home5/section-projects4/section-projects4.component';
import { SectionBlogs4Component } from './sections/home/home5/section-blogs4/section-blogs4.component';
import { SectionHeader6Component } from './sections/header/section-header6/section-header6.component';
import { SectionSlider6Component } from './sections/home/home6/section-slider6/section-slider6.component';
import { SectionServices4Component } from './sections/home/home6/section-services4/section-services4.component';
import { SectionAbout3Component } from './sections/home/home6/section-about3/section-about3.component';
import { SectionHowWeWork1Component } from './sections/home/home6/section-how-we-work1/section-how-we-work1.component';
import { SectionVideo4Component } from './sections/home/home6/section-video4/section-video4.component';
import { SectionBlogs5Component } from './sections/home/home6/section-blogs5/section-blogs5.component';
import { SectionPlans2Component } from './sections/home/home6/section-plans2/section-plans2.component';
import { SectionSlider7Component } from './sections/home/home7/section-slider7/section-slider7.component';
import { SectionWelcome1Component } from './sections/home/home7/section-welcome1/section-welcome1.component';
import { SectionWhatWeDo3Component } from './sections/home/home7/section-what-we-do3/section-what-we-do3.component';
import { SectionServices5Component } from './sections/home/home7/section-services5/section-services5.component';
import { SectionProjects5Component } from './sections/home/home7/section-projects5/section-projects5.component';
import { SectionVision2Component } from './sections/home/home7/section-vision2/section-vision2.component';
import { SectionAbout4Component } from './sections/home/home8/section-about4/section-about4.component';
import { SectionServices6Component } from './sections/home/home8/section-services6/section-services6.component';
import { SectionVideo5Component } from './sections/home/home8/section-video5/section-video5.component';
import { SectionProjects6Component } from './sections/home/home8/section-projects6/section-projects6.component';
import { SectionTestimonials4Component } from './sections/home/home8/section-testimonials4/section-testimonials4.component';
import { SectionBlogs6Component } from './sections/home/home8/section-blogs6/section-blogs6.component';
import { SectionFooter2Component } from './sections/footer/section-footer2/section-footer2.component';
import { SectionHeader7Component } from './sections/header/section-header7/section-header7.component';
import { SectionSlider9Component } from './sections/home/home9/section-slider9/section-slider9.component';
import { SectionAbout5Component } from './sections/home/home9/section-about5/section-about5.component';
import { SectionServices7Component } from './sections/home/home9/section-services7/section-services7.component';
import { SectionQuality1Component } from './sections/home/home9/section-quality1/section-quality1.component';
import { SectionTeam3Component } from './sections/home/home9/section-team3/section-team3.component';
import { SectionProjects7Component } from './sections/home/home9/section-projects7/section-projects7.component';
import { SectionBlogs7Component } from './sections/home/home9/section-blogs7/section-blogs7.component';
import { SectionSlider10Component } from './sections/home/home10/section-slider10/section-slider10.component';
import { SectionCallUs1Component } from './sections/home/home10/section-call-us1/section-call-us1.component';
import { SectionAbout6Component } from './sections/home/home10/section-about6/section-about6.component';
import { SectionProjects8Component } from './sections/home/home10/section-projects8/section-projects8.component';
import { SectionServices8Component } from './sections/home/home10/section-services8/section-services8.component';
import { SectionQuality2Component } from './sections/home/home10/section-quality2/section-quality2.component';
import { SectionTeam4Component } from './sections/home/home10/section-team4/section-team4.component';
import { SectionTestimonials5Component } from './sections/home/home10/section-testimonials5/section-testimonials5.component';
import { SectionHeader8Component } from './sections/header/section-header8/section-header8.component';
import { SectionSlider11Component } from './sections/home/home11/section-slider11/section-slider11.component';
import { SectionAbout7Component } from './sections/home/home11/section-about7/section-about7.component';
import { SectionWhatWeDo4Component } from './sections/home/home8/section-what-we-do4/section-what-we-do4.component';
import { SectionWhatWeDo5Component } from './sections/home/home11/section-what-we-do5/section-what-we-do5.component';
import { SectionServices9Component } from './sections/home/home11/section-services9/section-services9.component';
import { SectionTeam5Component } from './sections/home/home11/section-team5/section-team5.component';
import { SectionGetInTouch1Component } from './sections/home/home11/section-get-in-touch1/section-get-in-touch1.component';
import { SectionClients2Component } from './sections/home/home11/section-clients2/section-clients2.component';
import { SectionProjects9Component } from './sections/home/home11/section-projects9/section-projects9.component';
import { SectionTestimonials6Component } from './sections/home/home11/section-testimonials6/section-testimonials6.component';
import { SectionBlogs9Component } from './sections/home/home11/section-blogs9/section-blogs9.component';
import { SectionBlogs8Component } from './sections/home/home10/section-blogs8/section-blogs8.component';
import { SectionSlider12Component } from './sections/home/home12/section-slider12/section-slider12.component';
import { SectionAbout8Component } from './sections/home/home12/section-about8/section-about8.component';
import { SectionFeatures1Component } from './sections/home/home12/section-features1/section-features1.component';
import { SectionServices10Component } from './sections/home/home12/section-services10/section-services10.component';
import { SectionCallUs2Component } from './sections/home/home12/section-call-us2/section-call-us2.component';
import { SectionContactUs1Component } from './sections/home/home12/section-contact-us1/section-contact-us1.component';
import { SectionTestimonials7Component } from './sections/home/home12/section-testimonials7/section-testimonials7.component';
import { SectionBlogs10Component } from './sections/home/home12/section-blogs10/section-blogs10.component';
import { SectionSlider8Component } from './sections/home/home8/section-slider8/section-slider8.component';
import { PageAbout1Component } from './pages/about/page-about1/page-about1.component';
import { PageAbout2Component } from './pages/about/page-about2/page-about2.component';
import { SectionInnerBannerComponent } from './sections/header/section-inner-banner/section-inner-banner.component';
import { PageServices1Component } from './pages/services/page-services1/page-services1.component';
import { PageServices2Component } from './pages/services/page-services2/page-services2.component';
import { PageSAgriculturalComponent } from './pages/services/page-s-agricultural/page-s-agricultural.component';
import { PageSAutomotiveComponent } from './pages/services/page-s-automotive/page-s-automotive.component';
import { PageSChemicalComponent } from './pages/services/page-s-chemical/page-s-chemical.component';
import { PageSCivilComponent } from './pages/services/page-s-civil/page-s-civil.component';
import { PageSMechanicalComponent } from './pages/services/page-s-mechanical/page-s-mechanical.component';
import { PageSOilgasComponent } from './pages/services/page-s-oilgas/page-s-oilgas.component';
import { PageSPowerEnergyComponent } from './pages/services/page-s-power-energy/page-s-power-energy.component';
import { PageServiceDetailComponent } from './pages/services/page-service-detail/page-service-detail.component';
import { PageProjectGridComponent } from './pages/project/page-project-grid/page-project-grid.component';
import { PageProjectMasonryComponent } from './pages/project/page-project-masonry/page-project-masonry.component';
import { PageProjectCarouselComponent } from './pages/project/page-project-carousel/page-project-carousel.component';
import { PageProjectDetailComponent } from './pages/project/page-project-detail/page-project-detail.component';
import { SectionServices11Component } from './sections/about/about1/section-services11/section-services11.component';
import { SectionPlans3Component } from './sections/services/services1/section-plans3/section-plans3.component';
import { SectionWhatWeDo6Component } from './sections/services/services2/section-what-we-do6/section-what-we-do6.component';
import { SectionServices12Component } from './sections/services/services2/section-services12/section-services12.component';
import { SectionVideo6Component } from './sections/about/about1/section-video6/section-video6.component';
import { SectionGallery2Component } from './sections/projects/carousel/section-gallery2/section-gallery2.component';
import { SectionGallery3Component } from './sections/projects/detail/section-gallery3/section-gallery3.component';
import { PagePricingComponent } from './pages/others/page-pricing/page-pricing.component';
import { PageIconFontsComponent } from './pages/others/page-icon-fonts/page-icon-fonts.component';
import { PageTeamComponent } from './pages/others/page-team/page-team.component';
import { PageTeamSingleComponent } from './pages/others/page-team-single/page-team-single.component';
import { PageFaqComponent } from './pages/others/page-faq/page-faq.component';
import { PageError403Component } from './pages/others/page-error403/page-error403.component';
import { PageError404Component } from './pages/others/page-error404/page-error404.component';
import { PageError405Component } from './pages/others/page-error405/page-error405.component';
import { PageContactUsComponent } from './pages/others/page-contact-us/page-contact-us.component';
import { PageProductsComponent } from './pages/shop/page-products/page-products.component';
import { PageProductDetailsComponent } from './pages/shop/page-product-details/page-product-details.component';
import { PageCartComponent } from './pages/shop/page-cart/page-cart.component';
import { PageCheckoutComponent } from './pages/shop/page-checkout/page-checkout.component';
import { PageWishlistComponent } from './pages/shop/page-wishlist/page-wishlist.component';
import { SectionRecentPostsComponent } from './sections/shop/products/section-recent-posts/section-recent-posts.component';
import { SectionArchivesComponent } from './sections/shop/products/section-archives/section-archives.component';
import { SectionCategoriesComponent } from './sections/shop/products/section-categories/section-categories.component';
import { SectionTagsComponent } from './sections/shop/products/section-tags/section-tags.component';
import { SectionFeaturedProductsComponent } from './sections/shop/products/section-featured-products/section-featured-products.component';
import { SectionProductDescriptionComponent } from './sections/shop/details/section-product-description/section-product-description.component';
import { SectionProductDetailComponent } from './sections/shop/details/section-product-detail/section-product-detail.component';
import { SectionProductReviewComponent } from './sections/shop/details/section-product-review/section-product-review.component';
import { SectionProductSpecificationComponent } from './sections/shop/details/section-product-specification/section-product-specification.component';
import { SectionProductTableComponent } from './sections/shop/wishlist/section-product-table/section-product-table.component';
import { ElementBlogBox1Component } from './elements/blogs/element-blog-box1/element-blog-box1.component';
import { PageBlogGridComponent } from './pages/blog/page-blog-grid/page-blog-grid.component';
import { PageBlogListComponent } from './pages/blog/page-blog-list/page-blog-list.component';
import { PageBlogPostComponent } from './pages/blog/page-blog-post/page-blog-post.component';
import { LoaderComponent } from './elements/loader/loader.component';
import { LoaderDirective } from './directives/loader.directive';
import { SectionFooter3Component } from './sections/footer/section-footer3/section-footer3.component';
import { SectionProjects10Component } from './sections/home/home6/section-projects10/section-projects10.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHome1Component,
    PageHome2Component,
    PageHome3Component,
    PageHome4Component,
    PageHome5Component,
    PageHome6Component,
    PageHome7Component,
    PageHome8Component,
    PageHome9Component,
    PageHome10Component,
    PageHome11Component,
    PageHome12Component,
    SectionHeader1Component,
    SectionFooter1Component,
    SectionSlider1Component,
    SectionAbout1Component,
    SectionServices1Component,
    SectionWhatWeDo1Component,
    SectionVideo1Component,
    SectionProjects1Component,
    SectionTeam1Component,
    SectionTestimonials1Component,
    SectionBlogs1Component,
    SectionClients1Component,
    SectionGetInTouchComponent,
    SectionHeader2Component,
    SectionSlider2Component,
    SectionSpecifications1Component,
    SectionProjects2Component,
    SectionAbout2Component,
    SectionVideo2Component,
    SectionTestimonials2Component,
    SectionTeam2Component,
    SectionSelfIntro1Component,
    SectionBlogs2Component,
    SectionHeader3Component,
    SectionSlider3Component,
    SectionProjects3Component,
    SectionSpecifications2Component,
    SectionVideo3Component,
    SectionPlans1Component,
    SectionCounter1Component,
    SectionTestimonials3Component,
    SectionHeader4Component,
    SectionSlider4Component,
    SectionWhatWeDo2Component,
    SectionServices2Component,
    SectionCounter2Component,
    SectionVision1Component,
    SectionBlogs3Component,
    SectionGallery1Component,
    SectionHeader5Component,
    SectionSlider5Component,
    SectionServices3Component,
    SectionProjects4Component,
    SectionBlogs4Component,
    SectionHeader6Component,
    SectionSlider6Component,
    SectionServices4Component,
    SectionAbout3Component,
    SectionHowWeWork1Component,
    SectionVideo4Component,
    SectionBlogs5Component,
    SectionPlans2Component,
    SectionSlider7Component,
    SectionWelcome1Component,
    SectionWhatWeDo3Component,
    SectionServices5Component,
    SectionProjects5Component,
    SectionVision2Component,
    SectionAbout4Component,
    SectionServices6Component,
    SectionVideo5Component,
    SectionProjects6Component,
    SectionTestimonials4Component,
    SectionBlogs6Component,
    SectionFooter2Component,
    SectionHeader7Component,
    SectionSlider9Component,
    SectionAbout5Component,
    SectionServices7Component,
    SectionQuality1Component,
    SectionTeam3Component,
    SectionProjects7Component,
    SectionBlogs7Component,
    SectionSlider10Component,
    SectionCallUs1Component,
    SectionAbout6Component,
    SectionProjects8Component,
    SectionServices8Component,
    SectionQuality2Component,
    SectionTeam4Component,
    SectionTestimonials5Component,
    SectionHeader8Component,
    SectionSlider11Component,
    SectionAbout7Component,
    SectionWhatWeDo4Component,
    SectionWhatWeDo5Component,
    SectionServices9Component,
    SectionTeam5Component,
    SectionGetInTouch1Component,
    SectionClients2Component,
    SectionProjects9Component,
    SectionTestimonials6Component,
    SectionBlogs9Component,
    SectionBlogs8Component,
    SectionSlider12Component,
    SectionAbout8Component,
    SectionFeatures1Component,
    SectionServices10Component,
    SectionCallUs2Component,
    SectionContactUs1Component,
    SectionTestimonials7Component,
    SectionBlogs10Component,
    SectionSlider8Component,
    PageAbout1Component,
    PageAbout2Component,
    SectionInnerBannerComponent,
    PageServices1Component,
    PageServices2Component,
    PageSAgriculturalComponent,
    PageSAutomotiveComponent,
    PageSChemicalComponent,
    PageSCivilComponent,
    PageSMechanicalComponent,
    PageSOilgasComponent,
    PageSPowerEnergyComponent,
    PageServiceDetailComponent,
    PageProjectGridComponent,
    PageProjectMasonryComponent,
    PageProjectCarouselComponent,
    PageProjectDetailComponent,
    SectionServices11Component,
    SectionPlans3Component,
    SectionWhatWeDo6Component,
    SectionServices12Component,
    SectionVideo6Component,
    SectionGallery2Component,
    SectionGallery3Component,
    PagePricingComponent,
    PageIconFontsComponent,
    PageTeamComponent,
    PageTeamSingleComponent,
    PageFaqComponent,
    PageError403Component,
    PageError404Component,
    PageError405Component,
    PageContactUsComponent,
    PageProductsComponent,
    PageProductDetailsComponent,
    PageCartComponent,
    PageCheckoutComponent,
    PageWishlistComponent,
    SectionRecentPostsComponent,
    SectionArchivesComponent,
    SectionCategoriesComponent,
    SectionTagsComponent,
    SectionFeaturedProductsComponent,
    SectionProductDescriptionComponent,
    SectionProductDetailComponent,
    SectionProductReviewComponent,
    SectionProductSpecificationComponent,
    SectionProductTableComponent,
    ElementBlogBox1Component,
    PageBlogGridComponent,
    PageBlogListComponent,
    PageBlogPostComponent,
    LoaderComponent,
    LoaderDirective,
    SectionFooter3Component,
    SectionProjects10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
