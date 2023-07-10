import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/models/movie.model";



const getMovies = createAction('[Movies] GET MOVIES')

const addMovies = createAction(
    '[Movies] ADD MOVIES',
    props<{ movie: Movie }>()
)

const addMoviesSucess = createAction(
    '[Movies] ADD MOVIES SUCCESS',
    props<{ movie: Movie }>())

export {
    getMovies,
    addMovies,
    addMoviesSucess
}