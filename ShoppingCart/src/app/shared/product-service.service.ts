import { Injectable } from '@angular/core';
import{Product} from './product.model';
import{Category}from './category.model'
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  selectedProduct:Product;
  selectedCategory:Category;
  readonly url="http://localhost:8888/Product/";
  readonly caturl="http://localhost:8888/Category/"
 
  constructor(private http:HttpClient) { }

  checkuser(data:any){
    return this.http.post("http://localhost:8888/users/login/",data)
  }

  getAllProduct(){
    return this.http.get(this.url);
  }
  postProduct(formData:any){
   
    return this.http.post<any>(this.url,formData);
  }
  putProduct(pro:Product){
    return this.http.put(this.url+`${pro._id}`,pro);
  }
  deleteProduct(_id:string){
    return this.http.delete(this.url+`${_id}`);
  }
  GetCategory(){
    return this.http.get(this.caturl)
  }
  getSingleProduct(_id:string){
    return this.http.get(this.url+`${_id}`);
  }
  postCategory(cat:Category){
    return this.http.post(this.caturl,cat);
  }
  putCategory(cat:Category){
    return this.http.put(this.caturl+`${cat._id}`,cat);
  }
  deleteCategory(_id:string){
    return this.http.delete(this.caturl+`${_id}`);
  }
}
