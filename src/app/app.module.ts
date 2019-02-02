import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VisionAndStoriesComponent } from './home-page/home-sections/vision-and-stories/vision-and-stories.component';
import { FooterComponent } from './home-page/home-sections/footer/footer.component';
import { HomeMainComponent } from './home-page/home-sections/home-main/home-main.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule ,HttpClient} from '@angular/common/http';


@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      HomePageComponent,
      VisionAndStoriesComponent,
      FooterComponent,
      HomeMainComponent,
      ServicesComponent,
      AboutUsComponent,
      ContactUsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule ,
      HttpClientModule
   ],
   providers: [HttpClient],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
