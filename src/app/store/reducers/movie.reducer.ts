import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/models/movie.model';
import { addMovies, getMovies } from '../actions/movie.action';
import { moviesData } from 'src/app/data';

export interface MoviesState {
    movies: Movie[];
}

export const initialState: MoviesState = {
    movies: moviesData,
};

console.log("initialState:-", initialState);
console.log("moviesData:-", moviesData);


export const moviesReducer = createReducer(
    initialState,
    on(getMovies, (state) => {
        console.log('get movie state:', state);
        return state;
    }),
    on(addMovies, (state, { movie }) => {
        console.log('movies data from reducer:', movie);
        return {
            ...state,
            movies: [...state.movies, movie],
        };
    })
);
