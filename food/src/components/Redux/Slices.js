import { createSlice } from "@reduxjs/toolkit";

const Slice=createSlice({
    name:"Slice",
    initialState:{Categoryid:"",productdata:[]},
    reducers:{
        setcategoryid:(state,action)=>{
            state.Categoryid=action.payload;
        },
        getproductdata:(state,action)=>{
            state.productdata=action.payload;
        }
    }
})

export const SliceAction=Slice.actions;
export default Slice.reducer;