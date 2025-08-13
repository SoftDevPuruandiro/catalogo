import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryCards } from "../../components/category-cards/category-cards";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../footer/footer";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryCards, Navbar, Footer],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

}
