import React, { useEffect, useState } from 'react'
function Home4() {
    const axios=require('axios')
    const [projects,setprojects]=useState([])
    useEffect(()=>{
        if(projects.length===0){
        axios.get('http://127.0.0.1:8000/projects')
        .then((data)=>setprojects(data.data.active))
    }
    })
    return (
        <div className="home4">
            <div className="home4-title">
                <h2>Portfolio & Thoughts, Projects</h2>
            </div>
            <div className="home4-projects">
                {projects.length===0?<h1>Loading.....</h1>:
                projects.map((project)=>
                <div className="home4-post">
                    <div className="post-img">
                        <img src={"http://127.0.0.1:8000"+project.thumbnail} />
                    </div>
                    <div className="post-details">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_window">Let me in</a>
                        <div className="post-tags">
                            {project.tags.map((tag)=><p>{tag}</p>)}
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}

export default Home4