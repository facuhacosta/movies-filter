'use client'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import StyledInputBase from '@/components/atoms/StyledInputBase';
import SearchIconWrapper from '@/components/atoms/SearchIconWrapper';
import Search from '@/components/atoms/Search';
import MobileMenu from '@/components/molecules/MobileMenu';
import ThemeToggle from '@/components/molecules/ThemeToggle';
import { useQuery } from '@tanstack/react-query';
import { fetchAllGenres } from '@/services/tmdb.service';


const NavBar = () => {

  const { data: Genres = [] } = useQuery({
    queryKey: ['movies-genres'],
    queryFn: fetchAllGenres,
  })
  
  return (
    <AppBar position="static">
      <Toolbar>
        <MobileMenu />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  )
}

export default NavBar