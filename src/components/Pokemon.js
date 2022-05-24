import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BackgroundColor from './BackgroundColor'
import GetTypeColor from './GetTypeColor'

const Pokemon = () => {
  const [pokemons,setPokemons] = useState([])

    const getPokemon = async()=>{
       await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=50').then( res=>{
         getMainPokemon(res.data.results)
           
        })
    }

    const getMainPokemon= async(result)=>{
      result.map(async(poke)=>{
        const item =  await axios.get(poke.url)
        setPokemons(state=>[...state,item.data])
      })
    }



    useEffect(()=>{
        getPokemon()
        console.log(pokemons);
    },[])

  
  return (
    <>
    <div className=' flex flex-wrap justify-center'>
      { pokemons?.map((pokemon)=>(
        <Link to={`/pokemon/${pokemon.id}`} className={`flex flex-col items-center justify-center h-52 w-60 shadow-md rounded-md ${BackgroundColor(pokemon.types[0].type.name)} m-3`} key={pokemon?.name}>
        <img className='w-16' src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`} alt=""  />
        <h1>{pokemon?.name}</h1>
        <h1>{pokemon?.id}</h1>
        <div className='flex justify-center items-center'>{pokemon?.types?.map((item,index)=>(
            <span className={`${GetTypeColor(item.type.name)?.[0]}
            ${GetTypeColor(item.type.name)?.[1]}
            m-2 px-2 py-1 rounded-md shadow-md`} key={index}>{item.type.name}</span>
        ))}</div>
        </Link>
      ))}
    </div>
    </>
  )
}

export default Pokemon