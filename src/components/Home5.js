import React from 'react'
import { Link } from 'react-router-dom'

function Home5() {
    return (
        <div className="home5">
            <div className="home5-content">
            <h1>Do You Know I Write <span>BLOGS</span></h1>
            <button style={{padding:"5px 0px"}}><Link to="/blogs" style={{color:"#f4f4f4"}}>Checkout</Link></button>
            </div>
        </div>
    )
}

export default Home5
