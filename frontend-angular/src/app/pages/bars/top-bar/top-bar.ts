import { Component } from '@angular/core';
import { SearchBar } from "./search-bar/search-bar";


@Component({
  selector: 'app-top-bar',
  imports: [SearchBar],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss',
})
export class TopBar {

}
