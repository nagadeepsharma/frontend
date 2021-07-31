// import { useDispatch,} from 'react-redux'
import face from '../assets/face.jpeg'
import Header from './Header'
function Home1() {
    // const dispatch=useDispatch()
    return (
        <div className="home1">
            <div className="home1-wrap">
                <div className="home1-title">
                    <h1>Hi, I'm Nagadeep</h1>
                 </div>
                <div className="home1-window">
                    <Header />
                    <div className="window-body">
                        <div className="window-body-left">
                            <img src={face} alt="Face"/>
                            {/* <h3>Personalize Theme</h3> */}
                            {/* <div className="window-body-left-themes">
                                <div className="theme" id="light" onClick={()=>dispatch({type:'light'})}></div>
                                <div className="theme" id="dark" onClick={()=>dispatch({type:'dark'})}></div>
                            </div> */}
                            <h5>*Theme settings will be saved for your next visit</h5>
                        </div>
                        <div className="window-body-right">
                            <div className="window-body-right-box">
                                <h2>Who Am I?</h2>
                                <h4>An Enthusiastic Real Time Developer, Captures Tech Stuff and makes shelf of Applications</h4>
                                
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Home1
