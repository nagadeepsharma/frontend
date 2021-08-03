import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
import Home5 from './Home5';
import Home6 from './Home6';
import React from 'react'

function Home() {
    const profile={
        github:"http://github.com/nagadeepsharma",
        resume:"https://drive.google.com/file/d/1aYvbjIdaYC35I3vD949m2HGb1r54yR-6/view?usp=sharing",
        instagram:"https://www.instagram.com/nagadeep.sharma/",
        linkedin:"https://www.linkedin.com/in/nagadeep-sharma/"
    }

    return (
        <>
            <Home1 />
            <Home2 profile={profile}/>
            <Home3 />
            <Home4 />
            <Home5 />
            <Home6 />  
        </>
    )}
export default Home;