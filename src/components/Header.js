import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Typography align="left" variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 20 }}>
              <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
            </Typography>
            <Typography align="right" variant="h6" component="div" sx={{ flexGrow: 1, marginRight: 20 }}>
              <Link to='/about' style={{ textDecoration: 'none' }}>About</Link>
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}