import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DiscoverComponent } from './pages/discover/discover.component';

const routes: Routes = [
  { path : "", component : DiscoverComponent},
  { path : "about", component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
