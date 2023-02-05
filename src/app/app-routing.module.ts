import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

const routes: Routes = [{
  path:"",
  loadChildren:()=>import('./layout/dashboard/dashboard.module').then(m=>m.DashboardModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
