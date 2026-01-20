import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from "./pages/bars/top-bar/top-bar";
import { CartBar } from "./pages/bars/cart-bar/cart-bar";
import { NavBar } from "./pages/bars/nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBar, CartBar, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend-angular');
  showCart = signal(true)

  toggle() {
    this.showCart.update((showCart=>!showCart))
  }

  cartEnterClass = signal('cart-enter-animation')
  cartLeaveClass = signal('cart-leave-animation')
}
