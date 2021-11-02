import React,{useEffect, useState} from 'react'
import { getData } from './data'

const LiderBoard = () => {
    const[data,setData] = useState([])
    useEffect(()=> {
        
        getData().then((response)=> {
           
            setData(response)
        })
    },[]) 
    return(
        <div className='lider'>
           {data.sort((a,b)=> {
               return b.score - a.score
           }).map((item)=> (
               <div className="string">{item.name}={item.score}</div>
           ))}
        </div>
    )
}

export default LiderBoard