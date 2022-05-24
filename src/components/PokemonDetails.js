import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import BackgroundColor from './BackgroundColor'
const PokemonDetails = () => {
  const [pokemon,setPokemon] = useState([])
  const {id} = useParams()
  const navigate = useNavigate()
  console.log(id);

  const getPokemon = async()=>{
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then( res=>{
      console.log(res.data);
      setPokemon(res.data)
     })
 }


 useEffect(()=>{
   getPokemon()
   
 },[])

 

 const getType = pokemon?.types?.map((item)=>{
   return item?.type?.name
 })



  return (
    <section className='m-8 flex flex-col items-start h-full'>
      
      <button className={`px-3 rounded-md shadow-md py-1 flex ${BackgroundColor(getType?.[0])}`} onClick={()=>navigate('/')}>Geri dön</button>

        <div className={`${BackgroundColor(getType?.[0])} rounded-md shadow-md h-full w-full py-12 mt-12 flex justify-around `}>
        <div className="leftSection  flex flex-col justify-center items-center">
          <img className='w-72' src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`} alt=""  />
          <h1 className='font-bold text-2xl mt-4 text-gray-700'>{pokemon?.name?.toUpperCase()}</h1>
          <div className="types flex items-center justify-start">
            <h1 className='font-bold mr-2'>Type: </h1>
            {pokemon?.types?.map((item,index)=>(
              <span className='px-3 py-1 mb-2 mr-2 bg-red-500 rounded-md shadow-md' key={index}>{item.type.name.toUpperCase()}</span>
            ))}
          </div>
          <h1 className='font-bold mr-2 mb-3'>Height: <span className=' px-3 py-1 bg-red-500 rounded-md shadow-md '>{pokemon?.height}</span></h1>
          <h1 className='font-bold mr-2'>Weight: <span className='px-3 py-1 bg-red-500 rounded-md shadow-md'>{pokemon?.weight}</span></h1>
        </div>
        <div className="rightSection my-12">
          <div>
          {pokemon?.stats?.map((item,index)=>(
            <div key={index} >
              <div className='flex justify-between mb-1'> 
                <h1 >{item?.stat?.name.toUpperCase()}</h1>
                <h1>{item?.base_stat}</h1>
              </div>
              <div className="w-72 bg-gray-200 rounded-full h-5 dark:bg-gray-400">
               <div className={`bg-blue-900 h-5 rounded-full ` }
               style={{width:`${item?.base_stat}%`}}
               ></div>
              </div>
            </div>
          ))}
          </div>
          <div>
            <h1 className='mb-2'>Abilities</h1>
            {pokemon?.abilities?.map((item,index)=>(
              <span key={index} className='rounded-md font-semibold shadow-md mr-2 px-4 py-2 bg-red-300'>{item.ability.name.toUpperCase()}</span>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default PokemonDetails