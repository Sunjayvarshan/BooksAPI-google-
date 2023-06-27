import React from 'react'
import { useState } from 'react';
import Gallery from './Gallery';
import './search.css' 

const Search = () => { 
    
    const[search , setSearch] = useState(''); 
    const[items,setItems] = useState([]); 
    
    const handleSubmit=()=>{ 
        const url=`https://www.googleapis.com/books/v1/volumes?q=${search}` 
        fetch(url) 
        .then(res=>res.json()) 
        .then(data=>setItems(data.items)) 
        .catch(err=> console.log(err)) } 
        
        return ( 
        <div> 
            <div className='search__container'>
                <h1>Book Explore</h1> 
                <div className='search_bar'> 
                <input  className='form__field'type='input' placeholder='type something..' onChange={e=>setSearch(e.target.value)}></input> 
                <button className='button-56'type='submit' onClick={handleSubmit}>Search</button> 
                </div> 
            </div>
            <Gallery items={items}/> 
        </div> 
            ) 
    }
            
export default Search