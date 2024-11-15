import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageProductsComponent } from '../../pages/shop/page-products/page-products.component';
import { PageProductDetailsComponent } from '../../pages/shop/page-product-details/page-product-details.component';
import { PageCartComponent } from '../../pages/shop/page-cart/page-cart.component';
import { PageCheckoutComponent } from '../../pages/shop/page-checkout/page-checkout.component';
import { PageWishlistComponent } from '../../pages/shop/page-wishlist/page-wishlist.component';

const routes: Routes = [
  { path: '', component: PageProductsComponent},
  { path: 'product', component: PageProductsComponent},
  { path: 'product-detail', component: PageProductDetailsComponent},
  { path: 'shopping-cart', component: PageCartComponent},
  { path: 'checkout', component: PageCheckoutComponent},
  { path: 'wish-list', component: PageWishlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
