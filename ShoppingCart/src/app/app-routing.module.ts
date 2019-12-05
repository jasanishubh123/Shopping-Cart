import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { AddProductComponent } from './add-product/add-product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'',component:ProductComponent},
  {path:'Product',component:ProductComponent,pathMatch:"full"},
  {path:'Category',component:CategoryComponent,pathMatch:"full"},
  // {path:'add',redirectTo:'add-product',pathMatch:'full'}
  {path:'add',component:AddProductComponent},
  {path:'edit/:id',component:AddProductComponent},
  {path:'detail/:id',component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ProductComponent,CategoryComponent,AddProductComponent,ProductDetailComponent,LoginComponent]
