// movies.service.ts

import { Injectable } from '@angular/core';
import { moviesData } from '../data';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies() {
    return moviesData;
  }
}
