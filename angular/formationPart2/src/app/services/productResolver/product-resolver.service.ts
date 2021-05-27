import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../product/product.service';

import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService implements Resolve<any> {
  constructor(private productService: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.productService.findAll().pipe(delay(2000));
  }
}
