import { useContext } from 'react'
import face from '../assets/images/face.jpeg'
import { themecontext } from './themecontext'
function Home1() {
    const {colors,setcolors,dtheme}=useContext(themecontext)
    function changetheme(theme){
        if(theme==='dark'){
            window.localStorage.setItem('colors',JSON.stringify(dtheme.dc))
            setcolors(dtheme.dc)
            
        }
        if(theme==='light'){
            window.localStorage.setItem('colors',JSON.stringify(dtheme.lc))
            setcolors(dtheme.lc)
        }
    }
    return (
        <div className="home1">
            <div className="home1-wrap">
                <div className="home1-title">
                    <h1>Hi, I'm Nagadeep</h1>
                 </div>
                <div className="home1-window">
                    <div className="window-header">
                        <div className="window-header-icons">
                            <div className="dots" id="red"></div>
                            <div className="dots" id="yellow"></div>
                            <div className="dots" id="green"></div>
                        </div>
                        <h3 className="window-header-contact">Contact</h3>
                    </div>
                    <div className="window-body">
                        <div className="window-body-left">
                            <img src={face} alt="Face"/>
                            <h3>Personalize Theme</h3>
                            <div className="window-body-left-themes">
                                <div className="theme" id="light" onClick={()=>changetheme('light')}></div>
                                <div className="theme" id="dark" onClick={()=>changetheme('dark')}></div>
                            </div>
                            <h5>*Theme settings will be saved for your next vist</h5>
                        </div>
                        <div className="window-body-right">
                            <div className="window-body-right-box">
                                <h2>Who Am I?</h2>
                                <h4>An Ethusiastic Real Time Developer, Captures Tech Stuff and makes shelf of Applications</h4>
                                
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Home1
