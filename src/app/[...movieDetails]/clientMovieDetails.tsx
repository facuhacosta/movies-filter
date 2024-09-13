'use client';

import { fetchMovieDetails } from '@/services/tmdb.service';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import ClientGenreList from '@/components/organisms/GenreList/clientGenreList';

function ClientMovieDetails({ movieId }:{movieId: number}) {
  const BASE_PATH = 'https://image.tmdb.org/t/p/w300';

  const { data: detailedMovie } = useQuery({
    queryKey: [`${movieId}-details`],
    queryFn: async () => await fetchMovieDetails(movieId),
  });

  const runeTimeString = (runtime: number) => `${Math.floor(runtime / 60)}:${(runtime % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })} Hs`;

  return (
    <Grid container spacing={2} columns={12} paddingX={4} marginTop={4}>
      {detailedMovie
      && (
      <>
        <Grid size={4}>
          <Card>
            <CardContent>
              <div className="w-60 h-96 flex items-center m-auto">
                <CardMedia
                  component="img"
                  height="375"
                  width="240"
                  image={`${BASE_PATH}${detailedMovie.poster_path}`}
                  alt="green iguana"
                />
              </div>
            </CardContent>
            <CardActions>
              <Rating
                name="-rating"
                defaultValue={detailedMovie.vote_average / 2}
                precision={0.5}
                readOnly
              />
            </CardActions>
          </Card>
        </Grid>
        <Grid size={8}>
          <Card>
            <CardContent>
              <Typography variant="h3">
                {detailedMovie.title}
              </Typography>
              <Typography variant="h6" component="span" marginRight={3}>
                {detailedMovie.original_title}
              </Typography>
              <Typography variant="body1" component="span">
                {detailedMovie.release_date}
              </Typography>
              <Typography variant="subtitle1">
                {runeTimeString(detailedMovie.runtime)}
              </Typography>
              <Divider sx={{ marginY: 2 }} />
              <Typography variant="body2">
                {detailedMovie.overview}
              </Typography>
              <Divider sx={{ marginY: 2 }} />
              <Box gap={2} display="flex">
                <Typography variant="body2" component="span">
                  Budget: $
                  {detailedMovie.budget.toLocaleString('en-US')}
                </Typography>
                <Typography variant="body2" component="span">
                  Revenue: $
                  {detailedMovie.revenue.toLocaleString('en-US')}
                </Typography>
                <Typography variant="body2" component="span" display="flex" gap={2}>
                  Genres:
                  {detailedMovie.genres.map((genre) => (
                    <Typography variant="caption" component="span">
                      {genre.name}
                    </Typography>
                  ))}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={12}>
          <ClientGenreList title="Similar Movies" genreIds={detailedMovie.genres.map(({ id }) => id)} />
        </Grid>
      </>
      )}
    </Grid>
  );
}

export default ClientMovieDetails;
