import {useState, useEffect,useRef } from "react";
import useFetch from "./store/useFetch";
import useFind from "./store/useFind";

const ids=[1,2]
export default function CallApi() {
  const[uid,setUid]=useState(1)
  const[value,setValue]=useState('')
  const[toggle,setToggle] = useState(false)
  // const tonggle = useRef(false)
  
  const {data,loading,error} = useFetch(`http://localhost:3001/${uid}`)
  const[data_,setData_] = useState([])
  // const data_ = useRef(data.email)
  // const email = data_.current
  useEffect(()=>{
    setData_(data)
  },[data])

  const{arrcr} = useFind(value,data_)
  
  const handleFocus=()=>{
    setToggle(true)
  }
  const handleBlur=()=>{
    setToggle(false)
  }

    return(
      <>
        <input 
          placeholder="tim kiem ...."
          style={{ margin: 20 }}
          value={value} 
          onChange={(e) => setValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        { toggle && arrcr && arrcr.map(dt=>
           (
                <li
                  key={dt.id}
                >
                  {dt.email}
                </li>
            )
          )
        }

        <ul> 
          {loading && <li>loading....</li>}
          {!toggle &&!loading && data && data.length > 0 && data.map(dt=>
           (
                <li
                  key={dt.id}
                >
                  {dt.email}
                </li>
            )
          )}
          {error && <li>khong co du lieu</li>}
          {
            !loading && ids.map(id=>(
              <button
                key={id}
                onClick= {(e)=>{
                  setUid(parseInt(e.target.innerText));
                }}
                style={
                  {
                    margin:"35px"
                  }
                }
              >
                {id}
              </button>
            ))
          }
        </ul>
      </>
    )
}

