import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FilterProduct} from './shared/filter-product';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    routingComponent,
    AddProductComponent,
    ProductDetailComponent,
    FilterProduct,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
