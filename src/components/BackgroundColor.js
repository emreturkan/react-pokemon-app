
const BackgroundColor = (type) => {
    
        if(type==='electric'){
          return 'bg-gradient-to-r from-yellow-200 to-yellow-500'
        }
        else if(type==='water'){
          return 'bg-gradient-to-r from-blue-200 to-blue-500'
        }
        else if(type==='fire'){
          return 'bg-gradient-to-r from-red-200 to-red-500'
        }
        else if(type==='grass'){
          return 'bg-gradient-to-r from-green-200 to-green-500'
        }
        else if(type==='bug'){
          return 'bg-gradient-to-r from-stone-200 to-stone-500'
        }
        else if(type==='normal'){
          return 'bg-gradient-to-r from-violet-200 to-violet-500'
        }
        else if(type==='ground'){
          return 'bg-gradient-to-r from-amber-600 to-amber-800'
        }
        else if(type==='poison'){
          return 'bg-gradient-to-r from-green-500 to-green-900'
        }
        else if(type==='fairy'){
          return 'bg-gradient-to-r from-red-100 to-red-300'
        }
        else if(type==='fighting'){
          return 'bg-gradient-to-r from-red-700 to-red-300'
        }
        else if(type==='ghost'){
          return 'bg-gradient-to-r from-purple-700 to-purple-300'
        }
        else if(type==='rock'){
          return 'bg-gradient-to-r from-orange-800 to-orange-500'
        }
        else if(type==='psychic'){
          return 'bg-gradient-to-r from-fuchsia-300 to-fuchsia-700'
        }
        else if(type==='ice'){
          return 'bg-gradient-to-r from-indigo-300 to-indigo-700'
        }
        else if(type==='dragon'){
          return 'bg-gradient-to-r from-red-500 to-orange-300'
        }
        else if(type==='dark'){
          return 'bg-gradient-to-r from-gray-300 to-gray-600'
        }
        else if(type==='steel'){
          return 'bg-gradient-to-r from-cyan-600 to-cyan-900'
        }
        
      
}

export default BackgroundColor