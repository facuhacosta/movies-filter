import { fetchAllMovies } from "@/services/tmdb.service"
import { QueryClient } from "@tanstack/react-query"
import ClientSearchResults from "./clientSearchResults"

const SearchResultsPage = async ({ searchParams }: { searchParams: { search: string }}) => {
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  })

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['movies-all'],
    queryFn: fetchAllMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage, _) => lastPage.page + 1,
    pages: 4
  })

  return <ClientSearchResults startValue={searchParams.search} />
}

export default SearchResultsPage