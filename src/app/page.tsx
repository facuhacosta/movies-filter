
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchAllGenres } from '@/services/tmdb.service';
import HomePage from './homePage';
import NavBar from '@/components/organisms/NavBar';

export default async function Home() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  })

  await queryClient.prefetchQuery({
    queryKey: ['movies-genres'],
    queryFn: fetchAllGenres,
  })

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePage />
      </HydrationBoundary>
    </>
  );
}
