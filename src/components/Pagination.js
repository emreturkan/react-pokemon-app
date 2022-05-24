import React from 'react'

const Pagination = ({setPage,page}) => {

    const handlePrev = ()=>{
        if(page!==0){
            setPage(state=>state-50)
        }
    }

    const handleNext = ()=>{
        if(page!==27){
            setPage(state=>state+50)
        }
    }

  return (
    <div className='flex justify-around my-4'>
        <button className='px-4 py-2 rounded-md shadow-md font-semibold text-white bg-blue-500' onClick={handlePrev}>PREV</button>
        <button className='px-4 py-2 rounded-md shadow-md font-semibold text-white bg-blue-500' onClick={handleNext}>NEXT</button>
    </div>
  )
}

export default Pagination