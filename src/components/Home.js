import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
import Home5 from './Home5';
import Home6 from './Home6';
import React from 'react'
import dest from '../assets/Destinations.json'

function Home() {
    const profile={
        github:"http://github.com/nagadeepsharma",
        resume:"https://drive.google.com/file/d/1T9H56YGzJZFf75qwug2ub5Qqg_NtKY90/view?usp=sharing",
        instagram:"https://www.instagram.com/nagadeep.sharma/",
        linkedin:"https://www.linkedin.com/in/nagadeep-sharma/"
    }
    const places=dest.map((ii)=>{if(ii.city==='Bangalore'){
        return ii.places
    }})
    console.log(places);

    return (
        <>
            <Home1 />
            <Home2 profile={profile}/>

            {
                places[0].map((i)=>(<h1>{i.name}</h1>))
            }


            <Home3 />
            <Home4 />
            <Home5 />
            <Home6 />  
        </>
    )}
export default Home;