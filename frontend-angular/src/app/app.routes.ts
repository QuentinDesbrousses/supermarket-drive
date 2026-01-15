import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page/home-page';
import { ProductList } from './pages/products/product-list/product-list';
import { UserAccount } from './pages/users/user-account/user-account';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePage
    },
    {
        path: 'product-list',
        component: ProductList
    },
    {
        path: 'user',
        component: UserAccount
    }
];
