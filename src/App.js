import React from'react';
import '../src/App.css';
import Header from './components/Header';
import Charactersgreed from './components/characters/Charactersgreed';
import Search from './components/Search';
import {useState,useEffect} from 'react';
import axios from 'axios';

const App=()=> {
  const [items,setitems]=useState([])
  const [loading,setloading]=useState(true)
  const [query,setQuery]=useState('')

  useEffect(()=>{
    const fetch=async()=>{
      const result=await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
        )

     // console.log(result.data)
      setitems(result.data)
      setloading(false)
    }
    fetch();

  },[query])


  return(
    <div className="container">
    <Header />
    <Search getQuery={(q)=>setQuery(q)}/>
    <Charactersgreed loading={loading} items={items}/>
    </div>
  );
}

export default App;
