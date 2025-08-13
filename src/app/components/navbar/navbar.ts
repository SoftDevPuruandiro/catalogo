import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true, // ✅ necesario
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  categories: Category[] = [
    { id: 'women', name: 'Dama', image: '' },
    { id: 'men', name: 'Caballero', image: '' },
  ];
}
