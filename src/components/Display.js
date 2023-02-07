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
    <Grid container spacing={10}>   
    {data.map((data) => (
      <Grid item sm={4} md={4} lg={4} key={data.id}>
      <Card variant="outlined" 
        sx={{ maxWidth: 345,
              maxHeight: 900 }}>
          <CardMedia
            component="img" 
            sx={{ height: 300 }}
            src={`/assets/images/${data.id}.jpg`}
          />
          <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            @{data.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="secondary"
              variant='contained' size="small" 
              onClick={() => {
                navigate(`/articles/${data.id}`)}}
            > Ler Artigo </Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
    </Grid>  
    </div> 
  )
}

export default Display
