import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  /** Tableau de produits*/
  products: Product[] = [];
  /**Model */
  product: Product = { name: '', price: 0 };

  constructor() {}

  ngOnInit(): void {}

  public add(form: NgForm): void {
    form.control.markAllAsTouched();
    if (form.valid) {
      let priceStr = String(this.product.price).replace(',', '.');
      this.product.price = parseFloat(priceStr);

      this.products.push(this.product);
      this.product = { name: '', price: 0 };
      //réinitialise le formulaire
      form.reset(this.product);
    }
  }
}
