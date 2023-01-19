import React from 'react'
import Cards from '../components/Cards'
import {db} from '../db/FbConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';


const Home = () => {

    const [cards, setCards] = useState([]);
    const infoCollection = collection(db, "artigos");


    useEffect(() => {

    const getInfo = async () => {
      
        const data = await getDocs(infoCollection) 
        setCards(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
      
    };

    getInfo();
  }, [])

  return (
    <div className='home'>
      <Cards cards = {cards} />
    </div>
  )
}

export default Home
