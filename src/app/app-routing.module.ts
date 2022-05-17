import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';


const routes: Routes = [
  {path:'view', component: AppComponent},
  {path:'add-items',component:DialogComponent},
  {path:'details',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
