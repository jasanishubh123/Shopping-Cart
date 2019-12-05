import{Pipe ,PipeTransform} from '@angular/core'
import{Product}from '../shared/product.model';

@Pipe({
  name:'filter'
})
export class FilterProduct  implements PipeTransform{
    transform(products:Product[],cid:Number):Product[]{
        if (!cid) return products;
        if(cid==0)return products;
        //alert("id"+cid);
        //console.table(products.filter(products=>Number(products.CategoryId)==cid))
        return products.filter(products=>Number(products.CategoryId)==cid)
      
      }
}

