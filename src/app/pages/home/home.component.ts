import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //variable
  //hold an array
  productList: any[] = [];

  cartObj: any = {
    CartId: 0,
    CustId: 1,
    ProductId: 0,
    Quantity: 0,
    AddedDate: '2023-11-24T05:44:48.879Z',
  };

  //first the constructor gets called
  //then ngOnInit

  //DI
  constructor(private productService: ProductService) {}

  //lifecycle hook
  //trigger api calls
  ngOnInit() {
    debugger;
    this.loadAllProducts();
  }

  loadAllProducts() {
    debugger;
    //make the api call
    //subscribe - fetching the data of whatever the function is returning
    this.productService.getAllProducts().subscribe((result: any) => {
      //whatever response we get we have to store it in the product list
      this.productList = result.data;
    });
  }

  addItemToCart(productId: number) {
    debugger;
    this.cartObj.ProductId = productId;
    this.productService.addToCart(this.cartObj).subscribe((result: any) => {
      if (result.result) {
        alert('Product added to cart');
        //emit that subject
        //wehenver we  add to cart we are emitting a subject
        this.productService.cartAddedSubject.next(true);
      }
    });
  }
}
