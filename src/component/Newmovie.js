import React, { useState } from 'react'
import{addMovie} from '../Redux/Reducer/Reducer'
import{useDispatch} from 'react-redux'

function Newmovie() {
    const dispatch =useDispatch();
   
    const [title,setTitle]= useState("")
    const [description,setDescription]= useState("")
    const [img,setImg]= useState("")
  return (
    <div className='add-box'>
        <div className='new-img' >
            <label>enter the image link</label>
            <input placeholder='image link' onChange={(event)=>setImg(event.target.value)}/>
        </div>
        <div className='new-name'>
        <label>enter the name movie</label>
            <input type="text" placeholder='name' name='name' 
            onChange={(event)=>setTitle(event.target.value)}/>
        </div>
        <div className='new-description'>
        <label>enter the description</label>
            <input type="text" placeholder='description' name='description' 
            onChange={(event)=>setDescription(event.target.value)}/>
        </div>
        <div className=''>
        <label>click to save</label>
            <button onClick={()=>{dispatch(addMovie({/*id:movieList[movieList.length-1].id+1,*/
                 img,description,title}))}}></button>
        </div>
    </div>
  )
}

export default Newmovie