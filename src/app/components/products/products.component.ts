import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/domain/iproduct';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
   products:Observable <IProduct[]>;
   constructor(private service: ProductsService) {} // Constr injection
   ngOnInit(): void {
     this.products = this.service.getAllProducts();
   }
  }

