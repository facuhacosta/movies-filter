import { fetchMoviesByGenre } from '@/services/tmdb.service';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import ClientGenreList from './clientGenreList';

function GenreListSSr({ genreIds, title }: {genreIds: number[], title: string}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: [`${genreIds.join('-')}-movies`],
    queryFn: async () => await fetchMoviesByGenre(genreIds),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientGenreList genreIds={genreIds} title={title} />
    </HydrationBoundary>
  );
}

export default GenreListSSr;
