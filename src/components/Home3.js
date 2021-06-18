import React,{useEffect, useState} from 'react'
import together from '../assets/images/eth.jpg'
function Home3() {
    const axios=require('axios')
    const [feature,setfeature]=useState([])
    useEffect(()=>{
        if(feature.length===0){
        axios.get('http://127.0.0.1:8000/projects')
        .then((data)=>setfeature(data.data.featured))
    }
    })
    return (
        <div className="home3">
            {
            feature.length===0?<h1>Loading...</h1>:
            feature.map((f)=>
            <div className="home3-featured">
                <img src={"http://127.0.0.1:8000"+f.thumbnail} />
                <div className="img-details">
                    <h1>{f.title}</h1>
                    <h3>{f.description}</h3>
                    <a target="_window" href={f.link}><button>Checkout!</button></a>
                </div>
            </div>
            )}
            
        </div>
    )
}

export default Home3
