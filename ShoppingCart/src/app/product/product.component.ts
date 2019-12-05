import { Component, OnInit } from '@angular/core';
import{Product}from '../shared/product.model';
import{NgForm}from '@angular/forms';
import{Category} from '../shared/category.model';
import {ProductServiceService} from '../shared/product-service.service';
import{Router} from '@angular/router';
// import{FilterProduct}from '../shared/filter-product'
// import{Pipe ,PipeTransform} from '@angular/core'
// @Pipe({
//   name:'categorywiseproduct'
// })
@Component({
  selector: 'app-product',
 
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductServiceService]
})


export class ProductComponent implements OnInit {
 
  cid:any=0;
  AllProducts:Product[];
  Allcat:Category[];
  constructor(private ProductService:ProductServiceService,private router:Router) { }

  ngOnInit() {
   this.allProduct();
   this.allcat();
  }
  getcatid(event){
    this.cid=event.target.value;
   // alert(this.cid)
  }

  allProduct(){
    this.ProductService.getAllProduct().subscribe((res)=>{
      this.AllProducts=res as Product[];
    })
  }
  allcat(){
    this.ProductService.GetCategory().subscribe((res)=>{
      this.Allcat=res as Category[];
    })
  }

  
  onDelete(_id:string){
    if(confirm("Are You Sure You Want to Delete??")==true){
      this.ProductService.deleteProduct(_id).subscribe((res)=>{
        this.allProduct();
        this.allcat();
       
      });
  }
  }

}
