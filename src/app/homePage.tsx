import GenreListSSr from '@/components/organisms/GenreList';

function HomePage() {
  return (
    <div>
      <GenreListSSr genreIds={[28]} title="Action" />
      <GenreListSSr genreIds={[10751]} title="Comedy" />
      <GenreListSSr genreIds={[14]} title="Dramma" />
    </div>
  );
}

export default HomePage;
