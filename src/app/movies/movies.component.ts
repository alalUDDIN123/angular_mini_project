import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie.model';
import { Store } from "@ngrx/store";
import { addMovies, getMovies } from '../store/actions/movie.action';
import { MoviesState } from '../store/reducers/movie.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies: any[] = [];
  movies$!: Observable<Movie[]>

  constructor(
    private moviesService: MoviesService,
    private store: Store<MoviesState>

  ) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
    this.movies$ = this.store.select(state => state.movies);
    this.movies$.subscribe(movies => {
      console.log('Data from NgRx store:', movies);
    });
  }


  newMovie: Movie = {
    id: 0,
    name: '',
    rating: null,
    releaseDate: '',
  };

  addMovie(event: Event) {
    event.preventDefault();

    if (!this.newMovie.name || this.newMovie.rating === null || !this.newMovie.releaseDate) {
      alert('Please fill in all fields!');
      return;
    }

    this.newMovie.id = this.generateUniqueId();
    this.store.dispatch(addMovies({ movie: this.newMovie }))


    // Reset newMovie object to its initial values
    this.newMovie = {
      id: 0,
      name: '',
      rating: null,
      releaseDate: '',
    };


  }

  generateUniqueId(): number {
    const id = Date.now();
    return id;
  }
}
