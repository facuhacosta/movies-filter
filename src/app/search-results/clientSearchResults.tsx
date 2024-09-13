'use client'
import { fetchAllMovies } from "@/services/tmdb.service"
import { useInfiniteQuery } from "@tanstack/react-query"
import MovieCard from "@/components/molecules/MovieCard"
import Grid from "@mui/material/Grid2"
import Button from "@mui/material/Button"

const ClientSearchResults = ({startValue}: {startValue: string}) => {
  const { data: allMovies, isLoading, isError, hasNextPage, fetchNextPage} = useInfiniteQuery({
    queryKey: ['movies-all'],
    queryFn: fetchAllMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage, _) => lastPage.page + 1
  })
  
  const handleOnIntersect = () => {
    if (hasNextPage) {
      fetchNextPage()
    }
  }

  console.log(allMovies)

  // const { elementToObserve } = useIntersectionObserver<HTMLDivElement>(handleOnIntersect)
  
  return (
    <>
      <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }} >
        {
          allMovies?.pages?.map(({results}) => (
            results.filter((movie) => {
              if (movie.title.toLowerCase().includes(startValue.toLowerCase())) return true;
              if (movie.overview.toLowerCase().includes(startValue.toLowerCase())) return true;
              return false
            }).map(movie => (
              <Grid marginTop={3} key={movie.id} size={{ xs: 2, sm: 4, md: 3, xl: 2 }}>
                <MovieCard movieDetails={movie} />
              </Grid>
            ))
          ))
        }
        <Grid size={12} sx={{ display: 'flex', justifyContent: 'center'}}>
          <Button onClick={handleOnIntersect}>Load More</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default ClientSearchResults