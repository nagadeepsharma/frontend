import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function Header() {
    const dispatch=useDispatch()
    const themechanger=useSelector((state)=>state.themes.changed)
    return (
            <div className="window-header" >
                <div className="window-header-icons">
                    <Link to="/"><div className="dots" id="red"></div></Link>
                    <Link to="/"><div className="dots" id="yellow"></div></Link>
                    <Link to="/"><div className="dots" id="green"></div></Link>
                </div>
                <div className="left-bars">
                
                <div className="switch">
                🌞
                    <input className="checkbox" checked={themechanger?true:false} onChange={()=>dispatch({type:themechanger?"light":"dark"})} type="checkbox" name="" id="ch" />
                    <label className="lab" htmlFor="ch"></label>
                🌚
                </div>
               
                <p className="window-header-contact"><Link to="/#contact" onClick={()=>window.location.href="/#contact"}>Contact</Link></p>
                </div>
            </div>
    )
}

export default Header
