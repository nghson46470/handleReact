import { useState,useEffect } from "react";
export default function useFind(value,data_){
   
    const [arrcr,setArrcr]=useState([])


    useEffect (()=>{
        data_.length > 0 && data_ && data_.map((dt)=>{
            dt.email.includes(value) && 
            setArrcr(arr=>[...arr,dt]) 
        })
        return()=>setArrcr([])

    },[value])

    return{
        arrcr
    }
}