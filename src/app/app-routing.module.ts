import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';


const routes: Routes = [
  // login route
  { path: 'login', component: LoginComponent },
  // dashboard or account overview route
  { path: 'dashboard', component: DashboardComponent },
  // product overview route
  { path: 'product-overview/:id', component: ProductOverviewComponent },
  // otherwise redirect to public
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
