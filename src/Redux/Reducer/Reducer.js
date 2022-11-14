import { createSlice } from "@reduxjs/toolkit";
import { Moviedata } from "../../component/Data";

export const movieSlice = createSlice({
    name : "movie",
    initialState :  {value:Moviedata},
    reducers:{
      addMovie:(state,action)=>{
        state.value.push(action.payload);

      }
    }
    
});

export const {addMovie}=movieSlice.actions
export default movieSlice.reducer