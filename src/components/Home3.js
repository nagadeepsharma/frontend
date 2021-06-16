import React from 'react'
import together from '../assets/images/eth.jpg'
function Home3() {
    return (
        <div className="home3">
            <div className="home3-featured">
                <img src={together} />
                <div className="img-details">
                    <h1>TogEther</h1>
                    <h3>An Ethereum based Blockchain Decentralized Application that Connects Startups and Investors, Basically funding Platform.</h3>
                    <a href=""><button>Checkout!</button></a>
                </div>
            </div>
        </div>
    )
}

export default Home3
