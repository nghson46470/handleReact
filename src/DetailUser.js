import { useParams  } from 'react-router-dom';
import useFetch from './store/useFetch';

function DetailUser(){
    //sử dụng param để lấy tham số từ url chuyển vào component

    const {data,loading,error} = useFetch(`http://localhost:3001/1`)
    const ids = useParams().id
    console.log(ids)

    return(
        <>  
            {loading && <li>loading....</li>}
            {!loading && data && data.length > 0 && data.map(dt=>(
                 <div key={dt.id}>
                     
                     {dt.id==ids && <div key={dt.id}>{`${dt.email} có id : ${dt.id}`}</div>}
                 </div>
            ))}
            {/* {
                !loading && data && data.length > 0 &&
                <div>{data[id]}</div>
            } */}

        </>
    )
}

export default DetailUser