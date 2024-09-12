import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Movie from '@/models/movie.model';
import Rating from '@mui/material/Rating';
import Link from 'next/link';
import { useIntersectionObserver } from '@/hooks/useIntersectorObserver';

const MovieCard = ({movieDetails}: {movieDetails: Movie}) => {

  const { elementToObserve, isIntesecting } = useIntersectionObserver<HTMLImageElement>(() => {})

  const BASE_PATH = "https://image.tmdb.org/t/p/w300"

  return (
    <Card sx={{ maxWidth: 250 }} ref={elementToObserve}>
      <CardActionArea href={`/${movieDetails.id}/${movieDetails.title}`}>
        <div className='w-60 h-96 flex items-center m-auto'>
          {
            isIntesecting &&
            <CardMedia
              component="img"
              height="375"
              width="240"
              image={`${BASE_PATH}${movieDetails.poster_path}`}
              alt="green iguana"
            />
          }
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap>
            {movieDetails.title}
          </Typography>
          <Typography variant="body2" className='line-clamp-5' sx={{ color: 'text.secondary', height: '100px' }}>
            {movieDetails.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Rating
          name={`${movieDetails.title}-rating`}
          defaultValue={movieDetails.vote_average / 2}
          precision={0.5}
          readOnly
        />
      </CardActions>
    </Card>
  );
}

export default MovieCard