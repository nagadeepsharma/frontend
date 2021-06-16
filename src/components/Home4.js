import React from 'react'
import together from '../assets/images/together.jpg'
function Home4() {
    return (
        <div className="home4">
            <div className="home4-title">
                <h2>Portfolio & Thoughts, Projects</h2>
            </div>
            <div className="home4-projects">
                <div class="home4-post">
                    <div className="post-img">
                        <img src={together} />
                    </div>
                    <div className="post-details">
                        <h3>Title</h3>
                        <p>Description</p>
                        <a href="">Let me in</a>
                    </div>
                </div>
                <div class="home4-post">
                    <div className="post-img">
                        <img src={together} />
                    </div>
                    <div className="post-details">
                        <h3>Title</h3>
                        <p>Description</p>
                        <a href="">Let me in</a>
                    </div>
                </div>
                <div class="home4-post">
                    <div className="post-img">
                        <img src={together} />
                    </div>
                    <div className="post-details">
                        <h3>Title</h3>
                        <p>Description</p>
                        <a href="">Let me in</a>
                    </div>
                </div>
                <div class="home4-post">
                    <div className="post-img">
                        <img src={together} />
                    </div>
                    <div className="post-details">
                        <h3>Title</h3>
                        <p>Description</p>
                        <a href="">Let me in</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home4