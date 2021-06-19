import React, { useEffect, useState } from 'react'
function Home4() {
    const axios=require('axios')
    const [projects,setprojects]=useState([])
    const [limit,setlimit]=useState(4)
    useEffect(()=>{
        if(projects.length===0){
        axios.get('http://nagadeepsharma.pythonanywhere.com/projects')
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
                projects.slice(0,limit).map((project)=>
                <div className="home4-post" key={project.id}>
                    <div className="post-img">
                        <img src={"http://nagadeepsharma.pythonanywhere.com"+project.thumbnail} />
                    </div>
                    <div className="post-details">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_window">Let me in</a>
                        <div className="post-tags">
                            {project.tags.map((tag)=><p key={tag}>{tag}</p>)}
                        </div>
                    </div>
                </div>
            )}
            </div>
            <a style={{margin:"5px 5px",cursor:"pointer"}} onClick={()=>setlimit(projects.length)}>{projects.length!==0 && limit!==projects.length && limit<projects.length?"View More":""}</a>
        </div>
    )
}

export default Home4