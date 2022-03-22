import { useState,useEffect } from "react";


export default function TodoList() {
  const [jobs, setJobs] = useState([])
  const [job, setJob] = useState("");
  const [index_,setIndex_] = useState()
  const [tonggle,setToggle] = useState(true)
  const handleSubmit = () => {
      setJobs(prev=>[...prev, job])
      setJob("");
  };

  
  // useEffect(()=>{
  //   const time = setTimeout(()=>{
  //     if(job!==""){
  //       handleSubmit()
  //     }
  //   },1000)
  //   return()=>clearTimeout(time)
  // },[job])



  const handleDelete = (job) => {
    setJobs((jobs) => {
      const newArrJob = jobs.filter((data) => data !== job);
      return newArrJob ?? [];
    });
  };
  const handeUpdate =(job,index)=>{
    setJob(job)
    setIndex_(index)
    setToggle(false)
    console.log(index)
  }

  const handleClickUpdate=()=>{
    const newArrJob = jobs
    newArrJob.splice(index_,1,job)
    console.log(newArrJob)
    setJobs(newArrJob)
    setJob('')
    setToggle(true)
    console.log(index_);
  }

  return (
    <div className="todoList">
      <input 
        placeholder="nhập công việc ...."
        style={{ margin: 50 }}
        value={job} 
        onChange={(e) => setJob(e.target.value)}
      />
      {tonggle ? 
        <button
        onClick={()=>handleSubmit()}
        >
          add
        </button> :
        <button
          onClick={()=>handleClickUpdate()}
        >
          update
        </button>
      }
      <ul>
        {jobs.map((job_, index) => {
          return (
            <li 
              key={index}
              >
              {job_}
              <button
                onClick={() => handleDelete(job_)}
                style={{ marginLeft: 10 }}
              >
                Xóa
              </button>
              <button
                 onClick={()=>handeUpdate(job_,index)}
                style={{ marginLeft: 10 }}
              >
                update
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
