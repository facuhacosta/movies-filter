'use client';

import MovieCard from '@/components/molecules/MovieCard';
import { fetchMoviesByGenre } from '@/services/tmdb.service';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';

function ClientGenreList({ genreIds, title }: { genreIds: number[], title: string }) {
  const { data: movies = [] } = useQuery({
    queryKey: [`${genreIds.join('-')}-movies`],
    queryFn: async () => await fetchMoviesByGenre(genreIds),
  });

  return (
    <Box sx={{
      padding: 6,
    }}
    >
      <Typography variant="h4">{title}</Typography>
      <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }}>
        {movies.map((movie, index) => (
          <Grid
            key={index}
            size={{
              xs: 2, sm: 4, md: 3, xl: 2,
            }}
          >
            <MovieCard movieDetails={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ClientGenreList;
