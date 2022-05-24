import Water from "../image/water.png"
import Fire from "../image/fire.png"
import Electric from "../image/electric.png"
import Fairy from "../image/fairy.png"
import Bug from "../image/bug.png"
import Flying from "../image/flying.png"
import Grass from "../image/grass.png"
import Ground from "../image/ground.png"
import Normal from "../image/normal.png"
import Poison from "../image/poison.png"
import Ice from "../image/ice.png"
import Ghost from "../image/ghost.png"
import Psychic from "../image/psychic.png"
import Rock from "../image/rock.png"
import Fighting from "../image/fighting.png"
import Dragoon from "../image/dragoon.png"
import Steel from "../image/steel.png"
import Dark from "../image/dark.png"
const GetTypeColor = (type) => {
   
        if(type==="fire"){
          return Fire
        }
        else if(type==='water'){
          return Water
        }
        else if(type==='electric'){
          return Electric
        }
        else if(type==='poison'){
          return Poison
        }
        else if(type==='ground'){
          return Ground
        }
        else if(type==='bug'){
          return Bug
        }
        else if(type==='flying'){
          return Flying
        }
        else if(type==='fairy'){
          return Fairy
        }
        else if(type==='grass'){
          return Grass
        }
        else if(type==='normal'){
          return Normal
        }
        else if(type==='psychic'){
          return Psychic
        }
        else if(type==='fighting'){
          return Fighting
        }
        else if(type==='ice'){
          return Ice
        }
        else if(type==='rock'){
          return Rock
        }
        else if(type==='ghost'){
          return Ghost
        }
        else if(type==='dark'){
          return Dark
        }
        else if(type==='dragon'){
          return Dragoon
        }
        else if(type==='steel'){
          return Steel
        }
  
}

export default GetTypeColor