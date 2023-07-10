import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from './store/reducers/movie.reducer';




@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ movies: moviesReducer })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
