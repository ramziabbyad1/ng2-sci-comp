import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainContainer } from './containers/main';
import { NavBarComponent } from './ui/navbar/nav-bar.component';
import { HomeComponent } from './ui/screens/home.component';
import { AboutComponent } from './ui/screens/about.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
		NavBarComponent,
		AboutComponent,
		MainContainer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
