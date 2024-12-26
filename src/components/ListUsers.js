import axios from "axios"
import { useEffect, useState } from "react"
import CardUsers from "./CardUsers"
import Spinner from 'react-bootstrap/Spinner';
const ListUsers=()=>{

    const [users,setUsers] = useState([])
const [loading,setLoading]= useState(true)

     useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>setUsers(res.data))
            .then(()=>setLoading(false))
            .catch((err)=> console.log("erreur",err))




     },[])   



    return(
        <div className="style">
{
   loading ?   <Spinner animation="border" variant="primary" />: users.map((el,i,t)=> <CardUsers key={i} el={el}/>)
}
        </div>
    )
}

export default ListUsers