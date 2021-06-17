import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
    const dispatch=useDispatch()
    const themechanger=useSelector((state)=>state.changed)
    return (
            <div className="window-header">
                <div className="window-header-icons">
                    <div className="dots" id="red"></div>
                    <div className="dots" id="yellow"></div>
                    <div className="dots" id="green"></div>
                </div>
                <div className="left-bars">
                🌞
                <div class="switch">
                    
                    <input class="checkbox" onChange={()=>dispatch({type:themechanger?"light":"dark"})} type="checkbox" name="" id="ch" />
                    <label class="lab" for="ch"></label>
                </div>
                🌚
                <h3 className="window-header-contact">Contact</h3>
                </div>
            </div>
    )
}

export default Header
