import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarrComponent } from './navbarr/navbarr.component';
import {PhotosComponent} from './photos/photos.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'navbarr', component: NavbarrComponent, pathMatch:"full"},
  {path: 'photos', component: PhotosComponent, pathMatch:"full"},
  {path: 'tickets', component: TicketsComponent, pathMatch:"full"},
  {path: 'homepage', component: HomepageComponent, pathMatch:"full"},
  {path: 'contact', component: ContactComponent, pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }