import Genre from './genders.model';

export default interface DetailedMovie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  budget: number;
  revenue: number;
  runtime: number;
  vote_average: number;
  genres: Genre[]
};
