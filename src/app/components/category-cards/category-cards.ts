import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-cards',
  standalone: true, // ✅ necesario
  imports: [RouterModule, CommonModule],
  templateUrl: './category-cards.html',
  styleUrls: ['./category-cards.scss']
})
export class CategoryCards {
  categories: Category[] = [
    {
      id: 'women',
      name: 'Dama',
      image: '/categories/women.png'
    },
    {
      id: 'men',
      name: 'Caballero',
      image: '/categories/men.png'
    }
  ];
}
