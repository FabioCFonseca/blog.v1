import React from 'react'
import Display from '../components/Display'
import Hero from '../components/Hero';
import Container from '@mui/material/Container';

const Home = () => {

    return (
        <div className='home'>
            <Hero />
            <Container>
                <Display />
            </Container>    
        </div>
    )
}

export default Home
