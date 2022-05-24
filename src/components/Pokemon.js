import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BackgroundColor from './BackgroundColor'
import GetTypeColor from './GetTypeColor'
import Pagination from './Pagination'
import Search from './Search'

const Pokemon = () => {
  const [pokemons,setPokemons] = useState([])
  const [page,setPage] = useState(0)

    const getPokemon = async()=>{
       await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=50&offset=${page}`).then( res=>{
        setPokemons([])
         getMainPokemon(res.data.results)
           
        })
    }

    const getMainPokemon= async(result)=>{
      result.map(async(poke)=>{
        const item =  await axios.get(poke.url)
        
        setPokemons(state=>[...state,item.data])
      })
    }



   

  
  return (
    <>
    <Search setPokemons={setPokemons} getPokemon={getPokemon} page={page}/>
    <div className=' flex flex-wrap justify-center'>
      {pokemons && pokemons?.map((pokemon)=>(
        <Link to={`/pokemon/${pokemon.id}`} className={`flex flex-col items-center justify-center h-52 w-60 shadow-md rounded-md
         ${BackgroundColor(pokemon?.types?.[0].type.name)} m-3`} key={pokemon?.name}>
        <img className='w-16' src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`} alt=""  />
        <h1 className='text-2xl font-bold text-gray-700'>{pokemon?.name?.toUpperCase()}</h1>
        <div className='flex justify-center items-center'>{pokemon?.types?.map((item,index)=>( 
            <img key={index} className='w-8 mx-2 my-2' src={`${GetTypeColor(item.type.name)}`} alt="" />
        ))}</div>
        </Link>
      ))}
    </div>
    <Pagination setPage={setPage} page={page}/>
    </>
  )
}

export default Pokemon