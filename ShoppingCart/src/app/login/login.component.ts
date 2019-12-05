import { Component, OnInit } from '@angular/core';
import{ProductServiceService} from '../shared/product-service.service';
import{Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ProductServiceService]
})
export class LoginComponent implements OnInit {

  noheader:boolean;
  user={
    email:'',
    password:''
  }
 
  constructor(private service:ProductServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //alert(this.router.url)

    if(this.router.url=="/Login"){
      this.noheader=true;
    }

  }
  checkuser(){
      var User={
        email:this.user.email,
        password:this.user.password
      }
      // console.log(User)
      this.service.checkuser(User).subscribe((res)=>{
        console.log(res);
        if(res){
          alert("Hello")
          this.router.navigate(["/Product"]);
        }
        else{
          alert("Something is wrong")
        }
      })
  }

}
