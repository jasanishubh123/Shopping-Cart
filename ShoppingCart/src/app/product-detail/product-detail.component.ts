import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import {ProductServiceService} from '../shared/product-service.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productservice:ProductServiceService,private router:Router,private route:ActivatedRoute) { }

  singledata:any;
  Allcat:any;
  ngOnInit() {
    this.GetAllCategory();
    const id=this.route.snapshot.paramMap.get('id');

    this.productservice.getSingleProduct(id).subscribe((res)=>{
      this.singledata=res;
    })
  }
  GetAllCategory(){
    return this.productservice.GetCategory().subscribe((res)=>{
      this.Allcat=res;
      //console.log(this.Allcat)
    })
  }

}
