import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FavoritesPageComponent } from '@modules/favorites/pages/favorites-page/favorites-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent],  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
