import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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

    const getTypeColor = (type)=>{
      if(type==="fire"){
        return 'bg-red-500'
      }
      else if(type==='water'){
        return 'bg-blue-800'
      }
      else if(type==='electric'){
        return 'bg-yellow-400'
      }
      else if(type==='poison'){
        return 'bg-green-500'
      }
      else if(type==='ground'){
        return 'bg-amber-800'
      }
      else if(type==='bug'){
        return 'bg-stone-500'
      }
      else if(type==='flying'){
        return 'bg-teal-400'
      }
      else if(type==='fairy'){
        return 'bg-red-200'
      }
      else if(type==='grass'){
        return 'bg-green-300'
      }
      else if(type==='normal'){
        return 'bg-violet-500'
      }
    }


    const getBackground =(type)=>{
      if(type==='electric'){
        return 'bg-gradient-to-r from-yellow-200 to-yellow-500'
      }
    }

    

    useEffect(()=>{
        getPokemon()
        console.log(pokemons);
    },[])

  
  return (
    <>
    <div className=' flex flex-wrap justify-center'>
      { pokemons?.map((pokemon)=>(
        <Link to={`/pokemon/${pokemon.id}`} className={`flex flex-col items-center justify-center h-52 w-60 shadow-md rounded-md ${getBackground(pokemon.types[0].type.name)} m-3`} key={pokemon?.name}>
        <img className='w-16' src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`} alt=""  />
        <h1>{pokemon?.name}</h1>
        <h1>{pokemon?.id}</h1>
        <div className='flex justify-center items-center'>{pokemon?.types?.map((item,index)=>(
            <span className={`${getTypeColor(item.type.name)} m-2 px-2 py-1 rounded-md shadow-md`} key={index}>{item.type.name}</span>
        ))}</div>
        </Link>
      ))}
    </div>
    </>
  )
}

export default Pokemon