import { Component, OnInit } from '@angular/core';
import { UserModel } from './model/user.model';
import { UserService } from './service/user.service';
import { ProductModel } from './model/product.model';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public user: UserModel;
  public users: UserModel[] = [];
  public products: ProductModel;
  constructor(private userService: UserService, private productService: ProductService) {}

  ngOnInit() {
    this.userService.getUser().subscribe((res: UserModel) => {
      this.user = res;
      console.log(this.user);
    });
    this.userService.getUsers().subscribe((res: UserModel[]) => {
      this.users = res;
      console.log(this.users);
    });
    this.productService.getProducts().subscribe((res: ProductModel[]) => {
      this.products = res;
      console.log(this.products);
    });
  }
}
