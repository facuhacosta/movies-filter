import DetailedMovie from '@/models/detailedMovie.model';
import Genre from '@/models/genders.model';
import MoviesResponse from '@/models/moviesResponse.model';
import { QueryFunction, SkipToken } from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';

export const fetchAllGenres = async () => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/genre/movie/list',
    params: {
      language: 'en-US',
    },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjFiMDRiNTIwOGVjODVlMzAwMGQyZjVmOTQyNDdiOCIsIm5iZiI6MTcyNjA3ODYyNS41MDc3MjgsInN1YiI6IjY1MmY1ODg2MDI0ZWM4MDEwMTU0MjE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E7PW_gb-R1vz_47sz7oEQFyN4tVdiYbEetRGRUO4qGE',
    },
  };

  return await axios.request<{genres: Genre[]}>(options)
    .then(async (res) => {
      if (res.status !== 200) throw new Error('Error Fetching Data!');
      return res.data.genres;
    });
};

export const fetchMoviesByGenre = async (genreId: number[]) => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc',
      with_genres: `${encodeURIComponent(genreId.join())}`,
    },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjFiMDRiNTIwOGVjODVlMzAwMGQyZjVmOTQyNDdiOCIsIm5iZiI6MTcyNjA3ODYyNS41MDc3MjgsInN1YiI6IjY1MmY1ODg2MDI0ZWM4MDEwMTU0MjE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E7PW_gb-R1vz_47sz7oEQFyN4tVdiYbEetRGRUO4qGE',
    },
  };

  return await axios.request<MoviesResponse>(options)
    .then(async (res) => {
      if (res.status !== 200) throw new Error('Error Fetching Data!');
      return res.data.results;
    });
};
export const fetchAllMovies: QueryFunction<MoviesResponse, string[], number> | SkipToken = async ({ pageParam }) => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: `${pageParam}`,
      sort_by: 'popularity.desc',
    },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjFiMDRiNTIwOGVjODVlMzAwMGQyZjVmOTQyNDdiOCIsIm5iZiI6MTcyNjA3ODYyNS41MDc3MjgsInN1YiI6IjY1MmY1ODg2MDI0ZWM4MDEwMTU0MjE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E7PW_gb-R1vz_47sz7oEQFyN4tVdiYbEetRGRUO4qGE',
    },
  };

  return await axios.request<MoviesResponse>(options)
    .then(async (res) => {
      if (res.status !== 200) throw new Error('Error Fetching Data!');
      return res.data;
    }).then((res) => res);
};

export const fetchMovieDetails = async (movieId: number) => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjFiMDRiNTIwOGVjODVlMzAwMGQyZjVmOTQyNDdiOCIsIm5iZiI6MTcyNjA3ODYyNS41MDc3MjgsInN1YiI6IjY1MmY1ODg2MDI0ZWM4MDEwMTU0MjE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E7PW_gb-R1vz_47sz7oEQFyN4tVdiYbEetRGRUO4qGE',
    },
  };

  return await axios.request<DetailedMovie>(options)
    .then(async (res) => {
      if (res.status !== 200) throw new Error('Error Fetching Data!');
      return res.data;
    });
};
