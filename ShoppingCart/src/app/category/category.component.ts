import { Component, OnInit } from '@angular/core';
import {Category} from '../shared/category.model';
import{NgForm} from '@angular/forms';
import{ProductServiceService}from '../shared/product-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[ProductServiceService]
})
export class CategoryComponent implements OnInit {

  constructor(private ProductService:ProductServiceService) { }
  
  Catdata:Category[];
  ngOnInit() {
    this.AllCategory();
    this.resetform();
  }
  AllCategory(){
    this.ProductService.GetCategory().subscribe((res)=>{
      this.Catdata=res as Category[];
      console.log(this.Catdata);
    })
  }
  resetform(form?:NgForm){
    if(form)
    form.reset();
    this.ProductService.selectedCategory={
      Category:"",
      _id:"",
      CategoryNo:null
    }
  }
  Onsubmit(form :NgForm){

    if(form.value._id==""){
      this.ProductService.postCategory(form.value).subscribe((res)=>{
        this.AllCategory();
        this.resetform(form);
   
    })
  }
  else{
    this.ProductService.putCategory(form.value).subscribe((res)=>{
      console.log(form.value)
      this.AllCategory();
      this.resetform(form);
    })
  }
  }
  OnEdit(cat:Category){
    this.ProductService.selectedCategory=cat;
  }
  OnDelete(_id:string,form: NgForm)
  {
    if(confirm("Are You Sure You Want to Delete??")==true){
        this.ProductService.deleteCategory(_id).subscribe((res)=>{
          this.AllCategory();
          this.resetform(form);
        }); 
    }
  }


}
