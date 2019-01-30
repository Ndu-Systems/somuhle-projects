import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VisionAndStoriesComponent } from './home-page/home-sections/vision-and-stories/vision-and-stories.component';
import { FooterComponent } from './home-page/home-sections/footer/footer.component';
import { HomeMainComponent } from './home-page/home-sections/home-main/home-main.component';


@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      HomePageComponent,
      VisionAndStoriesComponent,
      FooterComponent,
      HomeMainComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
