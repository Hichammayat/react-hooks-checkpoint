import Navbar from './Navbar';
import Carte from './Carte';
import {useState} from 'react';

import { useSelector } from 'react-redux';
const Main=()=> {
  const movieList = useSelector((state)=>state.movie.value)
  const [searchmovie, setSearchmovie] = useState('')
   
     
    
    return (
      <div>
        <Navbar movieList={movieList} setSearchmovie={setSearchmovie} searchmovie={searchmovie} />
        <div className='main'>
          {movieList.filter((element)=>{
            if(searchmovie === "") return movieList ;
            else if (element.title.includes(searchmovie)) return movieList ;
          })
          .map(element => (
  
            <Carte element={element} />
          ) )}
            
         
          
  
         
        </div>
        
        
  
      </div>
    )
  }
  
  
  export default Main;