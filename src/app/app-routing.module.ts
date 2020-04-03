import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ColorsComponent } from './views/colors/colors.component';


const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:"home",component: HomeComponent},
  {path:"colors",component: ColorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
