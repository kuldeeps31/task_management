 import { Router } from "express";
 import { RouterLink,Routes,RouterModule } from "@angular/router";
 import { NgModule } from '@angular/core';
import { LoginSignupComponent } from "./login-signup/login-signup.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ListComponent } from "./list/list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { CoderunComponent } from "./coderun/coderun.component";


export const routes: Routes = [
{ path: '', redirectTo: 'landing', pathMatch: 'full' },//default routes
{path:'landing',component:LandingPageComponent},
{path:'dashboard',component:DashboardComponent},
//,{path:'about',component:ListComponent}
{path:'login',component:LoginSignupComponent},
//{ path: '**', redirectTo("404 page not found");
 // Handle invalid URLs

 {path:'task',component:ListComponent},
 {path:'newtask',component:NewTaskComponent},
 {path:'coderun',component:CoderunComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}