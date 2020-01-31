import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path:'temp' ,component:TemplateComponent},
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
