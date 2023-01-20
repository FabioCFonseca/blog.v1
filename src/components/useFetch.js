import {db} from '../db/FbConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useFetch = () => {
    const [data, setData] = useState([]);
    const infoCollection = collection(db, "artigos");

    useEffect(() => {
        const getInfo = async () => {
            const data = await getDocs(infoCollection) 
            setData(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        };
    
        getInfo();
      }, []);

  return {data}
}

export default useFetch
