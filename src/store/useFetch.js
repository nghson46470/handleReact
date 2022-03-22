import { useState,useEffect } from "react";
import axios from 'axios';

export default function useFetch(url){
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(false);

    useEffect(()=>{
        try{
            async function fetchData(){
                let res = await axios.get(url)       
                let dt = (res && res) ? res.data :[];
                if(dt && dt.length){
                    dt = dt.reverse()
                }
                setData(dt);
                const timer = setTimeout(() => {
                    setLoading(false);
                }, 2000);
                
                setError(false);
            }
            fetchData();
        }
        catch{
            setError(true);
            setLoading(false)
        }
        return(
            setLoading(true)
        )
    },[url])
    return {
        data,loading,error
    }
}