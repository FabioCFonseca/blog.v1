import React from 'react'
import Cards from '../components/Cards'
import useFetch from '../components/useFetch';

const Home = () => {
    const { data } = useFetch();

    return (
        <div className='home'>
            <Cards cards = {data} />
        </div>
    )
}

export default Home
