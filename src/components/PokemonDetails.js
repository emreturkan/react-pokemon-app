import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import BackgroundColor from './BackgroundColor'
import Pokeball from "../image/pokeball.png"
import StarDust from "../image/stardust.png"
import GetTypeColor from './GetTypeColor'
const PokemonDetails = () => {
  const [pokemon,setPokemon] = useState([])
  const {id} = useParams()
  const navigate = useNavigate()

  const getPokemon = async()=>{
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then( res=>{
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
      
      <button className={`px-3 rounded-md shadow-md py-1 flex ${BackgroundColor(getType?.[0])}`} onClick={()=>navigate(-1)}>Geri dön</button>

        <div className={`${BackgroundColor(getType?.[0])} rounded-md shadow-md h-full w-full py-3 mt-4 flex justify-around `}>
        <div className="leftSection  flex flex-col justify-center items-center">
          <img className='w-96' src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`} alt=""  />
          <h1 className='font-bold text-4xl my-4 text-gray-700'>{pokemon?.name?.toUpperCase()}</h1>
          <div className='card w-80 h-48 p-4 rounded-md shadow-md bg-gray-800 text-white flex flex-col justify-between'>
          <div className="types flex justify-around ">
            <h1 className='font-bold  px-3 py-1'>Type: </h1>
            {pokemon?.types?.map((item,index)=>(
              <span className='px-6 flex py-1 mb-3 mr-5 bg-red-500 rounded-md shadow-md' key={index}>{item.type.name.toUpperCase()}
              <img className='w-5 ml-2' src={`${GetTypeColor(item?.type.name)}`} alt="" />
              </span>
            ))}
          </div>
          <h1 className='font-bold mb-3   flex justify-around'>Height: <span className=' px-3 py-1 bg-red-500 rounded-md shadow-md '>{pokemon?.height}</span></h1>
          <h1 className='font-bold   flex justify-around'>Weight: <span className='px-3 py-1 bg-red-500 rounded-md shadow-md'>{pokemon?.weight}</span></h1>
          </div>
        </div>
        <div className="rightSection  my-12">
          
          <div className='card px-8 py-4 rounded-md shadow-md bg-gray-800'>
          <div className='mb-3 border-b-2 flex items-center justify-between'>
            <img className='w-8 m-2' src={Pokeball} alt="pokeball" />
            <h1 className='text-white text-2xl font-bold'>STATS</h1>
          </div>
          {pokemon?.stats?.map((item,index)=>(
            <div key={index} >
              <div className='flex text-white justify-between mb-1'> 
                <h1 >{item?.stat?.name.toUpperCase()}</h1>
                <h1>{item?.base_stat}</h1>
              </div>
              <div className="w-72 bg-gray-200 rounded-full h-5 dark:bg-gray-400">
               <div className={`bg-pink-200 h-5 rounded-full ` }
               style={{width:`${item?.base_stat}%`}}
               ></div>
              </div>
            </div>
          ))}
          </div>
          <div className='card px-6 py-4 rounded-md shadow-md bg-gray-800 mt-12'>
            <div className='flex items-center justify-between mb-4'>
            <img className='w-8' src={StarDust} alt="" />
            <h1 className=' text-white text-3xl font-bold'>Abilities</h1>
            </div>
           <div className='flex justify-between'>
           {pokemon?.abilities?.map((item,index)=>(
              <span key={index} className='rounded-md font-bold shadow-md mr-2 px-4 py-2 bg-pink-200 '>{item.ability.name.toUpperCase()}</span>
            ))}
           </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default PokemonDetails