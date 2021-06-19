import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header'
function Detailblog() {
    const {id}=useParams()
    const [blog,setblog]=useState([])
    console.log(blog);
    useEffect(()=>{
        const axios=require('axios')
        if(blog.length===0){
            axios.get(`http://nagadeepsharma.pythonanywhere.com/blogs/${id}`)
            .then((data)=>setblog(data.data))
        }
    })
    return (
        <div>
            <Header />
            <div className="particular">
            {blog.length==0?<h1>Loading...</h1>:
            <div className="blog-content" dangerouslySetInnerHTML={{__html:blog.content}}></div>
            }</div>
        </div>
    )
}

export default Detailblog
