import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchMovieDetails } from "@/services/tmdb.service";
import ClientMovieDetails from "./clientMovieDetails";


const movieDetails = async ({ params } : {params: { movieDetails: string[]}}) => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  })

  console.log(+params.movieDetails[0])

  await queryClient.prefetchQuery({
    queryKey: [`${+params.movieDetails[0]}-details`],
    queryFn: async () => await fetchMovieDetails(+params.movieDetails[0])
  })

  
  return (
      <HydrationBoundary state={dehydrate(queryClient)}>
          <ClientMovieDetails movieId={+params.movieDetails[0]} />
      </HydrationBoundary>
  )
}

export default movieDetails