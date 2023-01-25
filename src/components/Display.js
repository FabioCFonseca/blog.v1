import React from 'react'
import Grid from '@mui/material/Grid';
import useFetch from './useFetch';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


const Display = () => {

const { data } = useFetch();
let navigate = useNavigate();

  return (
    <div className='display'>  
    <Grid container>   
    {data.map((data) => (
      <Grid item sm={3} md={3} lg={3} key={data.id}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
                />
          <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" 
                onClick={() => {
                  navigate(`/articles/${data.id}`)}}  >Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
    </Grid>  
    </div> 
  )
}

export default Display
