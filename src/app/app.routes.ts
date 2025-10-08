import { Routes } from '@angular/router';
import { CardPage } from './card-page/card-page';
import { Catalog } from './catalog/catalog';

export const routes: Routes = [
    { path: '', component: Catalog },
    { path: "card/:id", component: CardPage },
];
 