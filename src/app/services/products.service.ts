import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Products} from '../models/products.model';


@Injectable({providedIn:"root"})
export class ProductsService {
  host= environment.host
  constructor(private http:HttpClient) {
  }

  getAllProducts():Observable<Products[]>{

    return this.http.get<Products[]>(this.host+"/products")
  }
  getAvailableProducts():Observable<Products[]>{

    return this.http.get<Products[]>(this.host+"/products?available=true")
  }
  getSelectedProducts():Observable<Products[]>{

    return this.http.get<Products[]>(this.host+"/products?selected=true")
  }
  getSearchProducts(keyword:string):Observable<Products[]>{

    return this.http.get<Products[]>(this.host+"/products?name_like="+keyword)
  }
  getSelected(products:Products):Observable<Products>{

    return this.http.put<Products>(this.host+"/products/"+products.id,products)
  }
  deleteProducts(products:Products):Observable<void>{

    return this.http.delete<void>(this.host+"/products/"+products.id)
  }
  saveProducts(products:Products):Observable<Products>{

    return this.http.post<Products>(this.host+"/products",products)
  }
  getProducts(id:number):Observable<Products>{

    return this.http.get<Products>(this.host+"/products/"+id)
  }
  UpdateProducts(product:Products):Observable<Products>{

    return this.http.put<Products>(this.host+"/products/"+product.id,product)
  }

}
