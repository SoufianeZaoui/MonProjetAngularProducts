import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL:string='http://localhost:3000/products';
  constructor (private http : HttpClient){} // Dependency injection I

  public getAllProducts():Observable <IProduct[]>{
  return this.http.get<IProduct[]>(this.URL);
  }
  }


