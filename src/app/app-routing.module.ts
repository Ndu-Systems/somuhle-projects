import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from "./home-page/home-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServicesComponent } from "./services/services.component";
import { AboutUsComponent } from "./about-us/about-us.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "our-services", component: ServicesComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact-us", component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
