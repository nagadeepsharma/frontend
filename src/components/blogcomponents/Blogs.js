import React,{useState,useEffect} from 'react'
import Header from '../Header'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
function Blogs() {
    const blogs=useSelector((state)=>state.blogs)
    const dispatch = useDispatch()
    useEffect(()=>{
        const axios=require('axios')
        if(blogs.length===0){
        axios.get('https://nagadeepsharma.pythonanywhere.com/blogs')
        .then((data)=>dispatch({type:"loadblogs",payload:data.data}))
        }
    })

    return (
        <div className="blogs">
            <Header/>
            <div className="blog-section">
            {blogs.length===0?<h1>Loading...</h1>:
            blogs.map((blog)=>
            <div className="blogs-blog" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <Link to={`/blogs/${blog.id}`}>Read More....</Link>
            </div>
            )}
            </div>
        </div>
    )
}

export default Blogs