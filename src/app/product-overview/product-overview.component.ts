import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  product = [];
  selectedProduct = null;
  selectedId: number;
  displayedColumns: string[] = ['name', 'value'];
  constructor(
    private service: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedProduct = params.get('id');
        return this.service.getProductDetails(this.selectedProduct)
      })
    ).subscribe(success => {
      this.product = Object.keys(success.product).map(product => {
        return {
          name: product,
          value: success.product[product]
        }
      });
    }, error => {
      console.log(error);
      this.product = [];
    })
  }

}
