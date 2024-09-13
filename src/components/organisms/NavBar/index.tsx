'use client'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import StyledInputBase from '@/components/atoms/StyledInputBase';
import SearchIconWrapper from '@/components/atoms/SearchIconWrapper';
import Search from '@/components/atoms/Search';
import ThemeToggle from '@/components/molecules/ThemeToggle';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const NavBar = () => {
  const router = useRouter()

  const handleSubmitSearch = (value: string) => {
    router.push(`/search-results?search=${value}`)
  }
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/">
          <HomeOutlinedIcon />
        </Link>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onKeyDown={event => {
              if (event.key === 'Enter') handleSubmitSearch(event.currentTarget.value)
            }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  )
}

export default NavBar