import useFetch from "./store/useFetch";
import {useState, useEffect,useRef } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function MeThod() {
    const[value,setValue] = useState('')
    const {data,loading,error} = useFetch(`http://localhost:3001/1`)
    const[data_,setData_] = useState([])

    const navigate = useNavigate()
    // const handlePost=()=>{
    //     var options = {
    //         method : 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body : JSON.stringify({
    //             email:value
    //         })
    //     };
    //     fetch(data,options)
    //         .then(function(res){
    //             res.json();
    //         })
    //         .then(function(res){
    //             console.log(res)
    //         })
    // }
    const handlePost=async()=>{
        // fetch('http://localhost:3001/1',{
        //     method: 'POST',
        //     body : JSON.stringify({
        //         email:value
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json; charset=UTF-8',
        //     },

        // })
        //     .then(function(res){
        //         res.json();
        //     })
        //     .then(function(res){
        //         console.log(res)
        //     })
        // setToggle(!toggle)
        

        
        if(value!==''){
            let dt = {
                email : value
            }
            let res = await axios.post('http://localhost:3001/1',dt);
            console.log(res);
            setData_(prev=>[...prev,res.data])
            setValue('')
        }
    }
    const handlePushUrl = (id)=>{
        //sư dụng navigate để chuyển tham số từ component lên url
        navigate (`/DetailUser/${id}`)
    }

    useEffect(()=>{
        setData_(data)
    },[data])

    

    return(
        <>
            {/* ádasdasdsa */}
            <input 
                placeholder="nhập email ..."
                type="email"
                style={{ margin: 20 }}
                value={value} 
                onChange={(e) => setValue(e.target.value)}
            />
            <ul>
                {loading && <li>loading....</li>}
                {!loading && data_ && data_.length > 0 && data_.map(dt=>
                (
                        <li
                        key={dt.id}
                        onClick = {()=>handlePushUrl(dt.id)}
                        >
                        {dt.email}
                        </li>
                    )
                )}
                {error && <li>khong co du lieu</li>}
            </ul>
            <button
                onClick={handlePost}
            >
                nhập
            </button>
        </>
    )
}