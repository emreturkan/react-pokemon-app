import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Search = ({setPokemons,getPokemon,page}) => {
    const [search,setSearch] = useState('')
    const getSearchPokemon = async()=>{
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`).then( res=>{
            setPokemons([res?.data])
         })
     }

     useEffect(()=>{
         if(search.trim() === ''){
             getPokemon()
         }
         else{
             getSearchPokemon()
         }

     },[search,page])


  return (
    <div className='flex items-center justify-center my-4'>
        <input className='shadow-md outline-none border-2 px-2 py-1' type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
    </div>
  )
}

export default Search