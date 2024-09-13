'use client';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useColorScheme } from '@mui/material/styles';

function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <Select
      value={mode || 'system'}
      onChange={(event) => setMode(event.target.value as 'system' | 'light' | 'dark')}
      inputProps={{ 'aria-label': 'select-mode' }}
    >
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  );
}

export default ThemeToggle;
