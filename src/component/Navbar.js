import React from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar({setSearchmovie},{movieList}){
    
    const inputTextHandler=(e)=>{

        setSearchmovie(e.target.value);

    };
    const navigate = useNavigate()
    return(
    <nav className="nav">
        <ul className="left-nav">
           <a href=""className="anime-site">Anime site</a>
           <a href=""className="home">Home</a>
        </ul>
        <div className="add-movie">
            <button className="add-movie" onClick={()=> navigate('/Newmovie')}>add a new movie</button>
        </div>
        <div className="search-section" >
           <input onChange={inputTextHandler} className="search-nav" type="text" placeholder="Filter Movie By Title" />
           <span className="search-button"><i class="fa-solid fa-magnifying-glass"></i>
           </span>
           
        </div>
        <button className="sign-btn">SIGNIN<i class="fa-solid fa-right-to-bracket"></i></button>

    </nav>
    )
}

