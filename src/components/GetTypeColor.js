
const GetTypeColor = (type) => {
   
        if(type==="fire"){
          return ['bg-red-500','text-white']
        }
        else if(type==='water'){
          return ['bg-blue-800','text-white']
        }
        else if(type==='electric'){
          return ['bg-yellow-400']
        }
        else if(type==='poison'){
          return ['bg-green-500','text-white']
        }
        else if(type==='ground'){
          return ['bg-amber-800','text-white']
        }
        else if(type==='bug'){
          return ['bg-stone-500','text-white']
        }
        else if(type==='flying'){
          return ['bg-teal-400']
        }
        else if(type==='fairy'){
          return ['bg-red-200']
        }
        else if(type==='grass'){
          return ['bg-green-300']
        }
        else if(type==='normal'){
          return [ 'bg-violet-500','text-white']
        }
      
  
}

export default GetTypeColor