import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../footer/footer";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './category.html',
  styleUrls: ['./category.scss']
})
export class Category {
  categoryId: string = '';
  products: Product[] = [];

  allProducts: Product[] = [
    { id: '1', name: 'Dama', image: 'products/dama/vestidoRojo.png', categoryId: 'women' },
    { id: '2', name: 'Caballero', image: '/products/caballero/conjuntoTraje.png', categoryId: 'men' },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      console.log(this.categoryId)
      this.products = this.allProducts.filter(p => p.categoryId === this.categoryId);
    });
  }
}
