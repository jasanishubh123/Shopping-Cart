import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,UrlSegment} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noheader:boolean=true;
  title = 'ShoppingCart';
  constructor(router: Router,route:ActivatedRoute) { 
   
    
    // if(window.location.pathname!="/Login"){
    //       this.noheader=false
         
    // }
    // else{
    //   this.noheader=true;
    // }
    

  
}

  
  
}
