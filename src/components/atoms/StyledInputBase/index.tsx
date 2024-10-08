'use client';

import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '45ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '80ch',
    },
  },
}));

export default StyledInputBase;
