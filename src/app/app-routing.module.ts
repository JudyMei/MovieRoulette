import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path : "", component : HomeComponent},
  { path : "discover", component : DiscoverComponent},
  { path : "about", component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
