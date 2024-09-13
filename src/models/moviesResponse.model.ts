import Movie from './movie.model';

export default interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number
};
