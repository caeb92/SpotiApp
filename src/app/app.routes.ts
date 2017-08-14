import { RouterModule, Routes} from '@angular/router';
import {  HomeComponent } from './componentes/home/home.component';
import {  SearchComponent } from './componentes/search/search.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });
