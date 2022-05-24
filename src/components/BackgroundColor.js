
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
      
}

export default BackgroundColor