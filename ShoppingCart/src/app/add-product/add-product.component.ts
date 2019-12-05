import { Component, OnInit } from '@angular/core';
import{Product}from '../shared/product.model';
import {ProductServiceService}from '../shared/product-service.service';
import{NgForm} from '@angular/forms';
import{Router, ActivatedRoute}from '@angular/router';
import{Category}from '../shared/category.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers:[ProductServiceService]
})
export class AddProductComponent implements OnInit {
  image:any;
 
  mdate:Date;
  Allcat:Category[];
  constructor(private ProductService:ProductServiceService,private router:Router,private route:ActivatedRoute) { }
  singledata:Product;
  ngOnInit() {
    this.resetForm();
    this.GetAllCategory();
    var datepipe=new DatePipe('en-US');
   
    const id=this.route.snapshot.paramMap.get('id');
    if(id){
      console.log(id);
      
      this.ProductService.getSingleProduct(id).subscribe((res)=>{
        //console.log(res);
        this.singledata=res as Product;
        this.mdate=new Date(datepipe.transform(this.singledata.MfgDate, 'dd/MM/yyyy'));
        this.ProductService.selectedProduct={
          _id:id,
          ProductName:this.singledata.ProductName,
          ProductCompany:this.singledata.ProductCompany,
          Price:this.singledata.Price,
          MfgDate:this.mdate,
          Description:this.singledata.Description,
          Image:"",
          CategoryId:this.singledata.CategoryId
        }
        console.log(this.mdate)
      })
    }
  }


  selectImage(event){
   
    this.image=event.target.files[0];
    console.log(event)
  }


  onSubmit(form:NgForm){


    if(form.value._id==""){


      
      const formData= new FormData();
      console.log(form.value)
      formData.append('ProductName',form.value.ProductName);
      formData.append('CategoryId',form.value.CategoryId);
      formData.append('Price',form.value.Price);
      formData.append('MfgDate',form.value.MfgDate);
      formData.append('Description',form.value.Description);
      formData.append('Image',this.image,this.image.name);
      formData.append('_id',null);
      formData.append('ProductCompany',form.value.ProductCompany);
      
     
      this.ProductService.postProduct(formData).subscribe((res)=>{
        this.resetForm();
        this.router.navigate(["/Product"]);
      })
    }
    else{
      this.ProductService.putProduct(form.value).subscribe((res)=>{
        this.resetForm();
        this.router.navigate(["/Product"]);
      })
    }
  }
  resetForm(form?:NgForm){

      if(form)
        form.reset();
       this.ProductService.selectedProduct={
        _id:"",
        ProductName:"",
        ProductCompany:"",
        Price:null,
        MfgDate:null,
        Description:"",
        Image:"",
        CategoryId:null
       };
       
  }

  GetAllCategory(){
    return this.ProductService.GetCategory().subscribe((res)=>{
      this.Allcat=res as Category[];
      //console.log(this.Allcat)
    })
  }
  onEdit(pro:Product){
    this.ProductService.selectedProduct=pro;
    console.log(this.ProductService.selectedProduct)

  }



}
