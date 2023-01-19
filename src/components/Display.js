import React from 'react'
import Grid from '@mui/material/Grid';
import Home from '../pages/Home';


const Display = () => {
  return (
    <div>   
        <Grid container>
            <Grid item sm={12} lg={4}>
                <Home />
            </Grid>
        </Grid>    
    </div>
  )
}

export default Display
