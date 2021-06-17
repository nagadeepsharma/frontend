import React, { useContext } from 'react'
import { themecontext } from './themecontext'

function Home2() {
    const {profile}=useContext(themecontext)
    return (
        <div className="home2">
            <div className="home2-left">
            <h2>More About Me</h2>
            <p>I build new projects just to tickle my brain and love teaching others how they're made.</p>
            <p>While I keep busy Making Projects, I still search of a great team & projects that interest me.</p>
            <hr />
            <h2>Top Expertise</h2>
            <p>Fullstack developer with primary focus on Django + React: <a target="_window" href={profile.resume}>Download Resume</a></p>
            <div className="home2-left-skills">
                <div className="ul">
                    <li>Django</li>
                    <li>React & Native</li>
                    <li>Ethereum</li>
                    <li>Solidity</li>
                    <li>Postgres</li>
                </div>
                <div className="ul">
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>Java</li>
                    <li>Html & Css</li>
                </div>
            </div>
            </div>
            <div className="home2-right">
                <div className="home2-right-code">
                    <code>
                        while(life())&#123;<br />
                            wakeup();<br />
                            eating();<br />
                            coding();<br />
                            sleeping();<br />
                            if(isAweekend())&#123;<br />
                                socialLife();<br />
                                &#125;<br />
                        &#125;
                    </code>
                </div>
                <div className="home2-right-social">
                    <h2>Find me on Social</h2>
                    <p><a target="_window" href={profile.github}>Gitub: @nagadeepsharma</a></p>
                    <p><a target="_window" href={profile.linkedin}>Linkedin: @nagadeepsharma</a></p>
                    <p><a target="_window" href={profile.instagram}>Instagram: @nagadeepsharma</a></p>
                </div>
            </div>
        </div>
    )
}

export default Home2
