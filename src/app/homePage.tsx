import GenreListSSr from '@/components/organisms/GenreList';

const HomePage = () => {
  
  return (
    <div>
      <GenreListSSr genreId={28} />
      <GenreListSSr genreId={10751} />
      <GenreListSSr genreId={14} />
    </div>
  )
}

export default HomePage