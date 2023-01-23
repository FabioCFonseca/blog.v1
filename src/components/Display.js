import React from 'react'
import Grid from '@mui/material/Grid';
import Cards from './Cards'
import useFetch from './useFetch';


const Display = () => {

  const { data } = useFetch();

  return (
    <div className='display'>   
        <Grid>
            <Grid item sm={12} lg={4}>
              <Cards cards = {data} />
            </Grid>
        </Grid>    
    </div>
  )
}

export default Display
